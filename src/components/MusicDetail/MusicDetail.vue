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
      <transition name="fade">
        <!--cd页面展示-->
        <div class="content-wrapper" v-show="cdSheetShow">
          <div class="cd">
            <div class="swith-line">
              <div class="trigger"></div>
            </div>
            <div class="cd-content">
              <div class="cd-bg">
                <img :src="currentSong.album.blurPicUrl" alt="" class="album-img">
              </div>
            </div>
          </div>
          <div class="music-options">
            <i class="icon icon-like"></i>
            <i class="icon icon-download"></i>
            <i class="icon icon-msg"></i>
            <i class="icon icon-list-circle-small"></i>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="lrc-wrapper">
          <div class="volume-range">
            <range rangeType="volume"></range>
          </div>
          <div class="lrc">

          </div>
        </div>
      </transition>

      <div class="content-footer">
        <range rangeType="progress"></range>
        <div class="music-control">
          <i class="play-type" :class="musicPlayType" @click.stop="setPlayType"></i>
          <i class="prev icon-prevdetail"></i>
          <i class="playPause" :class="isPlaying?'icon-pause-detail':'icon-playdetail'" @click.stop="playPause"></i>
          <i class="next icon-nextdetail"></i>
          <i class="menu icon-list-music"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Range from '../Range/Range.vue'

  export default {
    name: 'music-detail',
    components: {
      Range
    },
    data(){
      return {
        cdSheetShow:true
      }
    },
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
            artists: []
          }
        }
        return currentSongInfo
      },
      artists() {
        let res = []
        this.currentSong.artists.map(function (artist) {
          res.push(artist.name)
        })
        return res.join(',')
      },
      musicPlayType() {
        let res = ''
        const mpt = this.$store.getters.getPlayType
        switch (mpt) {
          case 'lbxh':
            res = 'icon-music-shunxu'
            break
          case 'sjbf':
            res = 'icon-music-random'
            break
          case 'dqxh':
            res = 'icon-music-danqu1'
            break
          case 'sxbf':
            res = 'icon-music-shunxu'
        }
        return res
      },
      isPlaying(){
        return this.$store.getters.getPlayState
      }
    },
    watch: {
      currentSong(newV, oldV) {
//        console.log(this.$store.getters.getShowState('musicDetailShow'))
        const wholeBgEle = this.$refs.wholeBg
        wholeBgEle.style.cssText = `
      background: url("${this.currentSong.album.blurPicUrl}") no-repeat center;
      background-size:100% 133%;
      filter:blur(10px);
      box-shadow:#000 0 0 20px 20px;
      `
      },
    },
    methods: {
      toggleMusicDetailShow() {
        this.$store.commit('toggleShow', 'musicDetailShow')
      },
      setPlayType() {
        let PLIndex = this.$store.getters.getPlayTypeIndex
        PLIndex++
        if (PLIndex >= 3) PLIndex = 0
        this.$store.commit('setPlayType', PLIndex)
      },
      playPause(){
        this.$store.commit('setPlayPause')
      }
    }
  }
</script>

<style scoped>
  .musicDetail {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 11;
  }

  .wholeBg {
    /*若有问题，加上absolute和width*/
    height: inherit;
  }

  .banner {
    display: flex;
    height: 60px;
    position: absolute;
    top: 0;
    width: inherit;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    font-size: 1.2rem;
    text-shadow: 0 0 2px #000;
  }

  .banner .info {
    width: inherit;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    align-content: center;
  }

  .banner .info span {
    width: inherit;
  }

  .banner .info .artists {
    font-size: 0.8rem;
    color: #f1f1f1;
  }

  .content-footer {
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    bottom: 20px;
    height:20vh;
    width: 100%;
  }

  .content-footer .music-control {
    display: flex;
    color: white;
    text-shadow: 0 0 2px #000;
    font-size: 2rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .play-type{
    width:50px;
    font-size: 1.5rem;
  }
  .playPause{
    font-size: 3rem;
  }
  .content-wrapper{
    position:absolute;
    /*border: solid #000 1px;*/
    top:70px;
    width:inherit;
    height:60vh;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .content-wrapper .cd{
    width:100%;
    height:90%;
  }
  .content-wrapper .music-options{
    width:100%;
    height:10%;
    display: flex;
    justify-content: space-around;
    color: #fff;
    align-items: center;
    font-size: 1.2rem;
    text-shadow: 0 0 5px #000;
  }
  .swith-line{
    height:1px;
    width: 80%;
    margin: 0 auto;
    background: linear-gradient(to right, rgba(255,255,255,0),rgba(0255,255,255,1),rgba(255,255,255,0));
  }
  .trigger{
    background: url('../../../static/images/swith.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    left:50%;
    top:-15px;
    height:140px;
    width:90px;
  }
  .cd-content{
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .cd-bg{
    background: url('../../../static/images/cd.png') no-repeat;
    background-size: 100% 100%;
    width:44vh;
    height:44vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .cd-content img{
    width:70%;
    border-radius: 50%;
    box-shadow: 0 0 15px #000;
  }
</style>
