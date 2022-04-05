<template>
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
      <apex-chart
        type="line"
        height="350"
        :options="options"
        :series="series"
      />
    </q-card>
  </div>
</template>
<script>
import { computed, defineComponent, onBeforeMount, reactive, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name : 'AdminChart',
  setup () {

    const store = useStore();
    const state = reactive({
      model: ref('월간'),
      option: ['월간','주간','일간'],
    })

    onBeforeMount(() => {
      store.dispatch('chart/chartOptionAction','')
      store.dispatch('chart/chartSeriesAction','')
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

    return {
      state,
      options,
      series
    }
  }
})
</script>
<style>

</style>
