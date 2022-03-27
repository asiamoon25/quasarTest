<template>
  <q-layout view="hhh lpr fff">
    <admin-header/>
    <q-page-container>
      <admin-drawer-right/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, onBeforeMount, reactive } from 'vue'
import AdminHeader from '../../components/default/Header'
import AdminDrawerRight from "components/body/admin/AdminDrawerLeft";
export default {
  name: "Admin",
  components:{
    AdminDrawerRight,
    AdminHeader
  },
  setup() {

    return {

    }
  }
}
</script>

<style scoped>

</style>
