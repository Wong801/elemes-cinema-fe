<script setup lang="ts">
import Movies from '@/components/Movies.vue';
</script>

<template>
  <main>
    <Movies :text="true" type="now_playing" />
  </main>
</template>
