<template>
  <div class="row justify-center q-ma-md">
    <q-card
      class="col"
      flat
      bordered
    >
      <h6 class="no-margin">popular articles</h6>
      <div>
        <div class="row">
          <q-card
            :class="colsWidth"
            flat
            bordered
            @mouseover.stop="mousePoint"
            v-bind:style="state.cursorStyle"
            @click="boardDetail"
          >
            <q-card-section horizontal>
              <q-img
                width="40vh"
                height="20vh"
                src="../../../assets/다운로드.jpeg"/>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">카테고리 들어갈 부분</div>

                <div class="text-h5 q-mt-sm q-mb-xs">타이틀</div>

                <div class="text-caption text-grey">
                  본문 내용 100자 이내로 들어가는 부분
                </div>
              </q-card-section>
            </q-card-section>
            <q-separator />
          </q-card>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
import { computed, defineComponent, reactive } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
export default defineComponent({
  name : 'AdminMainBoard',
  setup () {

    const $q = useQuasar();
    const router = useRouter();
    const state = reactive({
      cursorStyle: {
        cursor: '',
      }
    })
    const mousePoint = function mousePoint () {
      state.cursorStyle.cursor = "pointer"
    }

    const boardDetail = function boardDetail(){
      router.push('/');
    }

    const colsWidth = computed({
      set() {

      },
      get() {
        switch ($q.screen.name){
          case "xs": return 'col-12'
          case "sm": return 'col-12'
          case "md": return 'col-6'
          case "lg": return 'col-6'
          case "xl": return 'col-6'
          default : return 'col'
        }
      }
    })

    return {
      state,
      mousePoint,
      boardDetail,
      colsWidth
    }
  }
})
</script>
<style>

</style>
