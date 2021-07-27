<template>
  <div>
    <h2>{{ title }}</h2>
    <a v-if="closeButton" href="#" @click="invokeOnClickCallback">
      <i class="fas fa-times fa-1x"></i>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Title',
  props: {
    title: {
      type: String,
      default: 'No Title',
    },
    closeButton: {
      type: Boolean,
      default: false,
    },
    onClickCallback: Function,
  },
  setup(props) {
    const invokeOnClickCallback = () => {
      if (props.onClickCallback) props.onClickCallback();
    };
    return { invokeOnClickCallback };
  },
});
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h2 {
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
}

.fa-times:hover {
  color: red;
  transition: all 200ms linear 0s;
}
</style>
