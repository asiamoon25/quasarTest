<template>
  <div>
      <div class="row">
        <h4>전체</h4>
      </div>
      <div
      class="row q-mt-sm justify-center"
      v-if="board"
      v-for="(bo,i) in board"
      :key="i"
      >
        <div class="col-9 q-ml-xl">
        <q-card
          class="my-card"
          flat
          bordered
          @mouseover.stop="mousePoint"
          v-bind:style="cursorStyle"
          @click="boardDetail"
        >
          <q-card-section horizontal>
                <q-img
                  width="40vh"
                  height="20vh"
                  src="../../assets/다운로드.jpeg"/>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">카테고리 들어갈 부분</div>

                <div class="text-h5 q-mt-sm q-mb-xs">{{ bo.title }}</div>

                <div class="text-caption text-grey">
                  본문 내용 100자 이내로 들어가는 부분
                </div>
              </q-card-section>
          </q-card-section>
          <q-separator />
        </q-card>
        </div>
      </div>
    <Comment/>

  </div>

</template>
<script>
import { defineComponent } from 'vue'
import Comment from '../../components/body/board/Comment';
export default defineComponent({
  name: 'Board',
  components:{
    Comment
  },
  data: ()=>({
    board: [],
    cursorStyle:{
      cursor:'',
    }
  }),
  created() {
       this.$axios.get('/api/board').then((res)=>{
         this.board = res.data.board
        }).catch((err)=>{
          console.log(err)
        })
  },
  methods:{
    mousePoint(){
      this.cursorStyle.cursor = "pointer"
    },
    boardDetail(){
      this.$router.push('/');
    }
  }
})
</script>
<style>
.content{
  width:750px;
  margin: 0 auto;
}
</style>
