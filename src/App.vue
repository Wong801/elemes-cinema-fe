<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <div class="lg:flex flex-none w-full bg-gray-light">
    <Sidebar />
    <router-view class="lg:px-2 px-0 lg:py-10 py-2 w-full" />
  </div>
  <Footer />
</template>
