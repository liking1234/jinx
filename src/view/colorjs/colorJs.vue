<template>
  <div class="compA">
    <el-input v-model="colorQuery" @keyup.enter.native="updateColor" placeholder="输入六位数字或者颜色英文名">
      <template slot="append">
        <el-button @click="updateColor">Update</el-button>
      </template>
    </el-input>
    <div class="main-block">
      <p>Preview:</p>
      <span :style="{ backgroundColor: tweenedCSSColor }" class="span-class"></span>
      <p>{{ tweenedCSSColor }}</p>
    </div>
    <div class="detail">
      <plugin-block-item name="tween.js" version="18.6.4"></plugin-block-item>
      一个简单但强大的JavaScript库，用于补间和动画HTML5和JavaScript属性。独立工作或与EaselJS集成。
      <a href="https://www.createjs.com/tweenjs">https://www.createjs.com/tweenjs</a><br>
      <plugin-block-item name="color.js" version="1.0.5"></plugin-block-item>
      一个能加强前端开发中对颜色处理的第三方库。
      <a href="https://www.createjs.com/tweenjs">https://colorjs.io/</a>
    </div>
  </div>
</template>

<script>
import TWEEN from "@tweenjs/tween.js";
import Color from "color-js"
import PluginBlockItem from "@/components/base/pluginBlockItem";

export default {
  components: {PluginBlockItem},
  data() {
    return {
      colorQuery: '',
      color: {
        blue: 0.8980392156862745,
        green: 0.7686274509803922,
        red: 0.8588235294117647,
        alpha: 1
      },
      tweenedColor: {}
    }
  },

  created: function () {
    this.tweenedColor = Object.assign({}, this.color)
  },
  watch: {
    color: function () {
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween(this.tweenedColor)
          .to(this.color, 750)
          .start()
      animate()
    }
  },
  computed: {
    tweenedCSSColor: function () {
      return new Color({
        red: this.tweenedColor.red,
        green: this.tweenedColor.green,
        blue: this.tweenedColor.blue,
        alpha: this.tweenedColor.alpha
      }).toCSS()
    }
  },
  methods: {
    updateColor: function () {
      if(/^\d{6}$/.test(this.colorQuery)){
        this.colorQuery = '#'+this.colorQuery
      }
      this.color = new Color(this.colorQuery).toRGB()
      console.log(this.color)
      this.colorQuery = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main-block{
  margin: 20px 0;
  p{
    display: block;
    margin: 5px 0;
  }
}
.span-class{
  display: inline-block;width: 200px;height: 80px;
  border-radius: 6px;
  border: 1px solid #eeeeee;
}
</style>
