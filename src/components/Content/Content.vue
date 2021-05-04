<template>
  <div id="content" :style="mobileCSS">
    <AboutDrawer :open="getDrawer" />
    <Portfolio />
  </div>
</template>

<script lang="ts">
import AboutDrawer from '@/components/Content/AboutDrawer/AboutDrawer.vue';
import Portfolio from '@/components/Content/Portfolio/Portfolio.vue';
import { defineComponent } from 'vue';
import isMobile from 'is-mobile';

export default defineComponent({
  name: 'Content',
  components: { Portfolio, AboutDrawer },
  computed: {
    getDrawer(): boolean {
      return this.$store.state.drawerOpen;
    },
    mobileCSS(): Record<string, string> {
      return isMobile() ? { height: '85vh' } : { height: '90vh' };
    },
  },
});
</script>

<style scoped>
#content {
  height: 90vh;
  width: 100%;
}
</style>
