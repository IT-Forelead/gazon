import { defineStore } from "pinia"
export const useModalStore = defineStore('modal', {
    state: () => ({
        isFilterMatchListModalOpen: false,
        isSearchMatchListModalOpen: false,
        isSuccessBookingStadiumModalOpen:false
    }),
    actions: {
        openFilterMatchListModal() {
            this.isFilterMatchListModalOpen = true
        },
        closeFilterMatchListModal() {
            this.isFilterMatchListModalOpen = false
        },
        openSearchMatchListModal() {
            this.isSearchMatchListModalOpen = true
        },
        closeSearchMatchListModal() {
            this.isSearchMatchListModalOpen = false
        },
        openSuccessBookingStadiumModal(){
            this.isSuccessBookingStadiumModalOpen = true
        },
        closeSuccessBookingStadiumModal(){
            this.isSuccessBookingStadiumModalOpen = false
        }
    }
})