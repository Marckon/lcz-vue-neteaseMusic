<template>
<div class="bottom-bar" v-if="currentSong">
  <img :src="currentSong.album.picUrl" alt="" class="albumBg">
  <div class="songDetail">
    <p class="songName">{{currentSong.name}}</p>
    <p class="singer">{{currentSong.artists[0].name}}</p>
  </div>
  <i class="playBtn icon-play"></i>
  <i class="menuBtn icon-menu"></i>
</div>
</template>

<script>
    export default {
        name: "bottom-bar",
      computed:{
          currentSong(){
            console.log( this.$store.getters.getCurrentSongInfo)
            return this.$store.getters.getCurrentSongInfo
          }
      }
    }
</script>

<style scoped>
.bottom-bar{
  display: flex;
  position: fixed;
  bottom:0;
  height:30px;
  width:100%;
  z-index: 9999;
}
  .albumBg{
    width:20px;
    height:20px;
  }
</style>
