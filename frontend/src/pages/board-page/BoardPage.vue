<template>
  <board-list/>
  <board-pagination/>
</template>
<script>
import { defineComponent } from "vue";
import BoardList from "components/board-component/board-list/BoardList";
import BoardPagination from "components/board-component/board-pagenation/BoardPagination";
export default defineComponent({
  name : 'BoardPage',
  components: {BoardPagination, BoardList },
  setup () {

    return {

    }
  }
})
</script>
<style>

</style>
