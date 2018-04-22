<template>
  <transition name="slideLeft" mode="out-in">
    <div class="songsheet" v-show="songSheetShow" ref="whole">
      <div class="top" ref="topArea">
        <div class="songsheetheader" ref="header">
          <i class="back icon-back" @click="toggleSongSheetShow"></i>
          <p class="title">歌曲列表</p>
          <i class="search icon-search"></i>
          <i class="menu icon-list-circle"></i>
        </div>
        <div class="banner">
          <img :src="songSheet.coverImgUrl" alt="图片无法显示" class="discBg">
          <div class="bannertexts">
            <span class="sheetname">{{songSheet.name}}</span>
            <div class="userdetail">
              <img class="useravatar" :src="songSheet.creator.avatarUrl" alt="图片无法显示">
              <span class="userlink">{{songSheet.creator.nickname}}</span>
              <i class="right icon-right"></i>
            </div>
          </div>
        </div>
        <div class="btnzone">
          <div class="sheetbtn">
            <i class="collect icon-add"></i>
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
        <div ref="topbg"></div>
      </div>
      <div class="songlistzone">
        <div class="topmenu">
          <span class="playall icon-play">播放全部</span>
          <span class="multiselect icon-menu">多选</span>
        </div>
        <div class="songlist" v-for="(item,index) in songSheet.tracks" :key="item+index" @click="setCurrentSong(item)">
          <div class="song">
            <span class="songnumber">{{index+1}}</span>
            <div class="detail">
              <p class="songname">{{item.name}}</p>
              <p class="artist">{{item.artists[0].name}}</p>
            </div>
            <i class="songmenu icon-list-circle"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "song-sheet",
    props: {
      songSheetId: {
        required: true
      }
    },
    computed: {
      songSheet() {
       let songSheets = this.$store.getters.getSongSheets
        const vm = this
        let res
          res = songSheets.filter(function (item) {
            return item.id === vm.songSheetId
          })[0]
        if(res===undefined){
         res={
           coverImgUrl:'',
           name:'',
           creator:{
             nickname:'',
             avatarUrl:''
           }
         }
        }
        // console.log(res)
          return res
      },
      songSheetShow() {
        return this.$store.getters.getShowState('songSheetShow')
      }
    },
    watch: {
     songSheet:function (newv,oldv) {
       const topArea = this.$refs.topArea
       const bgurl = this.songSheet.coverImgUrl
       const topbg = this.$refs.topbg
       topArea.style.cssText = `
      background:url(${bgurl}) no-repeat;
      background-position:center center;
      background-size:100%;
      overflow:hidden;
      `
       topbg.style.cssText = `
      position:absolute;
      width:inherit;
      height:inherit;
      top:0;
      background:url(${bgurl}) no-repeat;
      background-size:100%;
      background-position:center center;
      filter:blur(10px);
      box-shadow: 0 0 10px 10px #555;
      z-index:-1;
      `
     }
    },
    methods: {
      toggleSongSheetShow() {
        this.$store.commit('toggleShow', 'songSheetShow')
      },
      setCurrentSong(songObj){
        this.$store.commit('setCurrentSongInfo',songObj)
      }
    }
  }
</script>

<style scoped>
  .slideLeft-enter, .slideLeft-leave-to {
    transform: translateX(-100%)
  }

  .slideLeft-enter-active, .slideLeft-leave-active {
    transition: all cubic-bezier(.03,.38,0,.97) 0.3s;
  }

  .songsheet {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    background-color: #fff;
    overflow: scroll;
  }

  .top {
    height: 300px;
    width: 100%;
    z-index: 10;
    text-shadow: #000 0 0 4px;
    position: relative;
  }

  .banner {
    display: flex;
    height: 100px;
    align-items: center;
  }

  .bannertexts {
    display: flex;
    height: inherit;
    flex-wrap: wrap;
    align-items: center;
  }

  .sheetname {
    width: 100%;
  }

  .userdetail {
    display: flex;
    align-items: center;
  }

  .useravatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .btnzone {
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 10px;
    justify-content: space-around;
  }

  .sheetbtn {
    display: flex;
    flex-wrap: wrap;
  }

  .sheetbtn i {
    width: 100%;
    text-align: center;
  }

  .sheetbtn span {
    width: 100%;
    text-align: center;
    font-size: 0.7rem;
  }

  .songlistzone {
    color: #000;
    position: relative;
  }

  .topmenu {
    font-size: 0.7rem;
    height: 30px;
    display: flex;
    padding: 0 10px 0 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: #ccc solid 1px;
  }

  .songsheetheader {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.2rem;
  }

  .song {
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: #e8e8e8 solid 1px;
    align-items: center;
  }

  .song .detail {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: inherit;
    align-content: center;
  }

  .song .detail p {
    width: 100%;
  }

  .artist {
    font-size: 0.7rem;
    color: #bababa;
  }

  .song .songnumber {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #bababa;
    border-bottom: #fff solid 1px;
  }

  .songsheetheader i {
    margin: 0 10px 0 10px;
  }

  .title {
    width: 100%;
  }

  .discBg {
    width: 100px;
    height: 100px;
    border: #fff solid 1px;
    margin: 20px;
  }
</style>
