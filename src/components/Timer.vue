<template>
  <div class="Timer">
    <div class="Timer_counter">
      {{ getHours | toTimeFormat }}:{{ getMinutes | toTimeFormat }}:{{
        getSeconds | toTimeFormat
      }}
    </div>
    <Button
      :disabled="actionButtonDisabled"
      :color="actionColor"
      :action="actionType"
      @click.native="action()"
    />
    <Button
      :isDisabled="restartButtonDisabled"
      color="danger"
      action="restart"
      @click.native="restart()"
    />
  </div>
</template>

<script>
import { bus } from "@/utils/eventBus";
import { status, actions, colors } from "@/enums";
import CustomDate from "@/utils/CustomDate";
import { vuexGetters, vuexSetters } from "@/mixins/widgetMixins";
import Button from "./Button";
export default {
  name: "Timer",
  components: { Button },
  mixins: [vuexGetters, vuexSetters],
  data() {
    return {
      actionType: actions.PLAY,
      actionColor: colors.PRIMARY,
      timerInterval: ""
    };
  },
  computed: {
    actionButtonDisabled() {
      return this.isTimerEqualsToZero;
    },
    restartButtonDisabled() {
      return this.getTimerStatus === status.STARTED || this.isTimerEqualsToZero;
    }
  },
  methods: {
    action() {
      const timerStatus = this.getTimerStatus;
      if (timerStatus === status.INITIAL || timerStatus === status.STOPED) {
        this.setTimerStatus(status.STARTED);
        this.actionType = actions.PAUSE;
        this.actionColor = colors.SECONDARY;
        this.startTimer();
      } else {
        this.setTimerStatus(status.STOPED);
        this.actionType = actions.PLAY;
        this.actionColor = colors.PRIMARY;
        clearInterval(this.timerInterval);
      }
    },
    restart() {
      bus.$emit("timerRestarted");
      this.resetTimer();
      this.actionType = actions.PLAY;
      this.actionColor = colors.PRIMARY;
      this.setTimerStatus(status.INITIAL);
    },
    startTimer() {
      const initTime = new CustomDate();
      const endTime = new CustomDate()
        .addHours(this.getHours)
        .addMinutes(this.getMinutes)
        .addSeconds(this.getSeconds);
      initTime.addSeconds(1);
      this.timerInterval = setInterval(() => {
        this.updateTime(initTime, endTime);
        this.isTimerEqualsToZero ? this.stop() : initTime.addSeconds(1);
      }, 1000);
    },
    updateTime(initTime, endTime) {
      const diff = CustomDate.getDiff(initTime, endTime);
      const { hours, minutes, seconds } = diff;
      this.setHours(hours);
      this.setMinutes(minutes);
      this.setSeconds(seconds);
    },
    stop() {
      this.restart();
      clearInterval(this.timerInterval);
      setTimeout(() => {
        alert("⏰ El temporizador ha finalizado!!!");
      }, 100);
    }
  }
};
</script>

<style lang="scss">
.Timer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 0 1.5rem;
  width: 90%;
  .Timer_counter {
    font: 700 3.5rem "Roboto Mono";
    margin-right: 1rem;
  }
}
</style>
