<template>
  <div class="TimeInput">
    <div class="TimeInput_title">{{ this.title }}</div>
    <input
      class="TimeInput_value"
      type="number"
      v-model="updatedTimeValue"
      :min="min"
      :max="max"
      :disabled="isTimerStarted"
      @keyup="validateKeyUp($event)"
      @blur="validateBlur($event)"
      @focus="$event.target.select()"
    />
  </div>
</template>

<script>
import { bus } from "@/utils/eventBus";
import { mapGetters } from "vuex";
import { status } from "@/enums";
export default {
  name: "TimeInput",
  props: {
    title: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      timeValue: 0
    };
  },
  mounted() {
    bus.$on("timerRestarted", () => (this.updatedTimeValue = 0));
  },
  computed: {
    ...mapGetters(["getTimerStatus"]),
    isTimerStarted() {
      return (
        this.getTimerStatus === status.STARTED ||
        this.getTimerStatus === status.STOPED
      );
    },
    updatedTimeValue: {
      get: function() {
        return this.timeValue;
      },
      set: function(newValue) {
        const newValueInt = parseInt(newValue);
        this.timeValue =
          newValueInt >= this.min && newValueInt <= this.max ? newValueInt : 0;
      }
    }
  },
  watch: {
    timeValue(newValue) {
      this.$emit(this.title, newValue);
    }
  },
  methods: {
    validateKeyUp(e) {
      let value = e.target.value;
      e.target.value = value.length > 1 && value.startsWith(0) ? 0 : value;
    },
    validateBlur(e) {
      let value = e.target.value;
      e.target.value = value === "" ? 0 : value;
    }
  }
};
</script>

<style lang="scss">
.TimeInput {
  background: #f5f5f5;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 5rem;
  &_title {
    font-weight: 300;
    text-transform: uppercase;
  }
  &_value {
    font: 700 2rem "Roboto Mono";
    width: 4rem;
    padding-left: 1rem;
    text-align: center;
    border: 0px;
    background: transparent;
    outline: none;
  }
}
</style>
