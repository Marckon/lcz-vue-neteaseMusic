<template>
  <div class="typelist">
    <i class="info" :class="iconinfo"></i>
    <div class="type-list-detail">
      <span class="name">{{name}}</span>
      <span class="count" v-if="count">({{count}})</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "type-list",
    props: {
      iconinfo: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      count:{
        type: String,
        required:false
      }
    }
  }
</script>

<style scoped>
.typelist{
  display: flex;
  height: 50px;
  align-items: center;
  padding:0 20px ;
}
  .info{
    color:#C62F2F;
    font-size: 1.5rem;
    margin-right: 10px;
  }
</style>
