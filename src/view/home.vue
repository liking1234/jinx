<template>
  <div class="side-bar-main">
    <sidebar></sidebar>
    <div class="right-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/layout/sidebar";
export default {
  name: "home",
  components: {Sidebar},
  data(){
    return{
    }
  },
  created() {
  },
  mounted() {
  },
  watch:{
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
.side-bar-main{
  width: 100%;
  height: 100%;
  display: flex;
  .right-main{
    overflow: auto;
    flex: 1;
  }
}
</style>
