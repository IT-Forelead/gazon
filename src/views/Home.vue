<script setup>
import News from "./News.vue";
import BestPlayers from "@/views/BestPlayers.vue";
import NavbarTop from "@/components/NavbarTop.vue";
import StadiumsSection from "@/components/HomeSections/StadiumsSection.vue";
import SearchingSection from "@/components/HomeSections/SearchingSection.vue";
import TodaysMatchesSection from "@/components/HomeSections/TodaysMatchesSection.vue";
import FinishedMatchesSection from "@/components/HomeSections/FinishedMatchesSection.vue";
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