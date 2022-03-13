<template>
<q-page>
      <main-page-article/>
    <div class="row">
      <left-post-list/>
      <about-me/>
    </div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue';
import AboutMe from '../components/body/index-page/AboutMe.vue';
import LeftPostList from '../components/body/index-page/LeftPostList.vue';
import MainPageArticle from '../components/body/index-page/MainPageArticle.vue';

export default defineComponent({
  name: 'PageIndex',
  components:{
    AboutMe,
    LeftPostList,
    MainPageArticle
  }
})
</script>
<style>
</style>