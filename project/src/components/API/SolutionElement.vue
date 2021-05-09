<template>
  <li :class="{error: solutionError}">
    <h3>{{ getSolutionName() }}</h3>
    <img v-if='!hide' :src="url">
    <div v-else :class='id'> </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'solutionName', 'description','url', 'solutionError',  'hide'],
  methods: {
    getSolutionName(){
      if (this.hide) {
        console.log('efefef')
        if (this.solutionName === 'IBM Watson') return 'Solução #1';
        if (this.solutionName === 'Amazon Polly') return 'Solução #2';
        if (this.solutionName === 'Google Cloud') return 'Solução #3';
        if (this.solutionName === 'Microsoft Azure') return 'Solução #4';
      }
      else return this.solutionName;
    }
  }
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

.IBM {
  border-radius: 100px;
  background: red;
  padding: 20px;
  width: 130px;
  height: 130px;
}

.AWS {
  border-radius: 100px;
  background: green;
  padding: 20px;
  width: 130px;
  height: 130px;
}

.Google {
  border-radius: 100px;
  background: blue;
  padding: 20px;
  width: 130px;
  height: 130px;
}

.Microsoft {
  border-radius: 100px;
  background: yellow;
  padding: 20px;
  width: 130px;
  height: 130px;
}
</style>