<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineProps } from "vue";
import { useMovieStore } from "@/stores/movies";
import type { Movie } from '@/stores/interfaces'
import router from "../../router";
import { useTVStore } from "@/stores/tv";

interface MovieProps {
  text?: boolean
  movie: Movie
  category: string
}

const movieStore = useMovieStore()
const tvStore = useTVStore()

const props = withDefaults(defineProps<MovieProps>(), {
  text: false,
  category: 'movie'
});

const openMovieDetail = async (id: number) => {
  if (props.category === 'movie') {
    await movieStore.getMovieDetail(id);
    router.push({ name: "movie-detail", params: { id } });
  } else {
    await tvStore.getTVDetail(id)
    router.push({ name: 'tv-detail', params: { id } })
  }
};
</script>

<template>
  <div
    v-if="movie"
    class="
      md:max-w-[18rem]
      max-w-[10rem]
      flex flex-col
      justify-between
      cursor-pointer
      gap-y-[1.125rem]
      mx-6
      lg:mx-0
    "
    @click="openMovieDetail(movie.id)"
  >
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.original_title" class="poster" />
    <p v-if="text" class="text-center hover:underline lg:text-base text-xs">
      {{ movie.title }}
    </p>
  </div>
</template>

<style scoped>
.poster {
  box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.3);
  border-radius: 20px;
}
</style>
