<template>
  <div>
    <transition name="fade">
      <div class="left-main" v-if="showLeft">
        <div v-for="(item,index) in menuArr" :key="index" @click="goItemRouter(item,index)" class="width-100">
          <div :class="['left-main_title',{'is_active':index===currentIndex}]">{{index+1}}、{{item.title}}</div>
        </div>
        <div class="home">
          <svg class="icon" aria-hidden="true" @click="backHome">
            <use xlink:href="#icon-shouye-01"></use>
          </svg>
        </div>
        <div class="pickUp">
          <svg class="icon" aria-hidden="true" @click="pickUp">
            <use xlink:href="#icon-shouqi"></use>
          </svg>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="!showLeft" class="openUp">
        <svg class="icon" aria-hidden="true" @click="openUp">
          <use xlink:href="#icon-zhankai"></use>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data(){
    return{
      menuArr:[],
      showLeft:true,
      currentIndex: 0
    }
  },
  created() {
  },
  mounted() {
    let _this=this
    this.menuArr = this.$store.getters.getMenuArr
    this.menuArr.forEach(item=>{
      if(item.router===this.$route.path){
        this.currentIndex = item.index
      }
    })
    // 事件总线的方式监听改变数据后被data内的默认值覆盖了
    // 这里用来监听
    this.$EventBus.$off("aMsg");
    this.$EventBus.$on("aMsg",  function (data){
        _this.currentIndex = data
    });
  },
  updated() {
  },
  watch:{
    // currentIndex:{
    //   handler(nv,ov){
    //     console.log(nv,ov)
    //   },
    //   immediate:true
    // }
  },
  methods:{
    goItemRouter(item,index){
      this.$EventBus.$emit("aMsg", index);
      if(item.router===this.$router.currentRoute.fullPath){
        return
      }
      this.$router.push({
        path:item.router
      })
    },
    pickUp(){
      this.showLeft=false
    },
    openUp(){
      this.showLeft=true
    },
    backHome(){
      this.$router.push('/')
    }
  },
  destroyed() {
    // this.$EventBus.$off("aMsg");
  }
}
</script>

<style lang="scss" scoped>
.left-main{
  min-width: 200px;
  margin-right: 20px;
  border-right: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px 0 30px;
  position: relative;
  height: 100%;
  .left-main_title{
    color: #42b983;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;
    padding: 10px 30px;
    border-radius: 4px;
  }
  .left-main_title:hover{
    opacity: 0.8;
    background: #ecf5ff;
  }
  .is_active{
    background: #ecf5ff;
    border: 1px solid #eeeeee;
  }
  .home{
    position: absolute;
    left: 0;
    top: 0;
  }
  .pickUp{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
.openUp{
  position: absolute;
  left: 0;
  top: 50vh;
  transform: translate(50%,-50%);
}
</style>
