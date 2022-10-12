<template>
  <main>
    <div class="progress-outer">  <!--better extension-->
      <div class="progress-enter">
        <div class="progress-bg"></div>
      </div>
      <!-- <span>60%</span> -->
    </div>
    <div class="circular-main">
      <svg viewBox="0 0 100 100">
        <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
        <text>
          <textPath xlink:href="#circle">
            You-need-to-know-css-tricks-You-need-to-know-css-tricks-You-
          </textPath>
        </text>
      </svg>
    </div>
  </main>
</template>
<style>
main {
  width: 100%;
  padding: 80px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.progress-outer {
  width: 60%; height: 12px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.progress-enter {
  height: inherit;
  background: rgba(180, 160, 120, .2);
}
.progress-bg {
  width: 60%; height: inherit;
  border-radius: 6px;
  background: repeating-linear-gradient(-45deg, #D9CFBB  25%, #C3B393 0, #C3B393 50%,
  #D9CFBB 0, #D9CFBB 75%, #C3B393 0);
  background-size: 16px 16px;
  animation: panoramic 20s linear infinite;
}
@keyframes panoramic{
  to {
    background-position: 200% 0;
  }
}
.circular-main {
  width: 289px; height: 289px;
  margin: 80px auto;
  font-size: 12px;
}
.circular-main svg {
  overflow: visible;
  animation: circular-text-rotate 5s linear paused infinite;
}
.circular-main svg:hover {
  animation-play-state: running;
}
.circular-main path {
  fill: none;
}
.circular-main text {
  fill: #b4a078;
}
@keyframes circular-text-rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>
<script>
</script>