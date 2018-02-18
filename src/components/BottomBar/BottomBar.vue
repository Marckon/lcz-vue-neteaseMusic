<template>
<div class="bottom-bar" v-if="currentSong" @click="toggleMusicDetailShow">
  <img :src="currentSong.album.picUrl" alt="" class="albumBg">
  <div class="songDetail">
    <p class="songName">{{currentSong.name}}</p>
    <p class="singer">{{artist}}</p>
  </div>
  <i :class="isPlaying? 'icon-pause' : 'icon-play'" class="playBtn" @click.stop="playPause"></i>
  <i class="menuBtn icon-list-music"></i>
</div>
</template>

<script>
    export default {
        name: "bottom-bar",
      computed:{
          currentSong(){
            console.log( this.$store.getters.getCurrentSongInfo)
            return this.$store.getters.getCurrentSongInfo
          },
        artist(){
            let res=[]
            this.currentSong.artists.map(function (artist) {
              res.push(artist.name)
            })
          return res.join(',')
        },
        isPlaying(){
          return this.$store.getters.getPlayState
        }
      },
      methods:{
          toggleMusicDetailShow() {
            this.$store.commit('toggleShow','musicDetailShow')
          },
        playPause(){
            this.$store.commit('setPlayPause')
        }
      }
    }
</script>

<style scoped>
.bottom-bar{
  background-color: #fff;
  box-shadow: 0 0 5px #333;
  display: flex;
  position: absolute;
  bottom:0;
  height:60px;
  width:100%;
  z-index: 10;
  justify-content: space-around;
  align-items: center;
}
i{
  margin: 0 10px 0 10px;
}
  .albumBg{
    width:50px;
    height:50px;
    margin: 0 10px 0 10px;
  }
  .songDetail{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    height:inherit;
  }
  .songDetail p{
    width: inherit;
  }
  .songDetail p:nth-of-type(2){
    font-size: 0.2rem;
    color:#8e8e8e
  }
</style>
