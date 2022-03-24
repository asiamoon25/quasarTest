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

    const selectedNode = function(val) {
      //url,data,{headers:{"Content-Type" : "application/json"}}

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
