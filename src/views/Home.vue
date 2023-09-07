<script setup>
import BestPlayers from "@/views/BestPlayers.vue"
import NavbarTop from "@/components/NavbarTop.vue";
import SearchingSection from "@/components/Home Sections/SearchingSection.vue"
import StadiumsSection from "@/components/Home Sections/StadiumsSection.vue"
import TodaysMatchesSection from "@/components/Home Sections/TodaysMatchesSection.vue"
import FinishedMatchesSection from "@/components/Home Sections/FinishedMatchesSection.vue"
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavbarTop />
    <SearchingSection />
    <StadiumsSection/>
    <TodaysMatchesSection/>
    <BestPlayers />
    <FinishedMatchesSection/>
  </div>
</template>