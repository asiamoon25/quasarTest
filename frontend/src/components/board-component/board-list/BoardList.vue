<template>
  <div>
    <div
      class="row"
      v-if="boards"
    >
      <h4>전체</h4>
    </div>
    <div
      class="row q-mt-sm justify-center"
      v-for="(bo,i) in boards"
      :key="i"
    >
      <div class="col-9 q-ml-xl">
        <q-card
          class="my-card"
          flat
          bordered
          @mouseover.stop="mousePoint"
          v-bind:style="state.cursorStyle"
          @click="boardDetail"
        >
          <q-card-section horizontal>
            <q-img
              width="40vh"
              height="20vh"
              src="../../../assets/다운로드.jpeg"/>
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
  <!-- <Comment/> -->
  </div>
</template>
<script>
import {defineComponent, computed, onBeforeMount, reactive, watch, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from "vuex";

export default defineComponent({
  name: 'BoardList',
  components:{
    // Comment
  },
setup(){
    const state = reactive({
      board: [],
      cursorStyle:{
        cursor: '',
      }
    })
  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  watch(() => route.name, async () => {
    console.log(route.params.category)

    // await store.dispatch('board/boardAction',category)
  })
    onBeforeMount(async ()=>{
      const category = route.params.category

      await store.dispatch('board/boardAction',category)
    })

    const mousePoint =  function mousePoint(){
      state.cursorStyle.cursor = "pointer"
    }

    const boardDetail = function boardDetail(){
      router.push('/');
    }

    const boards = computed({
      set(val) { // 이건 안씀

      },
      get () {
        return store.getters['board/boardGetter']
      }
    })
    return{
      mousePoint,
      boardDetail,
      state,
      boards
    }
  }
})
</script>
<style>

</style>
