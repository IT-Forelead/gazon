<script setup>
import { computed, ref } from "vue";
import bestPlayers from '@/assets/playerLists.json'
import PlaceIcon from "@/assets/icons/PlaceIcon.vue";
import PlaceOneIcon from "@/assets/icons/PlaceOneIcon.vue";
import PlaceTwoIcon from "@/assets/icons/PlaceTwoIcon.vue";
import PlaceThreeIcon from "@/assets/icons/PlaceThreeIcon.vue";

const best = ref('daily')
const reportBestPlayer = computed(() => bestPlayers.filter(player => player.status == best.value))

</script>

<template>
    <section class="px-2 max-h-96 overflow-y-auto max-w-lg md:mx-auto my-2">
        <div class="sticky top-0 bg-white pb-4">
            <h2 class="text-xl font-bold text-teal-600">Eng zo'r futbolchilar</h2>
            <ul class="flex mt-2 space-x-2">
                <li>
                    <button class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
                        :class="{ 'bg-teal-500 text-white': best == 'daily' }" @click="best = 'daily'">Kunlik</button>
                </li>
                <li>
                    <button class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
                        :class="{ 'bg-teal-500 text-white': best == 'weekly' }" @click="best = 'weekly'">Haftalik</button>
                </li>
                <li>
                    <button class="text-sm py-1 px-4 bg-gray-200 rounded font-semibold duration-200"
                        :class="{ 'bg-teal-500 text-white': best == 'monthly' }" @click="best = 'monthly'">Oylik</button>
                </li>
            </ul>
        </div>
        <ul class="space-y-2">
            <li v-for="(player, index) in reportBestPlayer" :key="index" class="bg-white rounded-md p-2">
                <router-link :to="`/view-player/${player.firstName}/${player.id}`"
                    class="flex items-center justify-between">
                    <button class="flex items-center">
                        <PlaceOneIcon class="w-10 h-10" v-show="index == 0" />
                        <PlaceTwoIcon class="w-10 h-10" v-show="index == 1" />
                        <PlaceThreeIcon class="w-10 h-10" v-show="index == 2" />
                        <PlaceIcon class="w-10 h-10" v-show="index > 2" />
                        <div class="bg-top bg-cover w-16 h-16 bg-no-repeat rounded-full mx-2"
                            :style="{ backgroundImage: `url('${player.firstName}.jpg')` }"></div>
                        <div class="text-left">
                            <h3 class="font-semibold capitalize">{{ player.firstName }}</h3>
                            <h4 class="text-sm capitalize">{{ player.lastName }}</h4>
                        </div>
                    </button>
                    <div class="text-right">
                        <p class="text-[#666]">Gool: <b class="text-black">{{ player.goal }}</b></p>
                        <p class="text-[#666]">Assist: <b class="text-black">{{ player.assist }}</b></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>
