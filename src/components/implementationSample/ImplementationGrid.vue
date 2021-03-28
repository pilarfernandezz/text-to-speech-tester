<template>
  <ul>
      <implementation-element
        v-for="solution in solutions"
        :key="solution.id"
        :solution-name="solution.title"
        :url="solution.url"
        v-on:click="selectSolution(solution.id,solution.title, solution.codeURL)"
      ></implementation-element>
  </ul>
</template>

<script>
export default {
  inject: ['solutions'],
  props: {
    selected: String
  },
  methods: {
      selectSolution(id,title, codeURL){
          this.$emit('select-solution', id,title, codeURL);
      }
  },
};
</script>

<style scoped>
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