<template>
  <div class="row justify-center">
    <!-- 카테고리 놓는곳 -->
    <div class="col">
      <q-tabs>
        <q-route-tab
          v-for="(category,i) in categories"
          :key=i
          class="text-dark"
          :label=category.c_name
          @click =listCategory(category.router_path)
        />
      </q-tabs>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, onBeforeMount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name : 'BoardCategory',
  setup(){
    const state = reactive(({
      //data 대신
    }))
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    onBeforeMount(()=>{
      store.dispatch('board/categoryAction')
        .then(()=> {

        });
    });
    const categories = computed({
      set(val){

      },
      get(){
        return store.getters['board/categoryGetter'];
      }
    });
    const listCategory =  function(payload) {
       router.push('/board/'+payload);

      store.dispatch('board/countAction',payload);
    }
    return{
      state,
      categories,
      listCategory
    }
  }
})
</script>
<style>

</style>
