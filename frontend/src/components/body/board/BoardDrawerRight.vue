<template>
    <q-drawer
        side="right"
        show-if-above
        :breakpoint="700"
        elevated
    >
        <q-scroll-area class="fit">
            <q-list>
                <q-item
                 class="text-center"
                 clickable>
                    <q-item-section>
                        카테고리
                    </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'BoardDrawerRight',
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



