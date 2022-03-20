<template>
  <div>
      <div
      class="row q-mt-xl justify-center"
      v-for="(bo,i) in board"
      :key="i"
      >
        <div class="col-9 q-ml-xl">
        <q-card 
          class="my-card" 
          flat 
          bordered
        >
          <q-card-section horizontal>
                <q-img 
                  width="40vh"
                  height="20vh"
                  src="../../assets/다운로드.jpeg"/>
             
              <q-card-section class="q-pt-xs">
                <div class="text-overline">카테고리 들어갈 부분</div>

                <div class="text-h5 q-mt-sm q-mb-xs">제목들어갈부분</div>

                <div class="text-caption text-grey">
                  본문 내용 100자 이내로 들어가는 부분
                </div>
              </q-card-section>
          </q-card-section>
          <q-separator />
        </q-card>
        </div>
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
       this.$axios.get('/api/board').then((res)=>{
         this.board = res.data.board
        }).catch((err)=>{
          console.log(err)
        })
  },
})
</script> 
<style>
</style>
