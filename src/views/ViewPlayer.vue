<script setup>
import { computed } from 'vue';
import CloseIcon from '../assets/icons/CloseIcon.vue';
import { useViewPlayerStore } from '../stores/viewPlayer.store';

const playerInformation = computed(() => useViewPlayerStore().player)

const clearAll = () => {
    useViewPlayerStore().clearPlayer()
}
</script>

<template>
    <section class="fixed w-full top-0 bg-white flex flex-col gap-y-5 p-10 border rounded z-10"
        v-show="useViewPlayerStore().player.name">
        <button class="absolute bg-[#16858D] rounded-full group right-4  top-10">
            <CloseIcon class="w-10 h-10 text-white font-bold group-hover:rotate-90 duration-300" @click="clearAll()" />
        </button>
        <div class="bg-top bg-cover w-20 h-20 bg-no-repeat rounded-full"
            :style="{ backgroundImage: `url('${playerInformation.name}.jpg')` }"></div>
        <h2 class="capitalize font-semibold text-3xl">{{ playerInformation.name }}</h2>
        <h5>{{ playerInformation.age }}</h5>
    </section>
</template>
