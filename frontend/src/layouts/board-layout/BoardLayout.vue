<template>
  <q-layout view="hhh lpr fff">
    <default-header/>
    <board-drawer/>
    <q-page-container>
      <board-category/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
import DefaultHeader from "components/default/DefaultHeader";
import BoardDrawer from "components/board-component/board-default/BoardDrawer";
import BoardCategory from "components/board-component/board-default/BoardCategory";
export default defineComponent({
  name : 'BoardLayout',
  components: { BoardCategory, BoardDrawer, DefaultHeader },
  setup () {

    return {

    }
  }
})
</script>
<style>

</style>
