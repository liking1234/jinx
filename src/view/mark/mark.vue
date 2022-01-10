<template>
  <div class="main scroll-view">
    <div class="title">在 CSS 中，我们仅仅需要将两张图片叠加在一起，对上层的图片使用 mask 属性，一行代码即可实现该效果。</div>
    <div v-highlight>
      <pre>
        <code>
          div {
            position: relative;
            margin: auto;
            width: 200px;
            height: 200px;
            // 正常头像
            background: url(image1) no-repeat;
            background-size: cover;
          }
          .div::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              // 国旗图片
              background: url(image2) no-repeat;
              background-size: cover;
              mask: linear-gradient(110deg,#000 10%,transparent 70%,transparent);
          }
        </code>
      </pre>
    </div>
    <div class="flex-row color-block">
      <div class="avatar"></div>
      <div class="A"></div>
      <div class="B"></div>
      <div class="pie"></div>
    </div>
    <div class="title">
      @ property CSS at-rule 是 CSS Houdini api 的一部分，它允许开发人员显式定义 CSS 自定义属性，允许属性类型检查，设置默认值，并定义属性是否可以继承值。
      该规则直接在样式表中表示自定义属性的注册，无需运行任何 JS。有效的规则会生成一个已注册的自定义属性，就好像使用等效的 parameters.@property@property 调用了 CSS.registerProperty 一样
      因为我们告诉 CSS 这个自定义属性是一个 color  ，所以它可以被处理或者动画化。之前的颜色值是无法被动画化的。
    </div>
    <div class="el"></div>
    <div class="wrapper">
      <div class="box" title="圆锥形渐变">
        <p></p>
      </div>
      <div class="box" title="径向渐变">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mark"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/mark/mark.css";
.main{
  width: 100%;
  height: 100%;
}
.title{
  border: 1px dashed #eeeeee;
  background: #d2cece;
  padding: 10px;
  border-radius: 6px;
  margin: 20px 0;
}
.color-block{
  div:nth-child(1){
    margin: 0 20px 0 0;
  }
  div{
    border-radius: 6px;
    margin: 0 20px;
    width: 150px;
    height: 150px;
  }
  div:last-child{
    margin: 0 0 0 20px;
  }
}
.avatar{
  position: relative;
  //border-radius: 50%;
  overflow: hidden;
  width: 150px;
  height: 150px;
  background-size:150px 150px;
  // 正常头像
  background: url('~@/assets/img/mark/avatar.png') no-repeat center center;
  background-size: cover;
  transition: all 1s;
}
@property --rotateangle{
  syntax: "<angle>";
  initial-value: 110deg;
  inherits: false;
}
.avatar::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  --rotateangle: 110deg;
  transition:2s --rotateangle;
  // 国旗图片
  background: url("~@/assets/img/mark/national-flag.jpg") no-repeat;
  background-size: cover;
  mask: linear-gradient(var(--rotateangle),#000 10%,transparent 70%,transparent);
  //mask: radial-gradient(circle at 100px 100px, transparent 60px, #fff 80px, #fff 100%);
}
.avatar:hover::after {
  --rotateangle: 290deg;
}


@property --gradient-start {
  syntax: "<color>";
  initial-value: white;
  inherits: false;
}
.el {
  margin: 20px 0;
  width: 100%;
  height: 80px;
  border-radius: 6px;
  --gradient-start: white;
  background: linear-gradient(var(--gradient-start), #ed1c24);
  transition: --gradient-start 1s;
}
.el:hover {
  --gradient-start: #ff9700;
}


@property --colorA {
  syntax: '<color>';
  inherits: false;
  initial-value: fuchsia;
}

@property --colorB {
  syntax: '<color>';
  inherits: false;
  initial-value: teal;
}

@property --colorC {
  syntax: '<color>';
  inherits: false;
  initial-value: #f79188;
}

@property --colorD {
  syntax: '<color>';
  inherits: false;
  initial-value: yellow;
}

@property --colorE {
  syntax: '<color>';
  inherits: false;
  initial-value: orange;
}

@property --colorF {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}

.A {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg,
      var(--colorA),
      var(--colorB),
      var(--colorC),
      var(--colorD),
      var(--colorE),
      var(--colorF));
  transition:
      --colorA 5000ms,
      --colorB 5000ms,
      --colorC 5000ms,
      --colorD 5000ms,
      --colorE 5000ms,
      --colorF 5000ms;

  &:hover {
    --colorA: red;
    --colorB: orange;
    --colorC: yellow;
    --colorD: green;
    --colorE: teal;
    --colorF: fuchsia;
  }
}

.B {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg,
      var(--colorA),
      var(--colorC),
      var(--colorF));
  animation: change 10s infinite linear;
}

@keyframes change {
  20% {
    --colorA: red;
    --colorC: #a93ee0;
    --colorF: fuchsia;
  }
  40% {
    --colorA: #ff3c41;
    --colorC: #e228a0;
    --colorF: #2e4c96;
  }
  60% {
    --colorA: orange;
    --colorC: green;
    --colorF: teal;
  }
  80% {
    --colorA: #ae63e4;
    --colorC: #0ebeff;
    --colorF: #efc371;
  }
}


@property --per {
  syntax: '<percentage> | <angle>';
  inherits: false;
  initial-value: 90deg;
}

.pie {
  border-radius: 50% !important;
  cursor: pointer;
  margin: auto;
  background: conic-gradient(yellowgreen, yellowgreen var(--per), transparent var(--per), transparent 100%);
  transition: --per 300ms linear;

  &:hover {
    --per: 240deg;
  }
}



</style>
