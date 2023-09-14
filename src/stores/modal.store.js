import { defineStore } from "pinia"
export const useModalStore = defineStore('modal', {
    state: () => ({
        isSuccessBookingStadiumModalOpen:false,
        isMyTeleportOpen: false,
        modal: "",
    }),
    actions: {
        openSuccessBookingStadiumModal(){
            this.isSuccessBookingStadiumModalOpen = true
        },
        closeSuccessBookingStadiumModal(){
            this.isSuccessBookingStadiumModalOpen = false
        },
        openTeleport(modalName) {
              console.log(modalName);
              this.modal = modalName;
              this.modalName = true;

              this.isMyTeleportOpen = true;
            },
            closeTeleport() {
              this.isMyTeleportOpen = false;
            },
    }
})

