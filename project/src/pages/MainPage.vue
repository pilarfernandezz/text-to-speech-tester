<template>
    <solution-base
      @generate-audio="generateAudio">
    </solution-base>
    <audio-base v-if="audio"></audio-base>
</template>

<script>
export default {
    data () {
        return {
            audio: false,
        }
    },
    methods: {
      generateAudio(enteredText,selected){
        this.audio = !this.audio;
        console.log(enteredText);
        console.log(selected);
      },
    }
}
</script>