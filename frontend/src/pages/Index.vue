<template>
<q-page>
      <main-page-article/>
    <div class="row flex-center">
      <about-me/>
    </div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue';
import AboutMe from '../components/body/index-page/AboutMe.vue';
import MainPageArticle from '../components/body/index-page/MainPageArticle.vue';

export default defineComponent({
  name: 'PageIndex',
  components:{
    AboutMe,
    MainPageArticle
  }
})
</script>
<style>
</style>