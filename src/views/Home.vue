<script setup>
import BestPlayers from "@/views/BestPlayers.vue"
import SearchingSection from "@/components/Home Sections/SearchingSection.vue"
import StadiumsListSection from "@/components/Home Sections/StadiumsListSection.vue"
import NavbarTop from "@/components/NavbarTop.vue";
import FinishedMatchesSection from "@/components/Home Sections/FinishedMatchesSection.vue"
import TodaysMatchesSection from "@/components/Home Sections/TodaysMatchesSection.vue"
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavbarTop />
    <SearchingSection />
    <StadiumsListSection/>
    <TodaysMatchesSection/>
    <BestPlayers />
    <FinishedMatchesSection/>
  </div>
</template>
