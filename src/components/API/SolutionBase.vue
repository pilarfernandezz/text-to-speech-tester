<template>
  <section>
    <h2> Digite o texto a ser lido: </h2>
    <textarea 
      :class="{error: textError}"
      v-model="enteredText"
    ></textarea>
    <h6 v-if="textError">Favor digitar um texto para ser lido </h6>
    <hr class="hr3">
    <h2>Seleciona uma ferramenta Text to Speech para ler o texto:</h2>
    <solution-grid 
      :selected= selected
      :solutionError = solutionError
      @select-solution="selectSolution">
    </solution-grid>
    <h6 v-if="solutionError">Favor selecione a ferramente de sintese de texto a ser utilizada</h6>
    <button @click='generateAudio'>Gerar Audio</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredText: null,
      selected: null, 
      textError: false,
      solutionError: false
    };
  },
  methods: {
    validate(){
      if(this.enteredText === null || this.enteredText.trim === null){
        this.textError = true;
      } else {
        this.textError = false;
      }
      if(this.selected === null){
        this.solutionError = true;
      } else {
        this.solutionError = false;
      }
      if(this.solutionError === true || this.textError === true) return false;
      else return true;
    },
    generateAudio(){
      if(this.validate())
        this.$emit('generate-audio', this.enteredText, this.selected);
    },
    selectSolution(id){
          if(this.selected == id){
              this.selected = null;
          } else {
              this.selected = id;
          }
    },
  },
};
</script>

<style scoped>
.hr3 {
  margin-top: 40px;
  margin-bottom: 40px;
  border: 0;
  height: 2px;
  width: 750px;
  background-image: linear-gradient(to right, transparent, #ccc, transparent);  
  padding: 0px 0px 0px 0px;
}
.error {
    border-color: red;
  background-color: #faf5f5;
}
input,
textarea {
  display: block;
  width: 100%;
  height: 200px;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  resize: none;
}
input:focus,
textarea:focus {
  border-color: #000080;
  background-color: #f0f3f7;
  outline: none;
}
button {
    margin-top: 20px;
    margin-left: 40%;
}
h7 {
  color: red
}

section {
      margin-top: 100px;

}

</style>