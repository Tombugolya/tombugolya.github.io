<template>
  <div :style="style.wrap">
    <div v-for="(msg, i) in messages" :key="i">
      <div :style="style.bar(msg.color)" @click="pop(i)">
        {{ msg.msg.message || msg.msg }}
      </div>
      <br :key="i + '1'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const validator = (msg) => {
  if (typeof msg !== 'string' && typeof msg.message !== 'string') {
    return 'Parameter msg is invalid. Expected a String, or an Object with property msg[type:String].';
  }
  return msg;
};
const getStyle = (baseSize, position) => {
  const calcByBaseSize = (val) => `calc(${val} * ${baseSize})`;
  const { pos, textAlign } = position;
  return {
    wrap: {
      position: 'fixed',
      left: 0,
      [pos]: calcByBaseSize(0.05),
      zIndex: 1000,
      width: '100%',
      padding: `0 ${calcByBaseSize(0.2)}`,
      pointerEvents: 'none',
      textAlign,
    },
    bar: (background) => ({
      display: 'inline-block',
      width: 'auto',
      minWidth: baseSize,
      maxWidth: `calc(100vw - ${calcByBaseSize(0.4)})`,
      padding: `${calcByBaseSize(0.15)} ${calcByBaseSize(0.2)}`,
      margin: `0 0 ${calcByBaseSize(0.05)}`,
      borderRadius: calcByBaseSize(0.02),
      lineHeight: calcByBaseSize(0.2),
      color: '#fff',
      background: background,
      boxShadow: `0 ${calcByBaseSize(0.01)} ${calcByBaseSize(
        0.025
      )} rgba(0,0,0, .15)`,
      cursor: 'pointer',
      textAlign: 'center',
      pointerEvents: 'all',
      userSelect: 'none',
    }),
  };
};
export default defineComponent({
  name: 'SnackBar',
  props: {
    colors: {
      default() {
        return {
          open: '#333',
          info: '#3DBD7D',
          error: '#FA7377',
          warn: '#FF6600',
        };
      },
      type: Object,
    },
    holdTime: {
      default: 3000,
      type: Number,
    },
    multiple: {
      default: true,
      type: Boolean,
    },
    wrapClass: String,
    baseSize: {
      default: '100px',
      type: String,
    },
    position: {
      default: 'top-center',
      type: String,
    },
  },
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    $baseSize() {
      return /\d(rem|px|em)$/.test(this.baseSize) ? this.baseSize : '100px';
    },
    $position() {
      const [position, textAlign] = this.position.toString().split('-');
      return {
        pos: ['top', 'bottom'].includes(position) ? position : 'top',
        textAlign: ['left', 'center', 'right'].includes(textAlign)
          ? textAlign
          : 'center',
      };
    },
    style() {
      return getStyle(this.$baseSize, this.$position);
    },
  },
  methods: {
    info(msg) {
      const color = this.colors.info;
      this.open({ color, msg }, false);
      return true;
    },
    error(msg) {
      const color = this.colors.error;
      this.open({ color, msg }, false);
      return false;
    },
    warn(msg) {
      const color = this.colors.warn;
      this.open({ color, msg }, false);
      return true;
    },
    open(message, isOpen = true) {
      let msg;
      let color;
      if (!isOpen) {
        ({ color } = message);
        msg = validator(message.msg);
      } else {
        color = this.colors.open;
        msg = validator(message);
      }
      const msgObj = {
        color,
        msg,
        timer: setTimeout(this.pop, this.holdTime),
      };
      if (this.multiple) {
        this.messages.push(msgObj);
      } else {
        this.pop(0);
        this.messages = [msgObj];
      }
      return true;
    },
    pop(i = 0) {
      if (this.messages[i]) clearTimeout(this.messages[i].timer);
      this.messages.splice(i, 1);
    },
  },
});
</script>

<style scoped>
div {
  font-family: 'Lato', sans-serif;
}
</style>
