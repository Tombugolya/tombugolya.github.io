<template>
  <div v-if="open">
    <Title title="About me" close-button :on-click-callback="closeDrawer" />
    <AboutText />
    <Icons />
  </div>
</template>

<script lang="ts">
import Title from '@/components/Common/Title';
import AboutText from '@/components/Content/AboutDrawer/AboutText';
import Icons from '@/components/Content/AboutDrawer/Icons';
export default {
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
};
</script>

<style scoped></style>
