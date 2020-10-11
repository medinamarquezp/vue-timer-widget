<template>
  <div id="app">
    <TimerWidget />
  </div>
</template>

<script>
import TimerWidget from "@/components/TimerWidget";
export default {
  name: "App",
  components: { TimerWidget }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
