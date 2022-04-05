<template>
 <q-page>
   <!-- main-article -->
   <main-article/>
   <div class="row flex-center">
     <!-- main-about -->
     <main-about/>
   </div>
 </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import MainArticle from "components/main-component/main-article/MainArticle";
import MainAbout from "components/main-component/main-about/MainAbout";
export default defineComponent({
  name: 'IndexPage',
  components: { MainArticle, MainAbout }
})
</script>
