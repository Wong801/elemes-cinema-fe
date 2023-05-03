<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineEmits, computed, ref } from "vue";

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "",
  },
  query: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["search"]);

let searchValue = ref("");

const changeSearchValue = (e: Event) => {
  searchValue.value = (e.target as HTMLTextAreaElement).value;
};

const baseClass = computed(() => {
  switch (props.isMobile) {
    case true:
      return "bg-gray-dark p-3 lg:hidden sticky top-0";
    case false:
      return "w-full mx-[7.625rem] hidden lg:block";
    default:
      return "";
  }
});

const inputClass = computed(() => {
  switch (props.isMobile) {
    case true:
      return "w-full rounded-lg px-4 py-1 placeholder-[#C4C4C4] text-black";
    case false:
      return "w-[31.25rem] px-[1.438rem] py-[0.938rem] placeholder-[#C4C4C4] focus:outline-none rounded-[1.25rem] text-black";
    default:
      return "";
  }
});

const beginSearch = () => {
  emits("search", searchValue.value);
};
</script>

<template>
  <div :class="baseClass">
    <input
      :value="query"
      @input="changeSearchValue"
      type="text"
      name="search"
      id="search-bar"
      :placeholder="props.text"
      :class="inputClass"
      @keyup.enter="beginSearch"
    />
  </div>
</template>


