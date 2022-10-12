<template>
  <main ref="main">
    <p><a>please add beauuuuuuuutiful underline effect!</a></p>
  </main>
</template>
<script>
</script>
<style>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 0;
  user-select: none;
  font: 16px / 1.5 Helvetica, sans-serif;
}
p > a {
  padding-bottom: 1px;
  background: linear-gradient(#b4a078, #b4a078) no-repeat;
  background-size: 100% 1px;
  background-position: 0 18px;
}
p > a:hover{
  animation: text-underline-slideInLeft 1.2s linear infinite forwards;
}
@keyframes text-underline-slideInLeft {
  from {
    background-position-x: -432px;
  }
  50% {
    background-position-x: 0;
  }
  to {
    background-position-x: 432px;
  }
}
</style>
