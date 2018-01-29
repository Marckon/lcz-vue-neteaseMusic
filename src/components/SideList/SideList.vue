<template>
<div class="sidelist">
  <!--<i class="icon" :class="side_iconclass"></i>-->
  <span class="title" :class="side_iconclass">{{side_title}}</span>
  <span class="tag">{{side_tag}}</span>
</div>
</template>

<script>
    export default {
        name: "side-list",
      props:{
          iconClass:{
            type:String,
            required:true,
            default:''
          },
        sidetitle:{
            type:String,
          required:true,
          default:''
        },
        tag:{
            type:String,

        }
      },
      data(){
          return {
            side_iconclass:this.iconClass,
            side_title:this.sidetitle,
            side_tag:this.tag
          }
      }
    }
</script>

<style scoped>
.sidelist {
  height:40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
  .title:before{
    margin-right: 5px;
  }
</style>
