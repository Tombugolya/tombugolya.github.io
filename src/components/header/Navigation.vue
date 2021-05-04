<template>
  <div :style="mobileCSS">
    <p><a href="#" @click="openDrawer">about</a></p>
    <p><a href="#" @click="highlightProjects">my projects</a></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import isMobile from 'is-mobile';

export default defineComponent({
  name: 'Navigation',
  methods: {
    openDrawer(): void {
      this.$store.commit('setDrawerOpen', true);
    },
    highlightProjects(): void {
      this.$store.commit('setDrawerOpen', false);
      this.$store.commit('setHighlight', true);
    },
  },
  computed: {
    mobileCSS(): Record<string, string> {
      return isMobile() ? { width: '60%' } : { width: '15%' };
    },
  },
});
</script>

<style scoped>
p {
  font-size: 0.8em;
}
div {
  display: flex;
  justify-content: space-evenly;
  padding: 0 1em;
  width: 15%;
  text-align: right;
}
</style>
