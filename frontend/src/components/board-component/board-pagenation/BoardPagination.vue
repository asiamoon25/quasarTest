<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      :max="result"
      input
     :model-value="state.current"
    />
  </div>
</template>
<script>
import {defineComponent, ref, reactive, onBeforeMount, computed} from "vue";
import {useStore} from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name : 'BoardPagination',
  setup () {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const state = reactive({
        current: ref(1)
    });

    onBeforeMount(()=>{

    });

    const result = computed({
      set() {

      },
      get() {
        return parseInt(store.getters['board/countGetter']);
      }
    })
    return {
      state,

      result
    }
  }
})
</script>
<style>

</style>
