<template>
    <div class='container'>
      <h2 v-if='!selected'>Selecione uma ferramenta:</h2>
      <h2 v-if='selected'>{{solutionTitle}}</h2>
      <section v-if='!selected'>
        <implementation-grid @select-solution="toggleSolution"></implementation-grid>
      </section>            
      <section v-if='selected'>
        <solution-implementation :selected=selected :codeURL= codeURL></solution-implementation>
        <button v-if='selected' @click='toggleSolution'>Voltar</button>
      </section>           
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      solutionTitle: null,
      codeURL:null
    }
  },
  methods: {
    toggleSolution(id, title, codeURL){
      this.selected === null? this.selected = id: this.selected = null;
      this.solutionTitle = title;
      this.codeURL = codeURL;
    },
  }
}
</script>

<style scoped>
section {
  margin-top: 10px !important;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  margin-bottom: 10px;
  height: 700px;
  width: 700px;
  padding: 1rem;
  border-radius: 12px;
}
ul {
  list-style: none;
  margin: 80px;
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

.container {
  margin-top:100px;
  text-align: center;
}

h2 {
  margin: 0px;
}
button {
  margin-top:5px;
}
</style>