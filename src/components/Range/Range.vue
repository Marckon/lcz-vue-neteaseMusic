<template>
  <div class="range">
    <span class="span-left" v-show="rangeType==='progress'">{{timeFormat(musicCurrentTime)}}</span>
    <i class="rangeIcon icon-volume-medium" v-show="rangeType==='volume'"></i>
    <div class="duration-bar">
      <span class="currentProgress" ref="currentProgress"></span>
      <span class="ball" ref="ball"></span>
    </div>
    <span class="span-right" v-if="musicDuration!==0">{{timeFormat(musicDuration)}}</span>
    <span class="icon-music" v-else ></span>
  </div>
</template>

<script>

  export default {
    name: 'range',
    props:{
      rangeType:{
        type:String,
        default:'progress'
      }
    },
    computed:{
      musicDuration(){
        //返回的是秒数
        return this.$store.getters.getMusicDuration
      },
      musicCurrentTime(){
        return this.$store.getters.getMusicCurrentTime
      }
    },
    watch:{
      musicCurrentTime(nv,ov){
        //改变进度条
        let barWidth=this.musicDuration
        let currentWidth=Math.floor(nv*100/barWidth)
        this.$refs.currentProgress.style.cssText=`
        width:${currentWidth}%
        `
      }
    },
    methods:{
      timeFormat(timeNum){
        let res=''
        let min=Math.floor(timeNum/60)
        let sec=Math.floor(timeNum%60)
        min<10?min='0'+min:min=min
        sec<10?sec='0'+sec:sec=sec
        res=`${min}:${sec}`
        return res
      }
    }
  }
</script>

<style scoped>
.range{
  margin: 0 auto;
  width:80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  text-shadow: 0 0 5px #000;
}
  .duration-bar{
    width:80%;
    height:2px;
    background-color: #fff;
    box-shadow: 0 0 5px #000;
  }
  .span-left,.span-right{
    width:10%;
    text-align: center;
  }
  .ball{
    width:16px;
    height:16px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 5px #000;
    float: left;
    position: relative;
    top:-7px;
    cursor: pointer;
  }
  .currentProgress{
    height:2px;
    background-color: #e74c3c;
    float: left;
  }
</style>
