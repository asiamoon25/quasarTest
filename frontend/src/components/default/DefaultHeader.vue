<template>
  <q-header bordered class="bg-white">
    <q-toolbar>
      <q-toolbar-title>
        <h6 class="text-dark">YeonSangCoding</h6>
      </q-toolbar-title>
      <q-tabs dense>
        <q-route-tab class="text-dark" name="about" label="About" to="/" />
        <q-route-tab class="text-dark" name="post" label="Post" to="/board"/>
        <q-route-tab class="text-dark" name="admin" label="Setting" to="/admin"/>
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>
<script>
import {ref} from 'vue'

export default{
  setup () {
    return {

    }
  }
}
</script>
<style>
</style>
