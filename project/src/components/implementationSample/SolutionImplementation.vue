<template>
  <div class='scroll'>
     <img class='image' :src='codeURL'>
  </div>
</template>

<script>
export default {
  props: ['selected','codeURL'],
  inject:['solutions'],
};
</script>

<style scoped>
.image {
    max-width:800px;
    max-height:800px;
    width: auto;
    height: auto;
  }

.scroll{
  width: 680px;
  height: 630px;
  overflow: auto;
}
div {
  text-align: center;
}
</style>