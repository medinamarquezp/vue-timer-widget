import { mapGetters, mapMutations } from "vuex";

export const vuexGetters = {
  computed: {
    ...mapGetters([
      "getHours",
      "getMinutes",
      "getSeconds",
      "getInitTimerTime",
      "getTimerStatus",
      "isTimerEqualsToZero"
    ])
  }
};

export const vuexSetters = {
  methods: {
    ...mapMutations([
      "setHours",
      "setMinutes",
      "setSeconds",
      "setInitTimerTime",
      "setTimerStatus",
      "resetTimer"
    ])
  }
};
