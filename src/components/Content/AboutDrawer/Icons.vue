<template>
  <div>
    <a href="https://linkedin.com/in/tombugolya" target="_blank">
      <i class="fab fa-linkedin fa-lg"></i>
    </a>
    <a href="https://last.fm/user/carandboat" target="_blank">
      <i class="fab fa-lastfm-square fa-lg"></i>
    </a>
    <a href="https://open.spotify.com/user/tombugolya" target="_blank">
      <i class="fab fa-spotify fa-lg"></i>
    </a>
    <a href="https://github.com/tombugolya" target="_blank">
      <i class="fab fa-github fa-lg"></i>
    </a>
    <a class="gmail tooltip" @click="copyEmail($event)">
      <i class="fas fa-envelope-square fa-lg"></i>
    </a>
    <SnackBar
      base-size="4em"
      ref="snackbar"
      :holdTime="2000"
      position="bottom-center"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useClipboard from 'vue-clipboard3';
import SnackBar from '@/components/Common/Snackbar.vue';

export default defineComponent({
  name: 'Icons',
  components: { SnackBar },
  methods: {
    async copyEmail(event: Event): Promise<void> {
      try {
        await useClipboard().toClipboard('tombugolya@gmail.com');
        if (event.target) {
          const element = event.target as HTMLAnchorElement;
          const originalColor = element.style.color;
          element.style.transition = 'all 300ms linear 0s';
          element.style.color = 'green';
          (this.$refs.snackbar as typeof SnackBar).info('Copied to clipboard!');
          setTimeout(() => {
            element.style.color = originalColor;
          }, 1000);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
});
</script>

<style scoped>
i {
  margin: 0.1em;
}
</style>
