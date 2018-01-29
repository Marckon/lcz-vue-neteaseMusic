<template>
  <div class="menulist">
    <transition name="slideUp">
      <div class="content" v-show="menuListShow">
        <p class="title">
          {{menuListItems.name}}
        </p>
        <type-list v-for="option in options" :name="option.text" :iconinfo="option.icon" :key="option.text"></type-list>
      </div>
    </transition>

    <transition name="fade">
      <div class="mask" v-show="menuListShow" @click="toggleMenuListShow"></div>
    </transition>
  </div>
</template>

<script>
  import TypeList from '../TypeList/TypeList'
    export default {
        name: "menu-list",
        props:{
          menuListItems:{
            type:Object,
            required:true
          },
          menuListShow:{
            type:Boolean,
            required:true
          }
        },
      computed:{
          options(){
            return this.menuListItems.options
          }
      },
      methods:{
          toggleMenuListShow(){
           this.$emit('toggleMenuListShow')
          }
      },
      components:{
          TypeList
      }
    }
</script>

<style scoped>
.mask{
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
  .content{
    width:100%;
    position: fixed;
    bottom: 0;
    z-index: 11;
    background-color: #fff;
  }
  .slideUp-enter, .slideUp-leave-to{
   bottom:-1096px;
  }
  .slideUp-leave-active,.slideUp-enter-active{
    transition: all 0.3s;
  }

</style>
