<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import Link from "./partials/Link.vue";

const className = ref('hidden')

const toggleMenu = () => {
  className.value = className.value === "hidden" ? "block" : "hidden";
}
</script>

<template>
  <div
    class="
      min-w-[17rem]
      max-w-[17rem]
      bg-gray-dark
      min-h-screen
      hidden
      lg:block
    "
  >
    <div class="px-6 py-4 bg-gray-600">Movies</div>
    <Link text="Popular" type="sidebar" href="/" />
    <Link text="Upcoming" type="sidebar" href="/upcoming" />
    <Link text="Now Playing" type="sidebar" href="/now-playing" />
    <Link text="Top Rated" type="sidebar" href="/top-rated" />
    <div class="px-6 py-4 bg-gray-600">TV</div>
    <Link text="Popular" type="sidebar" href="/tv" />
    <Link text="Top Rated" type="sidebar" href="/tv/top-rated" />
    <Link text="On the Air" type="sidebar" href="/tv/on-the-air" />
    <Link text="Airing today" type="sidebar" href="/tv/airing-today" />
  </div>
  <div class="absolute bg-gray-dark w-full h-full" :class="className">
    <button class="mx-6 my-4 h-4 lg:hidden" @click="toggleMenu">
      <div class="bg-white w-9 h-1 absolute rotate-45"></div>
      <div class="bg-white w-9 h-1 absolute -rotate-45"></div>
    </button>
    <div class="px-6 py-4 bg-gray-600">Movies</div>
    <Link text="Popular" type="sidebar" href="/" />
    <Link text="Upcoming" type="sidebar" href="/upcoming" />
    <Link text="Now Playing" type="sidebar" href="/now-playing" />
    <Link text="Top Rated" type="sidebar" href="/top-rated" />
    <div class="px-6 py-4 bg-gray-600">TV</div>
    <Link text="Popular" type="sidebar" href="/tv" />
    <Link text="Top Rated" type="sidebar" href="/tv/top-rated" />
    <Link text="On the Air" type="sidebar" href="/tv/on-the-air" />
    <Link text="Airing today" type="sidebar" href="/tv/airing-today" />
  </div>
  <div class="mx-6 py-2 lg:hidden bg-gray-light">
    <button @click="toggleMenu">
      <div class="bg-gray-dark my-1.5 w-9 h-1"></div>
      <div class="bg-gray-dark my-1.5 w-9 h-1"></div>
      <div class="bg-gray-dark my-1.5 w-9 h-1"></div>
    </button>
  </div>
</template>
