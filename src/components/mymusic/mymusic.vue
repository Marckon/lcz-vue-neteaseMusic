<template>
  <div class="mymusic">
    <type-list name="我的音乐 " iconinfo="icon-music" count="564"></type-list>
    <type-list name="最近播放 " iconinfo="icon-zuijinplay" count="100"></type-list>
    <type-list name="我的电台 " iconinfo="icon-diantai" count="0"></type-list>
    <type-list name="我的收藏 " iconinfo="icon-collect" count="212"></type-list>
    <music-sheet v-for="(item, index) in msItems" :item="item" :index="index" :key="item.name" @setMS="setMS"
                 @setML="setML" @toggleSongSheetShow="toggleSongSheetShow"></music-sheet>
    <menu-list :menuListItems="mLI"></menu-list>
    <song-sheet :songSheetId="idToShow" v-show="songSheetShow"></song-sheet>
  </div>
</template>

<script>
  import TypeList from '../TypeList/TypeList'
  import MenuList from '../MenuList/MenuList'
  import MusicSheet from '../MusicSheet/MusicSheet'
  import SongSheet from '../SongSheet/SongSheet'

  export default {
    name: "mymusic",
    data() {
      return {
        mLI: {},
        idToShow:0
      }
    },
    computed: {
      msItems() {
        return this.$store.getters.getMusicAllList.sheets
      },
      songSheetShow(){
        return this.$store.getters.getShowState('songSheetShow')
      }
    },
    methods: {
      setMS(menuListItems) {
        this.mLI = menuListItems
        this.$store.commit('toggleShow', 'menuListShow')
      },
      setML(menuListItems) {
        this.mLI = menuListItems
        this.$store.commit('toggleShow', 'menuListShow')
      },
      toggleSongSheetShow(idToShow){
        this.idToShow=idToShow
      }
    },
    components: {
      typeList: TypeList,
      menuList: MenuList,
      musicSheet: MusicSheet,
      SongSheet
    }
  }
</script>

<style scoped>
  .mymusic {
    position: absolute;
    top: 50px;
    width: 100%;
  }
</style>
