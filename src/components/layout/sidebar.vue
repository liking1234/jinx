<template>
  <div class="side-bar-main">
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
    <div class="right-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data(){
    return{
      menuArr:[],
      showLeft:true,
      currentIndex:2
    }
  },
  created() {
  },
  mounted() {
    this.menuArr = this.$store.getters.getMenuArr
    this.$EventBus.$off("aMsg");
    this.$EventBus.$on("aMsg", (index) => {
        this.currentIndex = index
    });
  },
  watch:{
    // currentIndex:{
    //   handler(nv,ov){
    //     console.log(nv)
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
  }
}
</script>

<style lang="scss" scoped>
.side-bar-main{
  width: 100%;
  height: 100%;
  display: flex;
  .left-main{
    min-width: 200px;
    margin-right: 20px;
    border-right: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
    position: relative;
    .left-main_title{
      color: #42b983;
      font-size: 16px;
      text-decoration: underline;
      cursor: pointer;
      width: 100%;
      padding: 10px 30px;
    }
    .left-main_title:hover{
      opacity: 0.8;
      background: #ecf5ff;
    }
    .is_active{
      background: #ecf5ff;
    }
    .home{
      position: absolute;
      left: 0;
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
    top: 50%;
    transform: translate(50%,-50%);
  }
  .right-main{
    overflow: auto;
    flex: 1;
  }
}
</style>
