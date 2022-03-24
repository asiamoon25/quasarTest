import axios from 'axios';
import {useRoute, useRouter} from 'vue-router';

export const adminMenuTreeAction = (context,payload) => {
  axios.get('/api/admin')
    .then(res=>{
      context.commit('')
    }).catch(err=>{
    console.log(err.response.data);
  })
}



export default function() {
    return {
      adminMenuTreeAction : true
    }
}
