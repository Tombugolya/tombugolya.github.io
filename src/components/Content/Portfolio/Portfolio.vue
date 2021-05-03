<template>
  <div id="portfolio" :style="styleGrid">
    <div :key="tile.id" v-for="tile in tiles">
      <Tile :tile="tile" />
    </div>
  </div>
</template>

<script lang="ts">
import Tile from '@/components/Common/Tile.vue';
import { defineComponent } from 'vue';
import isMobile from 'is-mobile';

const basePath = 'https://tombugolya.github.io';

export interface TileProp {
  id: number;
  name: string;
  url: string;
  image: string;
}
interface Data {
  tiles: TileProp[];
}
export default defineComponent({
  name: 'Portfolio',
  components: { Tile },
  data(): Data {
    return {
      tiles: [
        {
          id: 1,
          name: 'Random Shape',
          url: `${basePath}/random-shape/`,
          image: require('@/assets/object.png'),
        },
        {
          id: 2,
          name: 'Colmar',
          url: `${basePath}/colmar/`,
          image: require('@/assets/colmar.jpg'),
        },
        {
          id: 3,
          name: 'Monochromize',
          url: `${basePath}/monochromize/`,
          image: require('@/assets/monochromize.png'),
        },
        {
          id: 4,
          name: 'Match Game',
          url: `${basePath}/MatchGame/`,
          image: require('@/assets/match.png'),
        },
        {
          id: 5,
          name: 'Tea Cozy',
          url: `${basePath}/tea_cozy/`,
          image: require('@/assets/teacozy.jpg'),
        },
        {
          id: 6,
          name: 'News',
          url: `${basePath}/news/`,
          image: require('@/assets/news.png'),
        },
      ],
    };
  },
  computed: {
    styleGrid(): string {
      return `grid-template-columns: repeat(${
        isMobile() ? 2 : 3
      }, minmax(100px, 1fr));`;
    },
  },
});
</script>

<style scoped>
#portfolio {
  display: grid;
}
div {
  height: 100%;
}
</style>
