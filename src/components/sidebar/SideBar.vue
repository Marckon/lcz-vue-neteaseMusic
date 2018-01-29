<template>
  <div class="side-bar">
    <!--mask-->
    <transition name="fade">
      <div class="side-mask" v-show="sideBarShow" @click="toggleSideBarShow"></div>
    </transition>
    <!--side menu-->
    <transition name="side">
      <div class="menu-content" v-show="sideBarShow">
        <!--banner-->
        <div class="menu-detail" :style="{ background: `url(${this.info.bg})  0% 0% / 100% 100% no-repeat` }">
          <div class="menu-userInfo">
            <div style="width: 100%; height:80%;">
              <img :src="info.avatar" alt="picture lost" class="avatar">
            </div>
            <div class="user-detail">
              <span class="user-name">{{info.name}}</span>
              <img src="" alt="" class="isvip">
              <span class="progress round-rec">LV.{{info.grade}}</span>
              <span class="sign round-rec"><i class="icon-coin"></i>&nbsp;&nbsp;签到</span>
            </div>
          </div>
        </div>
        <!--content-->
        <div class="content">
          <side-list icon-class="icon-message" sidetitle="我的消息" tag=""></side-list>
          <side-list icon-class="icon-vip" sidetitle="我的会员" tag="2018年12月2日到期"></side-list>
          <side-list icon-class="icon-market" sidetitle="商城" tag=""></side-list>
          <side-list icon-class="icon-friend" sidetitle="我的好友" tag=""></side-list>
          <side-list icon-class="icon-place" sidetitle="附近的人" tag=""></side-list>
          <side-list icon-class="icon-theme" sidetitle="个性换肤" tag="官方红"></side-list>
          <side-list icon-class="icon-set-time" sidetitle="定时播放" tag=""></side-list>
          <side-list icon-class="icon-lock" sidetitle="音乐闹钟" tag=""></side-list>
          <side-list icon-class="icon-car" sidetitle="驾驶模式" tag=""></side-list>
          <side-list icon-class="icon-cloud" sidetitle="音乐云盘" tag=""></side-list>
        </div>
        <!--footer-->
        <div class="footer">
          <div class="nightmode">
            <i class="icon-night"></i>
            <span>夜间模式</span>
          </div>
          <div class="setting">
            <i class="icon-setting"></i>
            <span>设置</span>
          </div>
          <div class="exit">
            <i class="icon-exit"></i>
            <span>退出</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import SideList from '../SideList/SideList'

  export default {
    name: "side-bar",
    components: {
      sideList: SideList
    },
    props: {
      info: {
        type: Object,
        required: true,
      },
      sideBarShow: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      toggleSideBarShow: function () {
        this.$emit('toggleSideBarShow')
      },
    },
    /*  data() {
        return {
          bg: {
            background: `url(${this.info.bg}) no-repeat`,
            backgroundSize: `100% 100%`
          }
        }
      },
      watch: {
        bg(v) {
          bg = v
        }
      },*/
    created() {

    }
  }
</script>

<style scoped>
  .side-mask {
    position: fixed;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .menu-content {
    width: 286px;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  .footer {
    display: flex;
    position: fixed;
    bottom: 0;
    height: 50px;
    /*不能用100%，因为fixed默认相对浏览器窗口定位*/
    width: inherit;
    align-items: center;
    justify-content: space-around;
  }

  .menu-detail {
    height: 168px;
    color: white;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50% 50%;
    box-shadow: 0 0 15px #000;
  }

  .user-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    width: 100%;
  }

  .menu-userInfo {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: stretch;
    padding: 10px;
  }

  .round-rec {
    display: flex;
    align-items: center;
    height: 24px;
    padding: 2px 8px;
    border: solid white 1px;
    border-radius: 12px;
    font-size: 12px;
    text-align: center;
  }

  .user-name {
    font-size: 1.5rem;
  }



  .side-enter, .side-leave-to {
    transform: translateX(-286px);
  }

  .side-enter-to, .side-leave-active {
    transition: transform 0.3s;
  }
</style>
