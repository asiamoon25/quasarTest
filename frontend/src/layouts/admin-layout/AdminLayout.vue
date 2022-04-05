<template>
<q-layout view="hhh lpr fff">
  <!-- header -->
  <default-header/>
  <q-page-container>
    <admin-drawer-right/>
    <router-view/>
  </q-page-container>
</q-layout>
</template>
<script>
import AdminDrawerRight from "components/admin-component/admin-default/AdminDefaultDrawer";
import DefaultHeader from "components/default/DefaultHeader";
export default {
  components: { DefaultHeader, AdminDrawerRight },
  setup () {

    return {

    }
  }
};
</script>
<style>

</style>
