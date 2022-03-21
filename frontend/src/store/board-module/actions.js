import axios from 'axios'
import {useRoute, useRouter} from 'vue-router'
export const boardAction = (context,payload) => {
            const router = useRouter()
            const category = payload

            if(category == null || category ==''|| category == 'undefined'){
                axios.get('/api/board').then((res)=>{
                    context.commit('boardMutation',res.data.board)
                }).catch((err)=>{
                    console.log(err)
                })
            }else{
                axios.get('/api/board/category',{params:{category: category}}).then((res)=>{
                    context.commit('boardMutation',res.data.board)
                }).catch((err)=>{
                    console.log(err)
                })
        }

}


export default function() {
    return {
        boardAction : true
    }
}
