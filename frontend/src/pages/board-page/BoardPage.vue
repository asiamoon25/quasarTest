<template>
  <board-list/>
</template>
<script>
import { defineComponent } from "vue";
import BoardList from "components/board-component/board-list/BoardList";
export default defineComponent({
  name : 'BoardPage',
  components: { BoardList },
  setup () {

    return {

    }
  }
})
</script>
<style>

</style>
