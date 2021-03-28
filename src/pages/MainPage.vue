 <template>
    <div ref="base" id="base">
      <solution-base
        @generate-audio="generateAudio">
      </solution-base>
      <audio-base v-if="audio" :url='file' class="audio" :key="enteredText"></audio-base> 
      <section v-if=loading>
        <loading-bar></loading-bar>
      </section>
    </div>
</template>

 <script>
import api from '../../api';
import LoadingBar from "../components/layout/LoadingBar";

export default {
  components: { LoadingBar },
  data () {
      return {
        audio: false,
        file: null,
        loading:false,
      }
  },
  methods: {
    createbloburl(file, type) {
        var blob = new Blob([file], {
          type: type || 'application/*'
        });
        this.file = URL.createObjectURL(blob);
        this.audio = true;
        this.loading = false;
    },

    async generateAudio(enteredText,selected){
      this.audio = false;
      this.loading = true;
      const res = await api.post('/createAudio', null, { params: {
          text: enteredText,
          tool: selected
        }})

      const buffer = new Buffer(res.data.data, 'base64');
      this.createbloburl(buffer ,'audio/ wav');
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