import { defineStore } from "pinia"
export const useModalStore = defineStore('modal', {
    state: () => ({
        isFilterMatchListModalOpen: false,
        isSearchMatchListModalOpen: false,
        isSuccessBookingStadiumModalOpen:false,
        isAddStadiumModalOpen:false,
        isDeleteStadiumModalOpen:false,
        isViewStadiumModalOpen:false
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
        },
        openAddStadiumModal() {
            this.isAddStadiumModalOpen = true
        },
        closeAddStadiumModal() {
            this.isAddStadiumModalOpen = false
        },
        openDeleteStadiumModal() {
            this.isDeleteStadiumModalOpen = true
        },
        closeDeleteStadiumModal() {
            this.isDeleteStadiumModalOpen = false
        },
        openViewStadiumModal() {
            this.isViewStadiumModalOpen = true
        },
        closeViewStadiumModal() {
            this.isViewStadiumModalOpen = false
        }
    }
})