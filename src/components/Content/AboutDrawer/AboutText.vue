<template>
  <div>
    <p>
      My name is Tom and I am a developer and an automation engineer from Israel
      👋
    </p>
    <p>
      I enjoy working with three.js, typescript, react and aws lambda, just for
      fun I decided to create this website using vue
    </p>
    <p>
      I am also a musician and an avid listener, feel free to checkout my
      last.fm and watch out for my annual playlists on spotify!
    </p>
    <p>Feel free to get in touch!</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AboutText',
});
</script>

<style scoped>
p {
  font-family: Lato, serif;
  font-size: 1em;
  text-align: justify;
  margin: 0.5em 0;
}
div {
  margin: 0 auto;
  width: 75%;
}
</style>
