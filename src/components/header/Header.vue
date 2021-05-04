<template>
  <header :style="mobileCSS">
    <MainTitle />
    <Navigation />
  </header>
</template>

<script lang="ts">
import MainTitle from '@/components/header/MainTitle.vue';
import Navigation from '@/components/header/Navigation.vue';
import isMobile from 'is-mobile';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Navigation, MainTitle },
  computed: {
    mobileCSS(): Record<string, string> {
      return isMobile()
        ? {
            flexDirection: 'column',
            height: '15vh',
            justifyContent: 'space-evenly',
          }
        : {
            flexDirection: 'row',
            height: '10vh',
            justifyContent: 'space-between',
          };
    },
  },
});
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
