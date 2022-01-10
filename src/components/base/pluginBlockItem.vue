<template>
  <div class="main">
    <div class="name" :style="{background:'#585858'}">
      {{name}}
    </div>
    <div class="version" :style="{background:getRoundColor()}">
      {{version}}
    </div>
  </div>
</template>

<script>
export default {
  name: "pluginBlockItem",
  props:{
    name:{
      type:String,
      default: ''
    },
    version:{
      type:String,
      default: ''
    }
  },
  data(){
    return{
      ColorList: [
        {title: '嫣红',name: 'red',color: '#e54d42'},
        {title: '桔橙',name: 'orange',color: '#f37b1d'},
        {title: '明黄',name: 'yellow',color: '#fbbd08'},
        {title: '橄榄',name: 'olive',color: '#8dc63f'},
        {title: '森绿',name: 'green',color: '#39b54a'},
        {title: '天青',name: 'cyan',color: '#1cbbb4'},
        {title: '海蓝',name: 'blue',color: '#0081ff'},
        {title: '姹紫',name: 'purple',color: '#6739b6'},
        {title: '木槿',name: 'mauve',color: '#9c26b0'},
        {title: '桃粉',name: 'pink',color: '#e03997'},
        {title: '棕褐',name: 'brown',color: '#a5673f'},
        {title: '玄灰',name: 'grey',color: '#8799a3'},
      ]
    }
  },
  created() {
  },
  methods:{
    getRoundColor(){
      let color = this.ColorList[Math.round(this.ColorList.length*Math.random())]
      return color ? color.color : '#8799a3'
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 5px 0;
  display: flex;
  align-items: center;
  .name{
    padding: 3px 5px 3px 10px;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 3px 0 0 3px;
    color: #eeeeee;
  }
  .version{
    padding: 3px 10px 3px 5px;
    font-size: 14px;
    border-radius: 0 3px 3px 0;
    color: #eeeeee;
  }
}
</style>
