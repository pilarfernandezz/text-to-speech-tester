<template>
    <section>
        <audio-element :url='url'></audio-element>
    </section>
</template>

<script>
export default {
    props: ['url'],
}
</script>