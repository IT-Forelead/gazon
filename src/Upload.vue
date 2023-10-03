<script setup>
import { ref } from "vue";

const videoSrcList = ref([]);
const imageSrcList = ref([]);
const imageHoverStates = ref([]);

const handleFileUpload = (event) => {
  const files = event.target.files;
  const videoFiles = Array.from(files).filter((file) =>
    file.type.includes("video")
  );
  const imageFiles = Array.from(files).filter((file) =>
    file.type.includes("image")
  );

  const videoUrls = videoFiles.map((file) => URL.createObjectURL(file));
  const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));

  videoSrcList.value = videoSrcList.value.concat(videoUrls);
  imageSrcList.value = imageSrcList.value.concat(imageUrls);

  // Initialize hover states for each image
  imageHoverStates.value = Array(imageUrls.length).fill(false);
};

const playVideo = (videoUrl) => {
  const videoPlayer = ref.videoPlayer;
  videoPlayer.src = videoUrl;
  videoPlayer.play();
};

const handleImageHover = (index) => {
  imageHoverStates.value[index] = !imageHoverStates.value[index];
};
</script>

<template>
  <div class="relative">
    <label for="fileInput" class="block mb-2 cursor-pointer">
      Upload Video or Image
    </label>
    <input
      id="fileInput"
      type="file"
      accept="video/*,image/*"
      multiple
      @change="handleFileUpload"
      class="hidden"
    />

    <div
      v-for="(src, index) in [...videoSrcList, ...imageSrcList]"
      :key="index"
      class="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <video
        v-if="videoSrcList.includes(src)"
        ref="videoPlayer"
        class="w-full"
        @click="playVideo(src)"
        controls
      >
        <source :src="src" type="video/mp4" />
      </video>
      <img
        v-else
        :src="src"
        alt="Uploaded Image"
        :class="{ hoverEffect: imageHoverStates[index] }"
        @mouseover="handleImageHover(index)"
        @mouseout="handleImageHover(index)"
        class="w-full h-full object-cover transition-all duration-300"
      />
    </div>
  </div>
</template>

<style>
.hoverEffect {
  transform: scale(1.1);
}
</style>
