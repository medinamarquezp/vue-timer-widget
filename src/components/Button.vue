<template>
  <button :disabled="isDisabled" class="btn" :class="color">
    <img :src="iconUrl" :alt="action" />
  </button>
</template>

<script>
import { colors, actions } from "@/enums";
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: colors.PRIMARY
    },
    action: {
      type: String,
      default: actions.PAUSE
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconUrl() {
      const url = require(`@/assets/icons/${this.action}.svg`);
      return url;
    }
  }
};
</script>

<style lang="scss">
$primary: #056674;
$secondary: #66bfbf;
$danger: #ff4b5c;
.btn {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 20rem;
  border: 0px;
  color: white;
  font-weight: 900;
  outline: none;
  cursor: pointer;
  img {
    width: 2rem;
    height: auto;
    padding-top: 0.2rem;
    filter: invert(1);
  }
  &.primary {
    background: $primary;
    &:hover {
      background: darken($primary, 5%);
    }
    &:disabled {
      background: rgba($primary, 0.2);
    }
  }
  &.secondary {
    background: $secondary;
    &:hover {
      background: darken($secondary, 5%);
    }
    &:disabled {
      background: rgba($secondary, 0.2);
    }
  }
  &.danger {
    background: $danger;
    &:hover {
      background: darken($danger, 5%);
    }
    &:disabled {
      background: rgba($danger, 0.2);
    }
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    &:active {
      transform: none;
    }
  }
}
</style>
