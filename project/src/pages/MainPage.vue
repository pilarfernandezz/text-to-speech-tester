 <template>
    <div ref="base" id="base">
        <solution-base
        @generate-audio="generateAudio">
      </solution-base>
      <audio-base v-if="audio" class="audio" :key="enteredText"></audio-base> 

      <p>{{file}}</p>

      <audio v-if="audio" controls>
        <source v-if="audio" :src='file' alt="carregando">
        seu navegador não suporta HTML5
      </audio>
    </div>
</template>

 <script>
import api from '../../api';
// import fs from 'fs';

export default {
  data () {
      return {
        audio: false,
        file: null,
      }
  },
  methods: {
    createbloburl(file, type) {
        console.log('type',type);
        var blob = new Blob([file], {
          type: type || 'application/*'
        });
        console.log(blob)
        console.log('\n', file)
        this.file = URL.createObjectURL(blob);
        this.audio = true;
    },

    async generateAudio(enteredText,selected){
      this.audio = false;
      console.log(enteredText);
      console.log(selected);

      if(selected === 'IBM'){
        const file = await api.post('/createAudio', null, { params: {
          text:enteredText,
          tool: selected
        }})

        const buffer = new Buffer(file.data.data, 'base64')

        console.log('buffer', buffer)
        console.log(file);
        console.log(typeof file.data.data)
        
        // const arquivo = new File(file.data.data, 'dewef.wav', {type: "audio/wav"})
        // fs.writeFileSync('./teste.txt',file)
        // this.file = URL.createObjectURL(arquivo)
        this.createbloburl( buffer ,'audio/wav')
      }
      if (selected === "Microsoft"){
        // generateAudio(enteredText);
      }
      this.scrollToElement();
    },
    scrollToElement() {
      const el = this.$refs.base;
      if (el) {
        el.scrollIntoView(false,{ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    },
  }
}
</script>

<style scoped>
#base {
    height:900px;
    overflow:scroll;
}
.audio {
  margin-bottom: 30px;
  box-sizing: border-box;
}
</style>