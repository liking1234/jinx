<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  /*background-image: linear-gradient(45deg, rgba(206, 124, 173, 0.98), #e1ddee);*/
}
</style>
