<script setup lang="ts">
import Movies from '@/components/Movies.vue';
</script>

<template>
  <main>
    <Movies :text="true" type="on_the_air" category="tv" />
  </main>
</template>
