<template>
  <ul>
    <solution-element
      :class="{selectedSolution: selected==solution.id}"
      v-for="solution in solutions"
      :key="solution.id"
      :id="solution.id"
      :solution-name="solution.title"
      :description="solution.description"
      :url="solution.url"
      :solutionError = solutionError
      v-on:click="selectSolution(solution.id)"
    ></solution-element>
  </ul>
</template>

<script>
export default {
  inject: ['solutions'],
  props: {
    solutionError: Boolean,
    selected: String
  },
  methods: {
      selectSolution(id){
          this.$emit('select-solution', id);
      }
  },
};
</script>

<style scoped>
.selectedSolution {
    border-color: #000080;
    border-width: 3px;
}
</style>