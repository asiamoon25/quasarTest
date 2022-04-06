import axios from 'axios';
import {useRoute, useRouter} from 'vue-router';

export const boardAction = (context,payload) => {
            const router = useRouter();
            const category = payload;

            if(category == null || category ===''|| category === 'undefined'|| category ==='all'){
                axios.get('/api/board').then((res)=>{
                    context.commit('boardMutation',res.data.board);
                }).catch((err)=>{
                    console.log(err)
                });
            }else{
              console.log('else 탐')
                axios.get('/api/board/category',{params:{category:category}})
                  .then((res)=>{
                    context.commit('boardMutation',res.data.board);
                }).catch((err)=>{
                    console.log(err);
                });
        }

}

export const countAction = (context, payload) => {

  if(payload === undefined || payload === 'all' || payload === ''){
    axios.get('/api/board/count')
      .then(res=> {
        context.commit('countMutation',res.data.countResult);
      }).catch(err=>{
      console.log(err);
    })
  }else{
    axios.get('/api/board/category-page',{params:{category:payload}})
      .then(res=>{
        context.commit('countMutation',res.data.result);
      }).catch(err=> {
        console.log(err);
    })
  }
}




//-----------------------------category-------------------------------------
export const categoryAction = (context,payload) => {
          axios.get('/api/category/get-category')
            .then(res=>{
              context.commit('categoryMutation',res.data.category);
            }).catch(err=>{
              console.log(err);
          });
      }




export default function() {
    return {
        boardAction : true,
        categoryAction:true,
        countAction: true
    }
}
