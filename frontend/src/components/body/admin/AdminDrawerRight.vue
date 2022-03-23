<template>
  <q-drawer
    side="left"
    show-if-above
    :breakpoint="700"
    bordered
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item
          class="text-center"
          >
          <q-item-section>
            <span class="material-icons">
              settings 블로그 관리 페이지
            </span>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item
          class="text-center"
          >
          <q-item-section>
            <q-tree
              class="text-subtitle2"
              :nodes="categories"
              node-key="label"
              :expanded.sync="expanded"
              @update:selected="selectedNode"
              :selected.sync="state.selected"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import {computed, reactive} from "vue";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import axios from 'axios';
export default {
  name: "AdminDrawerRight",
  setup() {


    const store = useStore();
    const router = useRouter();
    const state = reactive(({
      selected: ''
    }));
    const expanded = computed({
      set(val) {},
      get() {
        return store.getters['admin/menuTreeExpandedGetter']
      }
    })
    const categories = computed({
      set(val) {},
      get() {
        return store.getters['admin/menuTreeDataGetter']
      }
    })
    const selectedNode = function(val) {
      axios.post('/api/admin/create',null,{params:{name: '글쓰기',depth: 1}})
      .then(res=>{
        console.log(res.data.AdminCategories);
      }).catch(err=>{
        console.log(err);
      })
    }


    return {
      state,
      categories,
      expanded,
      selectedNode,
    }
  }
}
</script>

<style scoped>

</style>
