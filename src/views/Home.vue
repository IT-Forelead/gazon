<script setup>
import News from "./News.vue";
import BestPlayers from "@/views/BestPlayers.vue";
import NavbarTop from "@/components/NavbarTop.vue";
import StadiumsSection from "@/components/Home Sections/StadiumsSection.vue";
import SearchingSection from "@/components/Home Sections/SearchingSection.vue";
import TodaysMatchesSection from "@/components/Home Sections/TodaysMatchesSection.vue";
import FinishedMatchesSection from "@/components/Home Sections/FinishedMatchesSection.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavbarTop />
    <SearchingSection />
    <StadiumsSection />
    <TodaysMatchesSection />
    <BestPlayers />
    <FinishedMatchesSection />
    <News />
  </div>
</template>