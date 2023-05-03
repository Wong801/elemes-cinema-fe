import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { FetchMoviesParams, Movie, Movies } from './interfaces'

export const useMovieStore = defineStore('movie', () => {
  const searchTitle = ref('')
  const movies = ref<Movies>([])
  const movie = ref<Movie | unknown>(null)
  const total = ref(0)

  const totalPages = ref(0)

  async function fetchMovies(params: FetchMoviesParams) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.type}`, {
      params: {
        api_key: "d673a8bde720f14ef708063932c422ce",
        page: params.page,
      },
    });
    movies.value = response.data.results;
    total.value = response.data.total_results;
    totalPages.value = response.data.total_pages
  }

  async function getMovieDetail(id: number) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: "d673a8bde720f14ef708063932c422ce",
      },
    });
      movie.value = response.data
  }

  return { searchTitle, movies, movie, total, totalPages, fetchMovies, getMovieDetail }
})