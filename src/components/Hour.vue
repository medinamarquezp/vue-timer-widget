<template>
  <div class="Hour">
    {{ hours | toTimeFormat }}:{{ minutes | toTimeFormat }}:{{
      seconds | toTimeFormat
    }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomDate from "@/utils/CustomDate";
import { status } from "@/enums";
export default {
  name: "Hour",
  props: {
    addedHours: {
      type: Number,
      default: 0
    },
    addedMinutes: {
      type: Number,
      default: 0
    },
    addedSeconds: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourInterval: ""
    };
  },
  created() {
    this.start();
  },
  computed: {
    ...mapGetters(["getTimerStatus"])
  },
  watch: {
    getTimerStatus(newValue) {
      newValue === status.STARTED ? this.stop() : this.start();
    }
  },
  methods: {
    getHour() {
      const date = new CustomDate();
      this.hours = date.addHours(this.addedHours).getHours();
      this.minutes = date.addMinutes(this.addedMinutes).getMinutes();
      this.seconds = date.addSeconds(this.addedSeconds).getSeconds();
    },
    start() {
      this.hourInterval = setInterval(() => {
        this.getHour();
      }, 1000);
    },
    stop() {
      clearInterval(this.hourInterval);
    }
  }
};
</script>

<style lang="scss">
.Hour {
  font-weight: 800;
}
</style>
