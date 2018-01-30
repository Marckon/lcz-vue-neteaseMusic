<template>
  <transition name="slideUp">
    <div class="songsheet" v-show="songSheetShow">
      <div class="songsheetheader">
        <i class="back icon-back"></i>
        <p class="title">歌单</p>
        <i class="search icon-search"></i>
        <i class="menu icon-list-circle"></i>
      </div>
      <div class="content">
        <div class="banner">
          <img src="" alt="" class="sheetbg">
          <div class="bannertexts">
            <span class="sheetname"></span>
            <span class="userlink"></span>
          </div>
        </div>
        <div class="btnzone">
            <div class="sheetbtn">
              <i class="collect icon-collect"></i>
              <span>收藏</span>
            </div>
          <div class="sheetbtn">
            <i class="comment icon-msg"></i>
            <span>评论</span>
          </div>
          <div class="sheetbtn">
            <i class="share icon-share"></i>
            <span>分享</span>
          </div>
          <div class="sheetbtn">
            <i class="download icon-download"></i>
            <span>下载</span>
          </div>
        </div>
        <div class="songlistzone">
          <div class="topmenu">
            <span class="playall icon-play">播放全部</span>
            <span class="multiselect icon-menu">多选</span>
          </div>
          <div class="songlist">
            <div class="song">
              <span class="songnumber"></span>
              <div class="detail">
                <p class="songname"></p>
                <p class="artist"></p>
              </div>
              <i class="songmenu icon-list-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "song-sheet",
    data(){
      return {
        songSheetShow:this.$store.getters.getShowState('songSheetShow')
      }
    },
  }
</script>

<style scoped>

</style>
