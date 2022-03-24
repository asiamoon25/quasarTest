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
        <q-expansion-item
          expand-separator
          icon="mail"
          label="Inbox"
          caption="5 unread emails"
          default-opened
        >

          <q-item
            class="text-center"
            clickable
            @click="selectedNode"
          >
            <q-item-section>

              <p>categories</p>

            </q-item-section>
          </q-item>
        </q-expansion-item>
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

    const selectedNode = function() {
      axios.post('/api/admin/create',{params:{name:'글 쓰기',router_path:'write'}})
      .then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
      // axios.get('/api/admin').then(res=>{
      //   console.log(res.data);
      // }).catch(err=>{
      //   console.log(err);
      // })
    }


    return {
      state,
      selectedNode,
    }
  }
}
</script>

<style scoped>

</style>
