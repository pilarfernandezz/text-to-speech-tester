<template>
    <div id = 'base'>
      <the-header></the-header>
      <router-view></router-view>
    </div>
</template>

<script>
import IBMCodeUrl from './dataURL/IBMCode.js';
import IBMUrl from './dataURL/IBM.js';
import AWSCodeUrl from './dataURL/AWSCode.js';
import AWSUrl from './dataURL/AWS.js';
import GoogleCodeUrl from './dataURL/GoogleCode.js';
import GoogleUrl from './dataURL/Google.js';
import MicrosoftCodeUrl from './dataURL/MicrosoftCode.js';
import MicrosoftUrl from './dataURL/Microsoft.js';
export default {
    data() {
        return {
            solutions: [
                { 
                    id: 'IBM',
                    title: 'IBM Watson',
                    description: 'IBM Watson description',
                    url: IBMUrl,
                    codeURL: IBMCodeUrl,  
                },
                { 
                    id: 'AWS',
                    title: 'Amazon Polly',
                    description: 'Amazon Polly description',
                    url: AWSUrl,
                    codeURL: AWSCodeUrl,  
                },
                { 
                    id: 'Google',
                    title: 'Google Cloud',
                    description: 'Google description',
                    url: GoogleUrl,
                    codeURL: GoogleCodeUrl,  
                },
                { 
                    id: 'Microsoft',
                    title: 'Microsoft Azure',
                    description: 'Microsoft description',
                    url: MicrosoftUrl,
                    codeURL: MicrosoftCodeUrl,  
                }
            ]
        };
    },
    provide(){
        return {
            solutions: this.solutions
        };
    },
    methods: {
      createbloburl(file, type) {
        console.log('type',type);
        var blob = new Blob([file], {
          type: type || 'application/*'
        });
        console.log(blob)
        console.log('\n````````', file)
        console.log(URL.createObjectURL(blob))
        return URL.createObjectURL(blob);
      },
    }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 50rem;
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #000080;
  background-color: #000080;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #0000CD;
  border-color: #0000CD;
}
#base {
overflow: inherit  !important;
}
</style>