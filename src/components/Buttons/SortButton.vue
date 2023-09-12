<script setup>
defineProps({ title: String });
</script>
<template>
  <button
    class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200 capitalize"
  >
    {{ title }}
  </button>
</template>
