import axios from 'axios';

export const getCategoriesAction = (context) => {
  axios.get('/api/admin')
    .then(res=>{
      context.commit('categoryMutation',res.data.categories)
    }).catch(err=> {
      console.log(err)
  })
}



export default function() {
    return {
      getCategoriesAction : true
    }
}
