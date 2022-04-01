<template>
  <div class="row justify-center">
    <CategoryManageList v-if="$route.params.subCate==='category-manage'"/>
    <ContentManageList v-if="$route.params.subCate==='content-manage'"/>
    <ContentWrite v-if="$route.params.subCate==='content-write'"/>
  </div>

</template>
<script>
import {defineComponent} from "vue";
import CategoryManageList from "components/body/admin/content/category-manage/CategoryManageList";
import ContentManageList from "components/body/admin/content/content-manage/ContentManageList";
import ContentWrite from "components/body/admin/content/content-write/ContentWrite";

export default defineComponent({
  name : 'BoardManagePage',
  components:{
    ContentWrite,
    CategoryManageList,
    ContentManageList
  },
  setup() {

    return {

    }
  }
})
</script>
<style>

</style>
