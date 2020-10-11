<template>
  <div class="TimerConfig">
    <div class="TimerConfig_icon">⏱</div>
    <TimeInput title="horas" :min="0" :max="24" @horas="saveHours" />
    <TimeInput title="minutos" :min="0" :max="59" @minutos="saveMinutes" />
    <TimeInput title="segundos" :min="0" :max="59" @segundos="saveSeconds" />
  </div>
</template>

<script>
import { vuexSetters } from "@/mixins/widgetMixins";
import TimeInput from "./TimeInput";
export default {
  name: "TimerConfig",
  components: { TimeInput },
  mixins: [vuexSetters],
  methods: {
    saveHours(value) {
      this.setHours(value);
    },
    saveMinutes(value) {
      this.setMinutes(value);
    },
    saveSeconds(value) {
      this.setSeconds(value);
    }
  }
};
</script>

<style lang="scss">
.TimerConfig {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  &_icon {
    text-align: right;
    font-size: 3.6rem;
  }
}
</style>
