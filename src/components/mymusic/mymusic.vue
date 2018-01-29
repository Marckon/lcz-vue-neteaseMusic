<template>
  <div class="mymusic">
    <type-list name="我的音乐 " iconinfo="icon-music" count="564"></type-list>
    <type-list name="最近播放 " iconinfo="icon-zuijinplay" count="100"></type-list>
    <type-list name="我的电台 " iconinfo="icon-diantai" count="0"></type-list>
    <type-list name="我的收藏 " iconinfo="icon-collect" count="212"></type-list>
    <music-sheet v-for="(item, index) in msItems" :item="item" :index="index" :key="item.name" @setMS="setMS" @setML="setML"></music-sheet>
    <menu-list :menuListItems="mLI" :menuListShow="menuListShow" @toggleMenuListShow="toggleMenuListShow"></menu-list>
  </div>
</template>

<script>
  import TypeList from '../TypeList/TypeList'
  import MenuList from '../MenuList/MenuList'
  import MusicSheet from '../MusicSheet/MusicSheet'

  export default {
    name: "mymusic",
    data(){
      return {
        mLI:{},
        menuListShow:false
      }
    },
    computed:{
      msItems(){
        return this.$store.getters.getMusicAllList.sheets
      }
    },
    methods:{
      setMS(menuListItems){
        this.menuListShow=!this.menuListShow
          this.mLI=menuListItems
      },
      setML(menuListItems){
        this.menuListShow=!this.menuListShow
        this.mLI=menuListItems
      },
      toggleMenuListShow(){
        this.menuListShow=!this.menuListShow
      }
    },
    components: {
      typeList: TypeList,
      menuList: MenuList,
      musicSheet: MusicSheet,
    }
  }
</script>

<style scoped>
  .mymusic {
    position: absolute;
    top: 50px;
    width:100%;
  }
</style>
