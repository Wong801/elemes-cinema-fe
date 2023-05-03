<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    class="
      bg-red-primary
      font-bold
      w-[8.625rem]
      h-[3.125rem]
      rounded-[0.938rem]
      text-center
    "
    @click="onClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["pressed"]);

const onClick = () => {
  emits("pressed");
};
</script>
