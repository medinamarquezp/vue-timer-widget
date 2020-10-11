<template>
  <div class="TimerWidget">
    <TimerConfig />
    <StartEndHour />
    <Timer />
  </div>
</template>

<script>
import TimerConfig from "./TimerConfig";
import StartEndHour from "./StartEndHour";
import Timer from "./Timer";

export default {
  name: "TimerWidget",
  components: { TimerConfig, StartEndHour, Timer }
};
</script>

<style lang="scss">
.TimerWidget {
  margin: 0 auto;
  padding: 2rem 3rem;
  border-radius: 2px;
  width: 550px;
  box-sizing: border-box;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.15);
}
</style>
