<template>
  <div :style="style">
    <a :href="tile.url" ref="tile" target="_blank">
      <p>{{ tile.name }}</p>
      {{ highlight ? highlightTile() : '' }}
    </a>
  </div>
</template>

<script lang="ts">
import { TileProp } from '@/components/Content/Portfolio/Portfolio.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Tile',
  props: {
    tile: Object as PropType<TileProp>,
    highlight: Boolean,
  },
  methods: {
    highlightTile(): void {
      const element = this.$refs.tile as HTMLDivElement;
      const originalColor = element.style.backgroundColor;
      element.style.transition = 'all 300ms linear 0s';
      element.style.backgroundColor = 'rgba(0,0,0,0.8)';
      setTimeout(function () {
        element.style.backgroundColor = originalColor;
      }, 200);
      this.$store.commit('setHighlight', false);
    },
  },
  computed: {
    style(): string {
      if (this.tile && this.tile.image) {
        return `background-image: url(${this.tile.image});`;
      } else return '';
    },
  },
});
</script>

<style scoped>
div {
  font-family: 'Work Sans', sans-serif;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
p {
  color: white;
  visibility: hidden;
}
a {
  font-size: 1.5em;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: all 200ms linear 0s;
}
a:hover {
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 200ms linear 0s;
}
a:hover p {
  visibility: visible;
}
p:hover {
  color: orange;
  transition: all 200ms linear 0s;
}
</style>
