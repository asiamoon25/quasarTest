<template>
<div class="row" id="img-wrapper">
   <div id="img" class="absolute">
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
#img-wrapper{
    width:100%;
    height:45vh;
}
#img{
    background-image: url('~assets/keyboard.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width:100%;
    height:45vh;
  
}
.absolute-center{
    color:white;

}

</style>