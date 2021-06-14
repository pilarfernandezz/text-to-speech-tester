<template>
  <div class="switch-button">
    <label  class="switch">
      <input @click="hideSolution()"  type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>

  <ul>
    <solution-element
      :hide=hide
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
  data (){
    return {
          hide: false,
    }
  },
  props: {
    solutionError: Boolean,
    selected: String,
  },
  methods: {
      selectSolution(id){
          this.$emit('select-solution', id);
      },
      hideSolution(){
        this.hide = !this.hide;
      }
  },
};
</script>

<style scoped>
.selectedSolution {
    border-color: #000080;
    border-width: 3px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #000080;
}

input:focus + .slider {
  box-shadow: 0 0 1px #000080;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.switch-button {
  text-align: center;
  margin-bottom: 20px;
}
</style>