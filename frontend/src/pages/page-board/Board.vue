<template>
<div>
  <div
    v-for="(bo,i) in board"
    :key="i"
  >
    <p>{{bo.title}} || {{bo.writer}}</p> 
    
  </div>
</div>

</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Board',
  data: ()=>({
    board: []
  }),
  created() {
       this.$axios.get('/board').then((res)=>{
         this.board = res.data.board
        }).catch((err)=>{
          console.log(err)
        })
  },
})
</script>
<style></style>
