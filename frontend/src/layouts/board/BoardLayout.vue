<template>
  <q-layout view="hhh lpr fff">
    <board-header/>
    <board-drawer-right/>
    <q-page-container>
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BoardHeader from 'components/body/board/BoardHeader.vue'
import BoardDrawerRight from '../../components/body/board/BoardDrawerRight.vue'

export default defineComponent({
  name: 'BoardLayout',
  components:{
    BoardHeader,
    BoardDrawerRight
  },
  setup () {
    return {

    }
  }
})    
</script>
<style>

</style>
