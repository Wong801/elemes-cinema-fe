<script setup lang="ts">
import Movies from '@/components/Movies.vue';
</script>

<template>
  <main>
    <Movies :text="true" type="popular" category="tv" />
  </main>
</template>
