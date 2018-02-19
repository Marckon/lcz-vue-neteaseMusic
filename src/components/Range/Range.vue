<template>
  <div class="range">
    <span class="span-left" v-show="rangeType==='progress'">{{timeFormat(musicCurrentTime)}}</span>
    <i class="rangeIcon icon-volume-medium" v-show="rangeType==='volume'"></i>
    <div class="duration-bar">
      <span class="currentProgress"></span>
      <span class="ball"></span>
    </div>
    <span class="span-right">{{timeFormat(musicDuration)}}</span>
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
        return this.$store.getters.getMusicDuration
      },
      musicCurrentTime(){
        return this.$store.getters.getMusicCurrentTime
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

</style>
