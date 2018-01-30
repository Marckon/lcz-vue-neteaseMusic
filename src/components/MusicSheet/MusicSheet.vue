<template>
  <div class="musicsheet">
    <!--sheet begins-->
    <div class="title" @click="toggleShowMS">
      <div class="detail">
        <i class="toggle icon-down"  ref="toggleicon"></i>
        <span class="name">{{data_item.name}}</span>
        <span class="count">({{data_item.count}})</span>
      </div>
      <i class="setting icon-setting" @click.stop="setMusicSheet"></i>
    </div>
    <!--sheet ends-->
    <!--list begins-->
    <transition-group name="verticalSlide">
      <div v-for="(list,listIndex) in musicLists" v-show="showMS" :key="list.name+listIndex" class="content" @click="toggleSongSheetShow">
        <img :src="list.coverImgUrl" alt="" class="sheetimg">
        <div class="detail">
          <p class="name">{{list.name}}</p>
          <p class="count">{{list.trackCount}}首歌曲</p>
        </div>
        <i class="setting icon-list-circle" @click.stop="setMusicList(list)"></i>
      </div>
    </transition-group>
    <!--list ends-->
  </div>
</template>

<script>
  export default {
    name: "music-sheet",
    data() {
      return {
        musicLists: [],
        data_item: {},
        showMS: true,
      }
    },
    props: {
      //item传过来的是data.json里的sheets中的元素
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleShowMS() {
        this.$refs.toggleicon.style.transform = this.showMS ? 'rotate(-90deg) ' : 'rotate(0)'
        this.showMS = !this.showMS
      },
      setMusicSheet() {
        const menuListItems = {
          name: this.data_item.name,
          options: [
            {
              icon: 'icon-delete',
              text: '删除'
            }
          ]
        }
        this.$emit('setMS', menuListItems)
      },
      setMusicList(list) {
        const menuListItems = {
          name: '歌单: ' + list.name,
          options: [
            {
              icon: 'icon-share',
              text: '分享'
            },
            {
              icon: 'icon-edit',
              text: '编辑'
            },
            {
              icon: 'icon-delete',
              text: '删除'
            }
          ]
        }
        this.$emit('setML', menuListItems)
      },
      toggleSongSheetShow(){
        this.$store.commit('toggleShow','songSheetShow')
      }
    },
    mounted() {
      let vm = this
      this.data_item = this.item
      //建立歌单类别下的所有歌单对象数组
      let musicLists = []
      let detail = this.item.detail
      Array.prototype.map.call(detail, function (value) {
        vm.$http({
          method: 'get',
          url: `/api?${value.url}`,
        }).then((res) => {
          musicLists.push(res.data.result)
          // console.log(res.data.result)
        }).catch((res) => {
          console.log('error')
        })
      })
      this.musicLists = musicLists
    }
  }
</script>

<style scoped>
  .musicsheet {
    height: auto;
    width: 100%;
    background: #f3f3f3
  }

  .title {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #e1e1e1;
    align-items: center;
    font-size: 0.9rem;
    height: 30px;
  }

  .title .toggle {
    font-size: 1rem;
    margin-right: 15px;
    transition: all 0.5s;
    display: inline-block;

  }

  .content {
    display: flex;
    height: 60px;
    width: 100%;
    align-items: center;
    font-size: 0.9rem;
    justify-content: space-between;
    padding: 0 20px 0 0;
  }

  .content .detail {
    text-indent: 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    border-bottom: #ccc solid 1px;
  }

  .content .detail p {
    width: 100%;
  }

  .content .detail .count {
    font-size: 0.8rem;
  }

  .sheetimg {
    width: 50px;
    height: 50px;
    margin: 5px;
  }

  .verticalSlide-enter, .verticalSlide-leave-to {
    height: 0;
    opacity: 0;
  }

  .verticalSlide-leave-active, .verticalSlide-enter-active {
    transition: all 0.5s;
  }
</style>
