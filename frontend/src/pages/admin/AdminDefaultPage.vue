<template>
<div>
  <div class="row justify-center q-ma-md">
      <q-card
      class="col-4"
      flat
      bordered
      >
       <div class="text-center">
         <h6 class="no-margin">Today Visitor</h6>
         <p class="text-subtitle1">10</p>
       </div>
      </q-card>
      <q-card
      class="col-4"
      flat
      bordered
      >
        <div class="text-center">
          <h6 class="no-margin">YesterDay Visitor</h6>
          <p class="text-subtitle1">10</p>
        </div>
      </q-card>
      <q-card
      class="col-4"
      flat
      bordered
      >
        <div class="text-center">
          <h6 class="no-margin">Total Visitor</h6>
          <p class="text-subtitle1">10</p>
        </div>
      </q-card>
  </div>
  <div class="row justify-center q-ma-md">
      <q-card
        class="col"
        flat
        bordered
      >
        <q-select
          v-model="state.model"
          :options="state.option"
          borderless
        />
        <apexchart
          type="line"
          height="350"
          :options="options"
          :series="series"
        />
      </q-card>
  </div>
  <div class="row justify-center q-ma-md">
    <q-card
      class="col"
      flat
      bordered
    >
      <h6 class="no-margin">popular articles</h6>
      <div>
        <div class="row">
          <q-card
            :class="colsWidth"
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
                src="../../assets/다운로드.jpeg"/>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">카테고리 들어갈 부분</div>

                <div class="text-h5 q-mt-sm q-mb-xs">타이틀</div>

                <div class="text-caption text-grey">
                  본문 내용 100자 이내로 들어가는 부분
                </div>
              </q-card-section>
            </q-card-section>
            <q-separator />
          </q-card>
        </div>
      </div>
    </q-card>
  </div>
  <div class="row justify-center q-ma-md">
    <q-card
      class="col"
      flat
      bordered
    >
      <h6 class="no-margin">latest article</h6>
      <div>
        <div class="row">
          <q-card
            :class="colsWidth"
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
                src="../../assets/다운로드.jpeg"/>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">카테고리 들어갈 부분</div>

                <div class="text-h5 q-mt-sm q-mb-xs">타이틀</div>

                <div class="text-caption text-grey">
                  본문 내용 100자 이내로 들어가는 부분
                </div>
              </q-card-section>
            </q-card-section>
            <q-separator />
          </q-card>
        </div>
      </div>
    </q-card>
  </div>
</div>
<!--

  들어가야 될것들

  오늘 방문자수

  차트(방문자수)

  최근 게시물

  인기 글 (최대 5개만)

-->
</template>
<script>
import {computed, onBeforeMount, reactive, ref} from "vue";
import {useRoute, useRouter} from 'vue-router';
import { useQuasar }from 'quasar';
import {useStore} from "vuex";

export default {
  name : 'AdminDefaultPage',

  setup() {
    const $q = useQuasar()
    const store = useStore()
    const router = useRouter()
    const routes = useRoute()
    const state = reactive({
      cursorStyle:{
        cursor: '',
      },
      model:ref('월간') ,
      option:['월간','주간','일간'],

    })
    onBeforeMount(()=>{

      const category = routes.params.category

      store.dispatch('chart/chartOptionAction','')
      store.dispatch('chart/chartSeriesAction','')

    })

    const colsWidth = computed({
      set() {

      },
      get() {
        switch ($q.screen.name){
          case "xs": return 'col-12'
          case "sm": return 'col-12'
          case "md": return 'col-6'
          case "lg": return 'col-6'
          case "xl": return 'col-6'

        }
      }
    })
    const options = computed({
      set(val) {},
      get(){
        return store.getters['chart/chartOptionGetter']
      }
    })
    const series = computed({
      set(val){},
      get() {
        return store.getters['chart/chartSeriesGetter']
      }
    })
    const boardDetail = function boardDetail(){
      router.push('/');
    }

    const mousePoint =  function mousePoint(){
      state.cursorStyle.cursor = "pointer"
    }


    return {
      state,
      mousePoint,
      boardDetail,
      colsWidth,
      options,
      series
    }
  }
}
</script>
<style>

</style>
