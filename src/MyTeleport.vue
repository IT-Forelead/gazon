<script setup>
import { useModalStore } from "./stores/modal.store";

const closeTeleport = () => {
  useModalStore().closeTeleport();
};
const props = defineProps({
  show: Boolean,
});
</script>
<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="useModalStore().isMyTeleportOpen"
        class="modal modal-mask fixed top-20 left-0 right-0 flex items-center p-3 justify-center z-50 bg-white rounded-lg max-w-md md:mx-auto mx-4"
        @click="closeTeleport"
      >
        <div class="modal-container">
          <div
            class="modal-bg fixed inset-0 bg-black opacity-50 z-40"
            @click="closeModal"
          ></div>
          <div
            class="modal fixed top-20 left-0 right-0 flex items-center justify-center z-50 bg-white rounded-lg max-w-md md:mx-auto mx-4"
          >
            <div class="w-full md:p-2 shadow-md p-3">
              <div style="display: flex">
                <slot> </slot>
                <!-- <button
                  @click="closeTeleport"
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-teal-200 hover:text-teal-500 rounded-lg w-8 h-8 p-2.5 ml-auto inline-flex justify-center items-center"
                >
                  <CloseIcon class="w-5 h-5" />
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style>
.modal,
.modal-bg {
  transition: all 0.4s ease;
}

.v-enter-active .modal {
  transition-delay: 0.4s;
}
.v-leave-active {
  transition-delay: 0.4s;
  /* transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear; */
}

.v-enter-from .modal-bg,
.v-leave-to .modal-bg {
  opacity: 0;
}
.v-enter-from .modal,
.v-leave-to .modal {
  opacity: 0;
  transform: translateY(-80px);
}
</style>
