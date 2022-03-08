<template>
      <q-header elevated class="bg-white">
        <q-toolbar>
            <q-toolbar-title>
                <h4 class="text-center text-dark">Welcome</h4>
            </q-toolbar-title>
        </q-toolbar>
         <q-tabs v-model="tab">
          <q-route-tab class="text-dark" name="images" label="Images" to="/" />
          <q-route-tab class="text-dark" name="videos" label="Videos" to="/index" />
          <q-route-tab class="text-dark" name="articles" label="Articles" to="/"/>
        </q-tabs>
      </q-header>
</template>
<script>
import {ref} from 'vue'

export default{
    setup () {
      
        return {
            tab: ref('images')
        }
    }
}

</script>

<style>
    
</style>