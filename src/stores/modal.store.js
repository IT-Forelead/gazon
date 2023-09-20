import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", {
  state: () => ({
    // isSuccessBookingStadiumModalOpen:false,
    isMyTeleportOpen: false,
    modal: "",
  }),
  actions: {
    openTeleport(modalName) {
      this.modal = modalName;
      this.isMyTeleportOpen = true;
    },
    closeTeleport() {
      this.isMyTeleportOpen = false;
    },
  },
});
