<template>
  <q-drawer
    side="right"
    show-if-above
    :breakpoint="700"
    bordered
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item
          class="text-center"
          clickable
        >
          <q-item-section>
            최근 올린 게시글
          </q-item-section>
        </q-item>
        <q-item
          class="text-center"
          clickable
        >
          <q-item-section>
            인기글
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'BoardDrawer',
  components:{
  },
  setup () {
    return {

    }
  }
})
</script>
<style>

</style>



