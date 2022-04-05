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
          class="text-center text-black"
          clickable
          link
          to="/admin"
        >
          <q-item-section>
            <span class="material-icons">
              settings 블로그 홈
            </span>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list
        v-for="(category,i) in categories"
        :key="i"

      >
        <q-expansion-item
          expand-separator
          icon="content_copy"
          :label=category.name
          default-opened
        >
          <q-item
            class="text-center"
            clickable
            v-for="(cate,index) in category.children"
            :key="index"
            @click="selectedNode(category.router_path,cate.router_path)"
          >
            <q-item-section>
              <p>{{ cate.name }}</p>
              <p id="routerPath">{{ cate.router_path }}</p>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import {computed, onBeforeMount, reactive} from "vue";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
export default {
  name: "AdminDrawerRight",
  setup() {


    const store = useStore();
    const router = useRouter();
    const state = reactive(({
      selected: ''
    }));

    onBeforeMount(()=>{
      store.dispatch('admin/getCategoriesAction');
    })

    const categories = computed({
        set(val) {
          store.commit('admin/categoryMutation', val)
        },
        get() {
          return store.getters['admin/categoryGetter']
        }
      }
    )

    const selectedNode = function(mainPathName,pathName) {
      router.push('/admin/'+mainPathName+'/'+pathName)
    }

    const adminHome = function() {
      router.push('/admin')
    }

    return {
      state,
      selectedNode,
      categories,
      adminHome
    }
  }
}
</script>

<style scoped>
#routerPath{
  display: none
}
</style>
