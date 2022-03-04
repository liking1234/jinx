<template>
  <div class="full-dom">
    <div class="g-wrap">
      <div class="g-aurora"></div>
    </div>

    <svg>
      <defs>
        <filter id='wave'>
          <!--          <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".0003 .0003" numOctaves="20" seed='10'/>-->
          <!--          <feDisplacementMap in="SourceGraphic" scale="70"/>-->
          <feTurbulence baseFrequency='0.00510 0.01099' id='turbulence' numOctaves='3' result='noise' seed='10' />
          <feDisplacementMap id='displacement' in2='noise' in='SourceGraphic' scale='96' />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "aurora",
  created() {
  },
  mounted() {
    var filter = document.querySelector("#turbulence");
    var frames = 0;
    var rad = Math.PI / 180;

    function freqAnimation() {
      let bfx = 0.005;
      let bfy = 0.005;
      frames += .5;
      bfx += 0.0025 * Math.cos(frames * rad);
      bfy += 0.0025 * Math.sin(frames * rad);

      let bf = bfx.toString() + ' ' + bfy.toString();
      filter.setAttributeNS(null, 'baseFrequency', bf);
      window.requestAnimationFrame(freqAnimation);
    }

    window.requestAnimationFrame(freqAnimation);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/aurora/aurora.scss";
svg {
  width: 0;
  height: 0;
}
</style>
