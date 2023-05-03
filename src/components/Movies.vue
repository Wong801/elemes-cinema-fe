<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import VPagination from "@hennge/vue3-pagination";
import "@/assets/css/pagination.css";
import Movie from './partials/Movie.vue'
import { computed, onMounted, ref } from "vue";
import { useMovieStore } from '@/stores/movies'
import { useTVStore } from "@/stores/tv";
// @ is an alias to /src

interface MoviesProps {
  text?: boolean
  withPagination?: boolean
  limit?: number
  type?: string 
  category: string
}

const props = withDefaults(defineProps<MoviesProps>(), {
  text: false,
  withPagination: true,
  limit: 0,
  type: 'popular',
  category: 'movie'
})

const movieStore = useMovieStore()
const tvStore = useTVStore()

const page = ref(1)
const loading = ref(false)

const items = computed(() => {
  if (props.category === 'tv') {
    return tvStore.tvs
  }
  return movieStore.movies
})

const totalPages = computed(() => {
  if (props.category === 'tv') {
    return tvStore.totalPages
  }
  return movieStore.totalPages
})

const getMovies = async (page: number) => {
  const params = {
    title: movieStore.searchTitle,
    page,
    type: props.type
  };
  await movieStore.fetchMovies(params)
}

const getTVs = async (page: number) => {
  const params = {
    title: tvStore.searchTitle,
    page,
    type: props.type
  };
  await tvStore.fetchTVs(params)
}

onMounted(async () => {
  loading.value = true
  if (props.category === 'movie') {
    await getMovies(page.value)
  } else {
    await getTVs(page.value)
  }
  loading.value = false
})
</script>

<template>
  <div v-if="!loading" class="w-full lg:w-auto">
    <div
      v-if="!limit"
      class="
        grid
        justify-items-center
        lg:grid-cols-4
        sm:grid-cols-3
        grid-cols-2
        gap-x-5 gap-y-10
        w-full
      "
    >
      <Movie
        v-for="item in items"
        :key="item.id"
        :movie="item"
        :text="text"
        :category="category"
      />
    </div>
    <div
      v-else
      class="
        grid
        justify-items-center
        lg:grid-cols-4
        sm:grid-cols-3
        grid-cols-2
        gap-x-5 gap-y-10
        w-auto
        lg:w-max
      "
    >
      <Movie
        v-for="i in limit"
        :key="i - 1"
        :movie="items[i - 1]"
        :text="text"
        :category="category"
      />
    </div>
    <div v-if="withPagination" class="w-max mx-auto mt-10 mb-[3.75rem]">
      <v-pagination
        v-model="page"
        :pages="totalPages"
        active-color="#C0222E"
        @update:modelValue="getMovies(page)"
      />
    </div>
  </div>
  <div v-else>
    <h4 class="text-white">Getting movie list...</h4>
  </div>
</template>

<style></style>
