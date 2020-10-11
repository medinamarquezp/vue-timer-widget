/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import { status } from "@/enums";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    timerStatus: status.INITIAL
  },
  mutations: {
    setHours: (state, value) => {
      state.hours = value;
    },
    setMinutes: (state, value) => {
      state.minutes = value;
    },
    setSeconds: (state, value) => {
      state.seconds = value;
    },
    setTimerStatus: (state, value) => {
      state.timerStatus = value
    },
    resetTimer: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
    }
  },
  getters: {
    getHours: (state) => {
      return state.hours;
    },
    getMinutes: (state) => {
      return state.minutes;
    },
    getSeconds: (state) => {
      return state.seconds;
    },
    getTimerStatus: (state) => {
      return state.timerStatus;
    },
    isTimerEqualsToZero: (state) => {
      return state.hours === 0 && state.minutes === 0 && state.seconds === 0;
    }
  }
});

export default store;
