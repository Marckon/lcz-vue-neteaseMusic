<template>
  <div class="range" @mousemove.prevent.stop="changeRange($event)" @mouseup="canDrag=false">
    <span class="span-left" v-show="rangeType==='progress'">{{timeFormat(musicCurrentTime)}}</span>
    <i class="rangeIcon icon-volume-medium" v-show="rangeType==='volume'"></i>
    <div class="duration-area" @click.stop="setRange($event)" @mouseleave="canDrag=false" >
      <div class="duration-bar"  ref="durationBar">
        <span class="currentProgress" ref="currentProgress"></span>
        <span class="ball" ref="ball" @mousedown.stop="canDrag=true" ></span>
      </div>
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
    data() {
      return {
        canDrag:false
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
        if(this.rangeType==='progress'){
          //改变进度条
          let barWidth=this.musicDuration
          let currentWidth=Math.floor(nv*100/barWidth)
          this.$refs.currentProgress.style.cssText=`
        width:${currentWidth}%
        `
        }
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
      },
      changeRange(event){
        if(this.canDrag){
          let setPos=event.clientX
          const duraBarLeft=this.$refs.durationBar.offsetLeft
          const duraBarWidth=this.$refs.durationBar.offsetWidth
          let currentWidth=Math.floor((setPos-duraBarLeft)*100/duraBarWidth)
          this.$refs.currentProgress.style.cssText=`
        width:${currentWidth}%
        `
         /* const duraBarLeft=this.$refs.durationBar.offsetLeft
          const duraBarWidth=this.$refs.durationBar.offsetWidth
          let setPos=event.clientX
          let percentage=(setPos-duraBarLeft)/duraBarWidth
          if(this.rangeType==='progress'){
            const maxValue=this.musicDuration
            const res=Math.floor(maxValue*percentage)
            this.$store.getters.getAudioEle.currentTime=res
          }*/
        }

      },
      setRange(event){
        const duraBarLeft=this.$refs.durationBar.offsetLeft
        const duraBarWidth=this.$refs.durationBar.offsetWidth
        let setPos=event.clientX
        let percentage=(setPos-duraBarLeft)/duraBarWidth
        /*console.log('durbarleft'+' :'+duraBarLeft)
        console.log('setPos'+' :'+setPos)
        console.log('durbarwidth'+' :'+duraBarWidth)*/
        if(this.rangeType==='progress'){
          const maxValue=this.musicDuration
          const res=Math.floor(maxValue*percentage)
          this.$store.getters.getAudioEle.currentTime=res
        }
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
    width:100%;
    height:2px;
    background-color: #fff;
    box-shadow: 0 0 5px #000;
    cursor: pointer;
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
  }
  .currentProgress{
    height:2px;
    background-color: #e74c3c;
    float: left;
  }
  .duration-area{
    cursor: pointer;
    width:80%;
    height:100%;
    display: flex;
    align-items: center;
  }
</style>
