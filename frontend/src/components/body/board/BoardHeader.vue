<template>
    <div class="row justify-center">
        <!-- 카테고리 놓는곳 -->
      <div class="col">
        <q-tabs>
          <q-route-tab class="text-dark" name="about" label="들어간다잉" to="/" />
          <q-route-tab class="text-dark" name="post" label="카테고리" to="/board"/>
        </q-tabs>
      </div>
    </div>
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
