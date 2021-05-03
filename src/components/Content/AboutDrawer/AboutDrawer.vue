<template>
  <transition name="fade" mode="out-in">
    <div id="drawer" v-if="open">
      <Title title="About me" close-button :on-click-callback="closeDrawer" />
      <AboutText />
      <Icons />
    </div>
  </transition>
</template>

<script lang="ts">
import Title from '@/components/Common/Title.vue';
import AboutText from '@/components/Content/AboutDrawer/AboutText.vue';
import Icons from '@/components/Content/AboutDrawer/Icons.vue';
import { defineComponent } from 'vue';

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
});
</script>

<style scoped>
#drawer {
  background-color: whitesmoke;
  position: absolute;
  top: 10vh;
  right: 0;
  width: calc(100% / 3);
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
