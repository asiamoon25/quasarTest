<template>
    <div class="row justify-center">
        <!-- 카테고리 놓는곳 -->
      <div class="col">
        <q-tabs>
          <q-route-tab
            v-for="(category,i) in categories"
            :key=i
            class="text-dark"
            :name=category._id
            :label=category.c_name
            @click =listCategory(category.c_name)
          />
        </q-tabs>
      </div>
    </div>
</template>
<script>
import {computed, onBeforeMount, reactive, ref} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default{

  setup(){
    const state = reactive(({
      //data 대신
    }))
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    onBeforeMount(()=>{
      store.dispatch('board/categoryAction',);
    });
    const categories = computed({
      set(val){
        store.commit('board/categoryMutation',val);
      },
      get(){
        return store.getters['board/categoryGetter'];
      }
    });
    const listCategory = function(payload) {
      router.push('/board/'+payload);
    }
    return{
      state,
      categories,
      listCategory
    }
  }
}
</script>
<style>
</style>
