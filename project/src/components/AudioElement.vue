<template>
<div>
    <audio controls>
        <source src='../audio.wav' alt="carregando">
        seu navegador não suporta HTML5
    </audio>
</div>
</template>

<script>
export default {
    created() {
        console.log("created")
    },
    mounted() {
        console.log("mounted")
    }
}
</script>

<style scoped>
    div {
        text-align: center;
    }
</style>