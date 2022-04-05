<template>
  <q-layout view="lHh Lpr lFf">
   <!-- header -->
    <default-header/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import DefaultHeader from "components/default/DefaultHeader";

export default defineComponent({
  name: 'MainLayout',

  components: {
    DefaultHeader

  },

  setup () {


    return {

    }
  }
})
</script>
