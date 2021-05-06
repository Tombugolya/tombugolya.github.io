<template>
  <div :style="style.wrap">
    <div v-for="(message, i) in messages" :key="i">
      <div :style="style.bar(message.color)" @click="pop(i)">
        {{ message.text }}
      </div>
      <br :key="i + '1'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type ValidString = string | { message: string | undefined };
interface PositionAlignment {
  position: string;
  textAlign: string;
}
interface Message {
  color: string;
  text: ValidString;
}
interface MessageWithTimer extends Message {
  timer: number;
}
interface Data {
  messages: MessageWithTimer[];
}
const validator = (msg: ValidString) => {
  if (typeof msg !== 'string' && typeof msg.message !== 'string') {
    return 'Parameter msg is invalid. Expected a String, or an Object with property msg[type:String].';
  }
  return msg;
};
const getStyle = (baseSize: string, positionAlignment: PositionAlignment) => {
  const calcByBaseSize = (val: number): string => `calc(${val} * ${baseSize})`;
  const { position, textAlign } = positionAlignment;
  return {
    wrap: {
      position: 'fixed',
      left: 0,
      [position]: calcByBaseSize(0.05),
      zIndex: 1000,
      width: '100%',
      padding: `0 ${calcByBaseSize(0.2)}`,
      pointerEvents: 'none',
      textAlign,
    },
    bar: (background: string) => ({
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
  data: (): Data => {
    return { messages: [] };
  },
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
      type: Object as PropType<{
        open: string;
        info: string;
        error: string;
        warn: string;
      }>,
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
  methods: {
    info(text: string) {
      const color = this.colors.info;
      this.open({ color, text }, false);
      return true;
    },
    error(text: string) {
      const color = this.colors.error;
      this.open({ color, text }, false);
      return false;
    },
    warn(text: string) {
      const color = this.colors.warn;
      this.open({ color, text }, false);
      return true;
    },
    open(message: Message, isOpen = true) {
      let text: ValidString;
      let color: string;
      if (!isOpen) {
        ({ color } = message);
        text = validator(message.text);
      } else {
        color = this.colors.open;
        text = validator(message.text);
      }
      const messageWithTimer: MessageWithTimer = {
        color,
        text,
        timer: setTimeout(this.pop, this.holdTime),
      };
      if (this.multiple) {
        this.messages.push(messageWithTimer);
      } else {
        this.pop(0);
        this.messages = [messageWithTimer];
      }
      return true;
    },
    pop(index = 0) {
      if (this.messages[index]) clearTimeout(this.messages[index].timer);
      this.messages.splice(index, 1);
    },
  },
  computed: {
    style() {
      const baseSize: string = /\d(rem|px|em)$/.test(this.baseSize)
        ? this.baseSize
        : '100px';
      const array: string[] = this.position.toString().split('-');
      const position = array[0];
      const textAlign = array[1];
      const positionObject: PositionAlignment = {
        position: ['top', 'bottom'].includes(position) ? position : 'top',
        textAlign: ['left', 'center', 'right'].includes(textAlign)
          ? textAlign
          : 'center',
      };
      return getStyle(baseSize, positionObject);
    },
  },
});
</script>

<style scoped>
div {
  font-family: 'Lato', sans-serif;
}
</style>
