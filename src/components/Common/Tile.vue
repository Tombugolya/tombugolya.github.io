<template>
  <div :style="style">
    <a :href="tile.url">{{ tile.name }}</a>
  </div>
</template>

<script lang="ts">
import { TileProp } from '@/components/Content/Portfolio/Portfolio.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Tile',
  props: {
    tile: Object as PropType<TileProp>,
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  text-align: center;
  font-size: 1em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
