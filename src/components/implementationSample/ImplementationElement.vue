<template>
  <li :class="{ibm:solutionName==='IBM Watson', aws:solutionName==='Amazon Polly', ms:solutionName==='Microsoft Azure', gg:solutionName==='Google Cloud'}">
    <h3>{{ solutionName }}</h3>
    <img :src="url">
  </li>
</template>

<script>
export default {
  props: ['solutionName','url'],
};
</script>

<style scoped>
.ibm {
  position: absolute;
  left:50px;
  top:360px;
}

.gg {
  position: absolute;
  left: 370px;
  top: 30px;
}

.ms {
  position: absolute;
  left:50px;
  top: 30px;
}

.aws {
  position: absolute;
  left:370px;
  top:360px;
}
</style>