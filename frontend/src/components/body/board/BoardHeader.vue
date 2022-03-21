<template>
    <div class="row justify-center">
        <!-- 카테고리 놓는곳 -->
      <div class="col">
        <q-tabs>
          <q-route-tab
            v-for="(category,i) in categories"
            :key=i
            class="text-dark" 
            :name=category._id
            :label=category.c_name
            @click =listCategory(category._id)
          />
        </q-tabs>
      </div>
    </div>
</template>
<script>
import {ref} from 'vue'

export default{
   data: () => ({
     categories:[]
   }),
   beforeCreate () {
     this.$axios.get('/api/category/find-category')
     .then(res=>{
       this.categories = res.data.categoryList
      
     }).catch(err=> {
       console.log(err);
     })
   },
   methods:{
     listCategory(payload){
      //  console.log(payload)
      
       this.$router.push('/board/'+payload)
      // this.$axios.get('/api/board/create',{params:{title:'sadf',content:'asd',write_date:'adsfads',modify_date:'asdfad',c_id:'6237e31e727e6a9e69de5a17'}})
      // .then(res=>{
      //   console.log(res.data)
      // }).catch(err=>{
      //   console.log(err)
      // })
     }
   }
}
</script>
<style>
</style>
