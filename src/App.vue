<template>
  <div id="app">
    <audio :src="currentSongUrl" v-if="currentSong" ref="audio" @canplay="musicCanPlay" @timeupdate="musicTimeUpdate"></audio>
    <v-header></v-header>
    <side-bar :info="info"></side-bar>
    <my-music></my-music>
    <music-detail></music-detail>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import myheader from './components/myheader/myheader'
  import sideBar from './components/sidebar/SideBar'
  import myMusic from './components/mymusic/mymusic'
  import BottomBar from './components/BottomBar/BottomBar'
  import MusicDetail from './components/MusicDetail/MusicDetail.vue'
  import currentSong from "./store/modules/currentSong";

  export default {
    name: 'app',
    components: {
      'v-header': myheader,
      'side-bar': sideBar,
      myMusic: myMusic,
      BottomBar,
      MusicDetail
    },
    data() {
      return {
        info: {},
        currentSongTemp: {}
      }
    },
    methods: {
      musicCanPlay(){
        this.$store.commit('setMusicCanPlay')
        this.$store.commit('setMusicDuration',this.$refs.audio)
        this.$store.commit('setMusicCurrentTime',this.$refs.audio)
      },
      musicTimeUpdate(){
        this.$store.commit('setMusicCurrentTime',this.$refs.audio)
      }
    },
    watch: {},
    computed: {
      currentSong() {
        this.currentSongTemp = this.$store.getters.getCurrentSongInfo
        //双叹号，强制转换为布尔值
        let booleanValue = !!this.$store.getters.getCurrentSongInfo
        return booleanValue
      },
      currentSongUrl() {
        const prevSong = this.currentSong
        if (this.currentSongTemp !== prevSong) {
          //由于缺少歌曲链接，返回随机的歌曲
          const allMusicList = this.$store.getters.getMusicAllList.all
          const musicIndex = Math.floor(Math.random() * allMusicList.length)
//          console.log(allMusicList[musicIndex].url)
          return allMusicList[musicIndex].url
        }

      }
    },
    created() {
      let localAPI = '../static/data.json'
      this.$http({
        method: 'get',
        url: localAPI,
      }).then((res) => {
        this.info = res.data.user
        this.$store.dispatch('set_AllInfo', res.data)
        this.$store.dispatch('set_MusicAllList', res.data.music)
        // console.log(res.data)
      }).catch((res) => {
        console.log('error')
      })
    },
    /*当页面更新时，把最新的audio DOM元素存入store*/
    updated() {
//      console.log(this.$refs.audio)
      this.$store.dispatch('set_AudioEle', this.$refs.audio)
    }
  }
</script>

<style>
  @import "../static/font-icon/style.css";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to, .fade-leave-active {
    transition: opacity 0.3s;
  }
</style>
