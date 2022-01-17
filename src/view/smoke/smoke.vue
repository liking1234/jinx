<template>
  <div class="parcel">
    <div id="text">Hover</div>
    <svg width="0">
      <filter id="filter">
        <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".03 .03" numOctaves="20" />
        <feDisplacementMap in="SourceGraphic" scale="70" />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  name: "smoke",
  created() {
  },
  mounted() {

    var filter = document.querySelector("#turbulence");
    var frames = 1;
    var rad = Math.PI / 180;
    var bfx, bfy;

    function freqAnimation() {
      frames += .2;

      bfx = 0.03;
      bfy = 0.03;

      bfx += 0.005 * Math.cos(frames * rad);
      bfy += 0.005 * Math.sin(frames * rad);

      let bf = bfx.toString() + " " + bfy.toString();
      // displacement.setAttributeNS(null, 'scale', frames);
      filter.setAttributeNS(null, "baseFrequency", bf);

      window.requestAnimationFrame(freqAnimation);
    }

    window.requestAnimationFrame(freqAnimation);

  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/smoke/smoke.css";
</style>
