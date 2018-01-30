<template>
<div class="header">
  <div class="header-wrapper">
    <i class="menu icon-menu" @click="toggleSideBarShow"></i>
    <div class="center-menu">
      <router-link class="music icon-music" tag="i" to="/mymusic"></router-link>
      <router-link class="find icon-wangyi" tag="i" to="/findmusic"></router-link>
      <router-link class="community icon-community" tag="i" to="/community"></router-link>
    </div>
    <router-link class="search icon-search" tag="i" to="/search"></router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "myheader",
      methods:{
          toggleSideBarShow:function () {
           this.$store.commit('toggleShow','sideBarShow')
          }
      }
    }
</script>

<style scoped>
.header{
  position:fixed;
  z-index:10;
  height:50px;
  background-color:#C62F2F;
  color:white;
  font-size: 1.3rem;
  width:100%;
  line-height: 50px;
}
.header-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
  .center-menu>i{
    margin: 0 15px;
  }
</style>
