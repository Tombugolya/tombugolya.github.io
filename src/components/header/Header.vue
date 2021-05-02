<template>
  <header>
    <MainTitle />
    <Navigation />
  </header>
</template>

<script>
import MainTitle from '@/components/header/MainTitle';
import Navigation from '@/components/header/Navigation';

export default {
  name: 'Header',
  components: { Navigation, MainTitle },
};
</script>

<style scoped>
header {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
</style>
