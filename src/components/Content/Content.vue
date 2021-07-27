<template>
  <div id="content" :style="mobileCSS">
    <AboutDrawer :open="getDrawer" />
    <Portfolio />
  </div>
</template>

<script lang="ts">
import AboutDrawer from '@/components/Content/AboutDrawer/AboutDrawer.vue';
import Portfolio from '@/components/Content/Portfolio/Portfolio.vue';
import isMobile from 'is-mobile';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Content',
  components: { Portfolio, AboutDrawer },
  setup() {
    const store = useStore();
    const getDrawer = computed((): boolean => store.state.drawerOpen);
    const mobileCSS = computed(() =>
      isMobile() ? { height: '85vh' } : { height: '90vh' }
    );
    return { getDrawer, mobileCSS };
  },
});
</script>

<style scoped>
#content {
  height: 90vh;
  width: 100%;
}
</style>
