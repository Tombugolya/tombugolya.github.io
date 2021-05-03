/* eslint-disable */
import { Store } from '@/store';
import { ComponentCustomProperties } from 'vue';
import { RootState } from '@/store/Store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
