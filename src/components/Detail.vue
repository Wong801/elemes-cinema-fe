<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Movie from "./partials/Movie.vue";
import Movies from "@/components/Movies.vue";
import { computed, onBeforeMount, ref } from "vue";
import { useMovieStore } from "@/stores/movies";
import { useTVStore } from "@/stores/tv";
import { useRoute } from "vue-router";
import type { Movie as MovieInterface, TV } from "@/stores/interfaces";

const route = useRoute()
const movieStore = useMovieStore()
const tvStore = useTVStore()

const isTV = ref(route.fullPath.includes('tv'))

const dataId = ref(parseInt(route.params.id as string, 10))

onBeforeMount(async () => {
  if (isTV.value) {
    await tvStore.getTVDetail(dataId.value)
  } else {
    await movieStore.getMovieDetail(dataId.value)
  }
})

const data = computed<MovieInterface | TV>(() => {
  if (isTV.value) {
    return tvStore.tv as TV
  }
  return movieStore.movie as MovieInterface
})
</script>

<template>
  <div v-if="data">
    <h1 class="mx-2 text-center lg:text-left">{{ data.title }}</h1>
    <div
      class="
        flex flex-col
        items-center
        lg:items-stretch lg:flex-row
        gap-x-4
        my-5
        py-8
        px-4
        w-full
        lg:bg-left
        bg-center
      "
      :style="{ 
        'background-image': `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat'
      }"
    >
      <Movie :movie="data" />
      <div class="w-full flex flex-col justify-between lg:p-0 p-6 bg-black bg-opacity-20">
        <div class="flex flex-col gap-y-5 p-2">
          <div>
            <p>Release Date: {{ data.release_date || 'unknown' }}</p>
            <p>Language: {{ data.original_language }}</p>
          </div>
          <h2 class="uppercase font-bold text-2xl text-center lg:text-left">
            Sinopsis
          </h2>
          <div>
            <p>{{ data.overview }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[3.75rem]">
      <h1 class="lg:mx-2 mx-6">Popular Shows</h1>
      <Movies :withPagination="false" :limit="6" :category="isTV ? 'tv' : 'movie'" class="my-10" />
    </div>
  </div>
  <div v-else>
    <h1 class="text-2xl mb-6">Oops data not found T_T</h1>
    Back to <router-link to="/" class="underline">Home</router-link>
  </div>
</template>
