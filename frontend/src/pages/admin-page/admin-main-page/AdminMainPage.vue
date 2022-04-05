<template>
  <div>
    <admin-visitor/>
    <admin-chart/>
    <admin-main-board/>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import AdminVisitor from "components/admin-component/admin-main/AdminVisitor";
import AdminChart from "components/admin-component/admin-chart/AdminChart";
import AdminMainBoard from "components/admin-component/admin-board/AdminMainBoard";

export default defineComponent({
  components: { AdminMainBoard, AdminChart, AdminVisitor }
})
</script>
<style>

</style>
