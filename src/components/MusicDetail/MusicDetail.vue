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
        <div class="content-wrapper" v-show="cdSheet">
          <div class="cd">
            <div class="swith-line">
              <div class="trigger"></div>
            </div>
            <div class="cd-content">
              <div class="cd-bg"></div>
              <img src="" alt="" class="album-img">
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
            <range></range>
          </div>
          <div class="lrc">

          </div>
        </div>
      </transition>

      <div class="content-footer">
        <range></range>
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
      }
    },
    watch: {
      currentSong(newV, oldV) {
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
    methods: {
      toggleMusicDetailShow() {
        this.$store.commit('toggleShow', 'musicDetailShow')
      },
      setPlayType() {
        let PLIndex = this.$store.getters.getPlayTypeIndex
        PLIndex++
        if (PLIndex >= 3) PLIndex = 0
        this.$store.commit('setPlayType', PLIndex)
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
    position: relative;
    width: inherit;
    height: inherit;
    border: solid 1px #000;
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
    bottom: 0;
    height: 60px;
    width: 100%;
  }

  .content-footer .music-control {
    display: flex;
    color: white;
    text-shadow: 0 0 2px #000;
    font-size: 2rem;
    justify-content: space-around;
    width: 100%;
  }
</style>
