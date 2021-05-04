<template>
  <transition name="fade" mode="out-in">
    <div :style="mobileCSS" id="drawer" v-if="open">
      <div id="drawer-content">
        <Title title="About me" close-button :on-click-callback="closeDrawer" />
        <AboutText />
        <Icons />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Title from '@/components/Common/Title.vue';
import AboutText from '@/components/Content/AboutDrawer/AboutText.vue';
import Icons from '@/components/Content/AboutDrawer/Icons.vue';
import { defineComponent } from 'vue';
import isMobile from 'is-mobile';

export default defineComponent({
  name: 'AboutDrawer',
  components: { Icons, AboutText, Title },
  props: {
    open: Boolean,
  },
  methods: {
    closeDrawer(): void {
      this.$store.commit('setDrawerOpen', false);
    },
  },
  computed: {
    mobileCSS(): Record<string, string> {
      return isMobile()
        ? { width: '100%', top: '15vh', height: '85vh' }
        : { width: 'calc(100% / 3)', top: '10vh', height: '90vh' };
    },
  },
});
</script>

<style scoped>
#drawer {
  background-color: whitesmoke;
  position: absolute;
  right: 0;
}
#drawer-content {
  display: flex;
  height: 80%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
