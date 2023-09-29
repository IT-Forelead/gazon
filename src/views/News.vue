<script setup>
import axios from "axios";
import router from "@/router";
import { Vue3Marquee } from "vue3-marquee";
import { ref, onMounted, computed } from "vue";
import ImageIcon from "@/assets/icons/ImageIcon.vue";
import RightIcon from "@/assets/icons/RightIcon.vue";
import LeftBackIcon from "@/assets/icons/LeftBackIcon.vue";

const isLoading = ref(false);
const rssItems = ref([]);
const isHome = computed(() => router.currentRoute.value.path === "/");
const fetchRssData = () => {
  isLoading.value = true;
  const rssUrl = "https://daryo.uz/rss";
  axios
    .get(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`, {
      timeout: 13000,
    })
    .then((response) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data.contents, "text/xml");
      const items = xmlDoc.querySelectorAll("item");
      const newRssItems = [];
      items.forEach((item) => {
        const category = item.querySelector("category").textContent;
        const imageUrl = item.querySelector("enclosure");
        const pubDate = new Date(item.querySelector("pubDate").textContent);
        const formattedPubDate = pubDate.toISOString().split("T")[0];
        if (category === "Sport") {
          newRssItems.push({
            pubDate: formattedPubDate,
            image: imageUrl
              ? imageUrl.getAttribute("url")
              : "/images/stadiums/the-stadium.jpg",
            title: item.querySelector("title").textContent,
            link: item.querySelector("link").textContent,
            description: item.querySelector("description").textContent,
          });
        }
      });
      rssItems.value = newRssItems;
      isLoading.value = false;
    })
    .catch((error) => {
      isLoading.value = false;
      console.error("Error fetching RSS data:", error.message);
    });
};
onMounted(() => {
  fetchRssData();
});
</script>
<template>
  <div class="px-2">
    <button @click="router.back()" :class="{ hidden: $route.href === '/' }">
      <LeftBackIcon
        class="w-7 h-7 text-teal-600 hover:text-teal-500 cursor-pointer"
      />
    </button>
    <h1
      class="text-center pb-2 font-bold md:text-3xl text-2xl text-teal-500"
      :class="{ hidden: $route.href === '/' }"
    >
      Yangiliklar
    </h1>
    <p
      class="text-center pb-4 max-w-3xl mx-auto text-lg"
      :class="{ hidden: $route.href === '/' }"
    >
      Futbol olamiga oid eng so'nggi yangiliklar
    </p>
    <!--    NewsSection style-->
    <div v-if="isHome">
      <div
        class="flex justify-between max-w-5xl items-center md:mx-auto text-teal-600 font-bold px-2 mt-4"
      >
        <h1 class="text-xl">Yangiliklar</h1>
        <router-link to="/news" class="text-xs hover:text-teal-500">
          Barchasi
        </router-link>
      </div>
      <Vue3Marquee
        :space="60"
        :duration="60"
        :direction="'normal'"
        class="max-w-5xl my-4 px-2 md:mx-auto"
      >
        <div
          v-if="isLoading"
          v-for="skeleton in 6"
          role="status"
          class="flex items-center w-80 mx-2 justify-center h-56 max-w-sm bg-gray-400 rounded-lg animate-pulse"
        >
          <ImageIcon class="w-10 h-10 text-gray-100" />
        </div>
        <a
          v-else
          :href="item.link"
          v-for="item in rssItems"
          class="group ml-4 relative block w-96 h-60"
        >
          <div
            class="flex-shrink-0 relative rounded-2xl overflow-hidden w-full h-full before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.9] before:z-[1]"
          >
            <img
              class="w-full h-full absolute top-0 left-0 object-cover"
              src="/images/stadiums/the-stadium.jpg"
              alt="Image Description"
            />
          </div>
          <div class="absolute top-0 inset-x-0 z-10">
            <div class="p-2 flex flex-col h-full sm:p-3">
              <div class="flex items-center">
                <div class="sm:ml-2 bg-white opacity-80 p-1 rounded-lg">
                  <h4 class="font-semibold text-sm text-teal-600">Sport</h4>
                  <p class="text-xs text-gray-800">
                    {{ item.pubDate }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 w-full z-10">
            <div class="h-full p-3 sm:p-5">
              <h3
                class="md:text-lg sm:text-xl font-semibold text-white group-hover:text-gray-300 line-clamp-2"
              >
                {{ item.title }}
              </h3>
              <p class="mt-2 text-gray-200 text-sm line-clamp-2">
                {{ item.description }}
              </p>
            </div>
          </div>
        </a>
      </Vue3Marquee>
    </div>
    <!--    News page style-->
    <div v-else class="grid pb-8 lg:grid-cols-2 lg:gap-y-5 gap-10">
      <div
        v-if="isLoading"
        v-for="skeleton in 6"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
        <div
          class="flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96"
        >
          <ImageIcon class="w-10 h-10 text-gray-100" />
        </div>
        <div class="w-full">
          <div class="h-2.5 bg-gray-300 rounded-full w-48 mb-4"></div>
          <div class="h-2 bg-gray-300 rounded-full max-w-[480px] mb-2.5"></div>
          <div class="h-2 bg-gray-300 rounded-full mb-2.5"></div>
          <div class="h-2 bg-gray-300 rounded-full max-w-[440px] mb-2.5"></div>
          <div class="h-2 bg-gray-300 rounded-full max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-300 rounded-full max-w-[360px]"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
      <a
        v-else
        :href="item.link"
        v-for="(item, index) in rssItems"
        :key="index"
        class="group rounded-xl overflow-hidden shadow-md border border-gray-200 p-2"
      >
        <div class="sm:flex">
          <div
            class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-60 md:h-44 h-64"
          >
            <img
              class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
              src="/images/stadiums/the-stadium.jpg"
              alt="image"
              v-if="item.image"
            />
          </div>
          <div class="grow mt-4 sm:ml-6 px-2 sm:px-0">
            <h3
              class="text-sm font-semibold text-gray-800 group-hover:text-gray-600 line-clamp-2"
            >
              {{ item.title }}
            </h3>
            <p class="mt-3 text-gray-600 line-clamp-3">
              {{ item.description }}
            </p>
            <div class="flex justify-between items-center mt-4">
              <p class="text-gray-500 font-bold">{{ item.pubDate }}</p>
              <p
                class="inline-flex items-center gap-x-2 md:pr-2 text-teal-600 decoration-2 hover:underline font-medium"
              >
                Read more
                <RightIcon
                  class="w-4 h-4 group-hover:translate-x-1 duration-300"
                />
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
</style>