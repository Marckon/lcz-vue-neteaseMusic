<template>
  <div id="app">
    <v-header @toggleSideBarShow="toggleSideBarShow"></v-header>
    <side-bar :info="info" :sideBarShow="sideBarShow" @toggleSideBarShow="toggleSideBarShow"></side-bar>
    <my-music></my-music>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import myheader from './components/myheader/myheader'
  import sideBar from './components/sidebar/SideBar'
  import myMusic from './components/mymusic/mymusic'
  import BottomBar from './components/BottomBar/BottomBar'

  export default {
    name: 'app',
    components: {
      'v-header': myheader,
      'side-bar': sideBar,
      myMusic:myMusic,
      BottomBar
    },
    data(){
      return {
        info:{},
        sideBarShow:false
      }
    },
    methods:{
      //后期可优化，这个方法使父子组件耦合度过高，需要在dom中调用过多次
      toggleSideBarShow:function () {
        this.sideBarShow=!this.sideBarShow
      }
    },
    created() {
      let localAPI = '../static/data.json'
      this.$http({
        method: 'get',
        url: localAPI,
      }).then((res)=>{
        this.info=res.data.user
        this.$store.dispatch('set_AllInfo', res.data)
        this.$store.dispatch('set_MusicAllList',res.data.music)
      }).catch((res)=>{
        console.log('error')
      })
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
