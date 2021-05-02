<template>
  <div>
    <p><a href="#" @click="openDrawer">about</a></p>
    <p><a href="#">my projects</a></p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navigation',
  methods: {
    openDrawer(): void {
      this.$store.commit('setDrawerOpen', true);
    },
  },
};
</script>

<style scoped>
p {
  font-size: 0.8em;
}
div {
  display: flex;
  justify-content: space-evenly;
  padding: 0 1em;
  width: 15%;
  text-align: right;
}
</style>
