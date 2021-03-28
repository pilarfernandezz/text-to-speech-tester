<template>
  <li :class="{error: solutionError}">
    <h3>{{ solutionName }}</h3>
    <img :src="url">
  </li>
</template>

<script>
export default {
  props: ['id', 'solutionName', 'description','url', 'solutionError'],

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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>