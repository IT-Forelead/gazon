<script setup>
import BestPlayers from "@/views/BestPlayers.vue";
import SearchingSection from "@/components/Home Sections/SearchingSection.vue";
import StadiumsListSection from "@/components/Home Sections/StadiumsListSection.vue";
import TodaysMatches from "@/components/Home Sections/TodaysMatches.vue";
import FinishedMatches from "@/components/Home Sections/FinishedMatches.vue";
</script>

<template>
  <SearchingSection />
  <StadiumsListSection/>
  <TodaysMatches/>
  <BestPlayers />
  <FinishedMatches/>
</template>
