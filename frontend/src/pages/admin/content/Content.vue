<template>
<BoardList/>
</template>
<script>
import { defineComponent} from "vue";
import BoardList from "components/body/admin/board-manage/BoardList";
export default defineComponent({
  name : 'BoardManagePage',
  components:{
  BoardList
  },
  setup() {

    return {

    }
  }
})
</script>
<style>

</style>
