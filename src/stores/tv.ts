import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { FetchTVsParams, TV, TVs } from './interfaces'

export const useTVStore = defineStore('tv', () => {
  const searchTitle = ref('')
  const tvs = ref<TVs>([])
  const tv = ref<TV | unknown>(null)
  const total = ref(0)

  const totalPages = ref(0)

  async function fetchTVs(params: FetchTVsParams) {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${params.type}`, {
      params: {
        api_key: "d673a8bde720f14ef708063932c422ce",
        page: params.page,
      },
    });
    tvs.value = response.data.results;
    total.value = response.data.total_results;
    totalPages.value = response.data.total_pages
  }

  async function getTVDetail(id: number) {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
    params: {
        api_key: "d673a8bde720f14ef708063932c422ce",
      },
    });
    tv.value = response.data
  }

  return { searchTitle, tvs, tv, total, totalPages, fetchTVs, getTVDetail }
})