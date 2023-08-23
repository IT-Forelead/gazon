<script setup>
import SearchIcon from "@/assets/icons/SearchIcon.vue"
</script>

<template>
    <form class="mt-8 px-2 pb-6">
      <div class="relative mx-auto max-w-md pb-1 md:max-w-lg">
        <div class="absolute inset-y-0 flex items-center pl-3">
          <SearchIcon class="w-5 h-5 text-teal-600"/>
        </div>
        <input type="search" id="default-search"
               class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-full bg-white focus:ring-teal-500 focus:border-teal-500"
               placeholder="Stadionlarni qidirish..." required>
      </div>
    </form>
</template>
<style scoped>

</style>