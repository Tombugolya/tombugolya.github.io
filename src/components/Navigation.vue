<template>
  <div>
    <span><a @click="hideParent">about</a></span>
    <span><a>my projects</a></span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navigation',
  methods: {
    hideParent(): void {
      this.$store.commit('setDrawerOpen', true);
    },
  },
};
</script>

<style scoped>
a {
  font-family: 'Work Sans', sans-serif;
}
span {
  font-size: 0.8em;
  margin: 0 10%;
}
div {
  width: 20%;
  text-align: right;
}
</style>
