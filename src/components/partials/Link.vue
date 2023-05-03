<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue'

interface LinkProps {
  text: string
  href: string
  type: string
}

const props = withDefaults(defineProps<LinkProps>(), {
  text: '',
  href: '',
  type: 'sidebar'
})

const className = computed(() => {
  switch (props.type) {
        case "sidebar":
          return "inline-block px-10 py-5 min-w-full text-left hover:bg-gray-light";
        case "navbar":
          return "";
        default:
          return "";
      }
})

const exactActiveClass = computed(() => {
      switch (props.type) {
        case "sidebar":
          return "bg-gray-light";
        case "navbar":
          return "";
        default:
          return "";
      }
})
</script>

<template>
  <router-link
    :to="href"
    :class="className"
    :exact-active-class="exactActiveClass"
    >{{ text }}</router-link
  >
</template>
