<template>
  <li :class="{error: solutionError}">
    <h3>{{ solutionName }}</h3>
    <img :src="url">
  </li>
</template>

<script>
export default {

  //inject: ['selectSolution'],

  props: ['id', 'solutionName', 'description','url', 'solutionError'],
  //emits: ['select-solution'],
  // methods: {
  //   generateUrl(url){
  //     console.log(url);
  //     return requr;
  //   }
  // }
};
</script>

<style scoped>
img {
  width: 100%;
  align-self: center;
}
h3 {
  text-align: center;
}
input {
  align-self: center;
}
div {
  vertical-align: middle;
}
.error {
    border-color: red;
  background-color: #faf5f5;
}
</style>