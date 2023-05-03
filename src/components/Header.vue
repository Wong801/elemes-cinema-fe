<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, "_blank"), focus();
};
</script>

<template>
  <header
    class="
      bg-red-primary
      lg:pl-10 lg:pr-[3.75rem]
      px-6
      flex
      justify-between
      items-center
      py-5
      lg:sticky lg:top-0
    "
  >
    <!-- <img
      src="@/assets/images/logos/cinemakuy.png"
      alt="cinemakuy_logo"
      class="cursor-pointer w-20 lg:w-auto"
      @click="$router.push('/')"
    /> -->
    <h1>Cinema Ges</h1>
    <div class="flex items-center gap-x-2 lg:gap-x-8 lg:w-max justify-end">
      <img
        src="@/assets/images/logos/imax.png"
        alt="imax_logo"
        class="cursor-pointer w-20 lg:w-auto"
        @click="openLink('https://www.imax.com/')"
      />
      <img
        src="@/assets/images/logos/dolby.png"
        alt="dolby_logo"
        class="cursor-pointer w-20 lg:w-auto"
        @click="openLink('https://www.dolby.com/technologies/dolby-atmos/')"
      />
    </div>
  </header>
  <!-- <Search
    :query="title"
    text="Search Title / Theatre Here"
    @search="searchMovies"
    :isMobile="true"
  /> -->
</template>
