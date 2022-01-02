<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { isExternal as isExt } from 'utils/validate';
import {computed, defineProps} from 'vue';

const props = defineProps({
  to: {
    type: String,
    required: true,
  }
});

// 帮助方法
const isExternal = computed(() => isExt(props.to));

// type是一个计算属性，可以获取一个链接是否是外部链接
const type = computed(() => {
  if (isExternal.value) {
    return 'a';
  } 
  return 'router-link';
})

const linkProps = (to) => {
  if (isExternal.value) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener',
    }
  }
  return { to }
}

</script>

<style lang="scss" scoped>

</style>