<template>
  <q-layout view="hhh lpr fff">
    <Header/>
    <board-drawer-right/> 
    <q-page-container>
       <BoardHeader/>
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Header from '../../components/default/Header.vue'
import BoardHeader from '../../components/body/board/BoardHeader.vue'
import BoardDrawerRight from '../../components/body/board/BoardDrawerRight.vue'

export default defineComponent({
  name: 'BoardLayout',
  components:{
    Header,
    BoardDrawerRight,
    BoardHeader
  },
  setup () {
    return {

    }
  }
})    
</script>
<style>

</style>
