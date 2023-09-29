<script setup>
import StarIcon from "@/assets/icons/StarIcon.vue";
import useMoneyFormatter from "../../mixins/currencyFormatter";
defineProps({
  stadium: Object,
});
</script>
<template>
  <section>
    <router-link :to="`/view-stadiums/${stadium?.id}`" class="relative">
      <div
        class="flex items-start gap-x-1 absolute top-3 right-3 text-white font-extrabold z-10"
      >
        <StarIcon class="text-yellow-300 h-6 w-6" />
        <p>{{ stadium?.assessment }}</p>
      </div>
      <div
        :class="[
          $route.href == '/stadium' ? 'h-60 md:h-64 lg:h-48' : 'h-40 md:h-48',
          'bg-cover bg-center 2xl:h-60 rounded-t-xl relative after:absolute after:content-[\'\'] after:w-full after:h-full after:rounded-t-xl after:bg-[#00000049] duration-300 group-hover:after:bg-[#00000070]',
        ]"
        :style="{
          backgroundImage: `url(/images/stadiums/${
            stadium?.images[0] ? stadium?.images[0] : 'the-stadium'
          }.jpg)`,
        }"
      ></div>
      <div class="p-2 border border-t-0 rounded-b-xl">
        <h4 class="text-teal-700 md:text-2xl text-lg font-bold">
          {{ stadium?.title }}
        </h4>
        <div class="flex justify-between">
          <p>{{ stadium?.address }}</p>
          <p>{{ useMoneyFormatter(stadium?.price) }}</p>
        </div>
      </div>
    </router-link>
  </section>
</template>