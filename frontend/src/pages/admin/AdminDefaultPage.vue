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
        <apexchart
          type="line"
          height="350"
          :options="state.options"
          :series="state.series"
        />
      </q-card>
  </div>
  <div class="row justify-center q-ma-md">
    <q-card>
      <!-- 인기글 들어가는 곳 -->
    </q-card>
  </div>
  <div class="row justify-center q-ma-md">
    <q-card>
      <!-- 최근 글 들어가는 곳(옆으로) -->
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
import {computed, onBeforeMount, reactive} from "vue";
import {useRoute, useRouter} from 'vue-router';

export default {
  name : 'AdminDefaultPage',

  setup() {

    const router = useRouter()
    const routes = useRoute()
    const state = reactive({
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories:[1991,1992,1993,1994,1995,1996,1997,1998]
        }
      },
      series:[{
        name: 'series-1',
        data:[30,40,45,50,49,60,70,91]
      }]

    })
    onBeforeMount(()=>{
      const category = routes.params.category
      if(category == null){

      }
    })
    return {
      state
    }
  }
}
</script>
<style>

</style>
