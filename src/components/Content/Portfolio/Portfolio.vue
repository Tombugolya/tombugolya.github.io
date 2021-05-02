<template>
  <div id="portfolio">
    <div :key="tile.id" v-for="tile in tiles">
      <Tile :tile="tile" />
    </div>
  </div>
</template>

<script lang="ts">
import Tile from '@/components/Common/Tile.vue';
import { defineComponent } from 'vue';

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
          name: 'Colmar',
          url: `${basePath}/colmar/`,
          image: require('@/assets/colmar.jpg'),
        },
        {
          id: 2,
          name: 'News',
          url: `${basePath}/news/`,
          image: require('@/assets/news.png'),
        },
        {
          id: 3,
          name: 'Random Shape',
          url: `${basePath}/random-shape/`,
          image: require('@/assets/object.png'),
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
          name: 'Monochromize',
          url: `${basePath}/monochromize/`,
          image: require('@/assets/monochromize.png'),
        },
      ],
    };
  },
});
</script>

<style scoped>
#portfolio {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
}
div {
  height: 100%;
}
</style>
