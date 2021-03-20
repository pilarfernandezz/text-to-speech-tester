<template>
<div>
    <audio controls>
        <source :src='url' alt="carregando">
        seu navegador não suporta HTML5
    </audio>
</div>
</template>

<script>
export default {
    props: ['url'],
}
</script>

<style scoped>
    div {
        text-align: center;
    }
</style>