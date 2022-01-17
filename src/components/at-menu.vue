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
import {getRandomLinerColor} from '../utils'
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
      console.log('$emit("aMsg") 数据：'+index)
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
:root {
  --colorA: #fff;
  --colorB: #fff;
}

@property --colorA {
  syntax: '<color>';
  inherits: false;
  initial-value: #fff;
}

@property --colorB {
  syntax: '<color>';
  inherits: false;
  initial-value: #fff;
}


.menu-main{
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(auto-fill, 190px);
  justify-content: space-between;
  .menu-item{
    word-break: break-all;
    width: 100%;
    min-height: 90px;
    border-radius: 6px;
    border: 2px solid #eeeeee;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    --colorA: #fff;
    --colorB: #fff;
    background: linear-gradient(45deg, var(--colorA), var(--colorB));
    transition: 1s --colorA, 1s --colorB,0.5s transform;
    &:hover {
      --colorA: #ccf19a;
      --colorB: #fca8d9;
      transform: scale(1.05);
    }
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
}
</style>
