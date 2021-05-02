<template>
  <Header />
  <Content />
</template>

<script>
import Header from '@/components/header/Header';
import Content from '@/components/Content/Content';

export default {
  name: 'App',
  components: {
    Content,
    Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Lato:wght@300&family=Work+Sans:wght@300&display=swap');
body {
  font-size: 22px;
  background-color: whitesmoke;
  margin: 0;
}
</style>
