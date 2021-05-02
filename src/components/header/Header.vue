<template>
  <header>
    <Title />
    <Navigation />
  </header>
</template>

<script>
import Title from '@/components/MainTitle';
import Navigation from '@/components/Navigation';

export default {
  name: 'Header',
  components: { Navigation, Title },
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
