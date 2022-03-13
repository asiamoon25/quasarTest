<template>
<div>
   <div id="bgi" class="absolute">
       <div class="absolute-center">
        <h2>YeonSang's Blog</h2>
       </div>
   </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPageArticle',
  
  setup(){
      
  }
})
</script>
<style>
#bgi{
    background-image: url('~assets/다운로드.jpeg');
    width:100%;
    height:50vh;
  
}
.absolute-center{
    color:white;

}

</style>