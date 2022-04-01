<template>
<!-- 게시판 카테고리임 -->
  <div class="col-9">
    <h4>카테고리 관리</h4>
    <q-card
      flat
      bordered
    >
      <p class="text-h6">카테고리 CRUD</p>
      <q-card-section>
        <q-item clickable>
          카테고리 이름들
        </q-item>
        <q-item clickable>
          카테고리 이름들2
        </q-item>
        <q-item clickable>
          카테고리 이름들3
        </q-item>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CategoryManage',
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
