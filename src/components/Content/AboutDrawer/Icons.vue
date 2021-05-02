<template>
  <div>
    <a href="https://linkedin.com/in/tombugolya" target="_blank">
      <i class="fab fa-linkedin fa-2x"></i>
    </a>
    <a href="https://last.fm/user/carandboat" target="_blank">
      <i class="fab fa-lastfm fa-2x"></i>
    </a>
    <a href="https://github.com/tombugolya" target="_blank">
      <i class="fab fa-github fa-2x"></i>
    </a>
    <a class="gmail tooltip" @click="copyEmail">
      <i class="far fa-envelope fa-2x"></i>
      <span class="tooltip-text" ref="tooltip">copy to clipboard</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useClipboard from 'vue-clipboard3';

export default defineComponent({
  name: 'Icons',
  methods: {
    async copyEmail(): Promise<void> {
      try {
        await useClipboard().toClipboard('tombugolya@gmail.com');
        (this.$refs.tooltip as HTMLSpanElement).innerHTML = 'copied!';
      } catch (e) {
        console.error(e);
      }
    },
  },
});
</script>

<style scoped></style>
