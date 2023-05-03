<script setup lang="ts">
import Detail from '@/components/Detail.vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (!route.params.id) {
    router.push('/')
  }
})
</script>

<template>
  <main>
    <Detail />
  </main>
</template>