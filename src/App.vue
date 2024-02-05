<template>
<div class="hedding"> Vue Lead Assignment</div>
  <div style="background: black; padding: 10px">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hedding{
  padding: 20px;
  color: #1c8d0a;
  font-size: 50px;
  font-weight: 600;
  background-color: black;
}
@media (max-width: 600px) {
  .hedding {
  font-size: 30px;
  padding: 50px;
  }
}
</style>
