<template>
  <transition name="slideUp">
    <div class="musicDetail" v-show="musicDetailShow">
      <div class="wholeBg" ref="wholeBg"></div>
      <div class="banner">
        <i class="back icon-back" @click="toggleMusicDetailShow"></i>
        <div class="info">
          <span class="name">{{currentSong.name}}</span>
          <span class="artists">{{artists}}</span>
        </div>
        <i class="share icon-share" style="font-size: 2rem"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'music-detail',
    computed: {
      musicDetailShow() {
        return this.$store.getters.getShowState('musicDetailShow')
      },
      currentSong() {
        const currentSongInfo = this.$store.getters.getCurrentSongInfo
        if (currentSongInfo === null || currentSongInfo === undefined) {
          return {
            album: {
              blurPicUrl: ''
            },
            artists:[]
          }
        }
        return currentSongInfo
      },
      artists(){
        let res=[]
        this.currentSong.artists.map(function (artist) {
          res.push(artist.name)
        })
        return res.join(',')
      }
    },
    watch: {
      currentSong(newV,oldV){
        console.log(this.$store.getters.getShowState('musicDetailShow'))
        const wholeBgEle = this.$refs.wholeBg
        wholeBgEle.style.cssText = `
      background: url("${this.currentSong.album.blurPicUrl}") no-repeat center;
      background-size:100% 133%;
      filter:blur(10px);
      box-shadow:#000 0 0 20px 20px;
      `
      },
    },
    methods:{
      toggleMusicDetailShow(){
        this.$store.commit('toggleShow','musicDetailShow')
      }
    }
  }
</script>

<style scoped>
  .musicDetail{
    position: absolute;
    width:100%;
    height:100%;
    z-index: 11;
  }
  .wholeBg {
    position: relative;
    width:inherit;
    height:inherit;
    border: solid 1px #000;
  }
  .banner{
    display: flex;
    height:60px;
    position:absolute;
    top:0;
    width:inherit;
    color:#fff;
    align-items: center;
    justify-content: space-between;
    padding:0 20px 0 20px;
    font-size: 1.2rem;
    text-shadow: 0 0 2px #000;
  }
  .banner .info{
    width:inherit;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    align-content: center;
  }
  .banner .info span{
    width:inherit;
  }
  .banner .info .artists{
    font-size: 0.8rem;
    color:#f1f1f1;
  }
</style>
