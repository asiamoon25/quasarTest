<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="result"
      input
    />
  </div>
</template>
<script>
import {defineComponent, ref, reactive, onBeforeMount, computed} from "vue";
import {useStore} from "vuex";
export default defineComponent({
  name : 'BoardPagination',
  setup () {
    const store = useStore();
    const state = reactive({

    });

    onBeforeMount(()=>{
       const countResult = store.dispatch('board/countAction');
    });

    const result = computed({
      set() {

      },
      get() {
        return store.getters['board/countGetter'];
      }
    })
    return {
      state,
      current: ref(3),
      result
    }
  }
})
</script>
<style>

</style>
