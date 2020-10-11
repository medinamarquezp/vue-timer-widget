<template>
  <div class="StartEndHour">
    <span>Inicio</span>
    <Hour />
    <span>Fin</span>
    <Hour
      :addedHours="getHours"
      :addedMinutes="getMinutes"
      :addedSeconds="getSeconds"
    />
  </div>
</template>

<script>
import { vuexGetters } from "@/mixins/widgetMixins";
import Hour from "./Hour";
export default {
  name: "StartEndHour",
  components: { Hour },
  mixins: [vuexGetters]
};
</script>

<style lang="scss">
.StartEndHour {
  font-size: 1.2rem;
  padding: 0 5rem;
  margin: 1rem auto 0.5rem auto;
  color: #444;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-transform: uppercase;
  span {
    font-weight: 100;
    justify-self: end;
    margin-right: 0.4rem;
  }
}
</style>
