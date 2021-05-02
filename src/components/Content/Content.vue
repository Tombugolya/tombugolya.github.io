<template>
  <div>
    <AboutDrawer :open="getDrawer" />
    <Portfolio />
  </div>
</template>

<script lang="ts">
import AboutDrawer from '@/components/Content/AboutDrawer/AboutDrawer';
import Portfolio from '@/components/Content/Portfolio/Portfolio';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Content',
  components: { Portfolio, AboutDrawer },
  computed: {
    getDrawer(): boolean {
      return this.$store.state.drawerOpen;
    },
  },
});
</script>

<style scoped>
div {
  height: 90vh;
  width: 100%;
}
</style>
