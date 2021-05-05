<template>
  <Header />
  <Content />
</template>

<script>
import Header from '@/components/Header/Header';
import Content from '@/components/Content/Content';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Content,
    Header,
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Lato&family=Work+Sans:wght@400&display=swap');
* {
  margin: 0;
}
body {
  font-size: 22px;
  background-color: whitesmoke;
  padding: 0;
}
a {
  font-family: 'Work Sans', sans-serif;
  text-decoration: none;
  color: black;
}
a:hover {
  color: orange;
  transition: all 200ms linear 0s;
}
</style>
