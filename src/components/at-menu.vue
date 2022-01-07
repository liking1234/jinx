<template>
  <div class="menu-main">
    <div v-for="(item,index) in menuArr" :key="index" class="menu-item" @click="goItemRouter(item,index)">
      <div class="menu-item_title">
        {{item.title}}
      </div>
      <div class="menu-item_detail">
        {{item.detail}}
      </div>
    </div>
  </div>
</template>

<script>
import {getRandomLinerColor} from '../utils/index'
export default {
  name: 'atMenu',
  props: {
    msg: {
      type: String,
      default:()=>{
        return 'atMenu'
      }
    },
  },
  data:function (){
    return {
      menuArr:[],
      getRandomLinerColor:getRandomLinerColor
    }
  },
  mounted() {
    this.menuArr = this.$store.getters.getMenuArr
  },
  methods: {
    goItemRouter(item,index){
      this.$EventBus.$emit("aMsg", index);
      this.$router.push({
        path:item.router
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.menu-main{
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(auto-fill, 160px);
  justify-content: space-between;
  .menu-item{
    width: 100%;
    min-height: 80px;
    border-radius: 6px;
    border: 2px solid #eeeeee;
    padding: 10px 15px;
    transition: all linear 0.2s;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .menu-item_title{
      font-size: 16px;
      color: #42b983;
      margin-bottom: 5px;
    }
    .menu-item_detail{
      font-size: 12px;
      color: #4f5959;
      text-align: left;
    }
  }
  .menu-item:hover{
    background: #D2D2D2F2;
    transform: scale(1.05);
  }
}
</style>
