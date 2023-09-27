<script setup>
import router from "@/router";
import LeftBackIcon from "@/assets/icons/LeftBackIcon.vue";
</script>

<template>
  <div class="md:mx-auto px-2 py-10 w-full max-w-5xl">
    <button @click="router.back()">
      <LeftBackIcon
        class="w-7 h-7 text-teal-600 hover:text-teal-500 cursor-pointer"
      />
    </button>
    <header class="my-4 px-2 lg:mb-6 not-format">
      <div class="inline-flex items-center mr-3 text-sm text-gray-900">
        <div>
          <a href="#" rel="author" class="text-xl font-bold text-gray-900"
            >Premier League</a
          >
          <p class="text-base text-gray-500">10/09/2023</p>
        </div>
      </div>
      <h1 class="my-4 text-3xl font-bold">
        Best practices for successful prototypes
      </h1>
    </header>
    <img
      class="w-full h-[572px]]"
      src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
      alt=""
    />
    <p class="text-lg indent-8 leading-relaxed text-justify px-2 py-6">
      Flowbite is an open-source library of UI components built with the
      utility-first classes from Tailwind CSS. It also includes interactive
      elements such as dropdowns, modals, datepickers. Before going digital, you
      might benefit from scribbling down some ideas in a sketchbook. This way,
      you can think things through before committing to an actual design
      project. First of all you need to understand how Flowbite works. This
      library is not another framework. Rather, it is a set of components based
      on Tailwind CSS that you can just copy-paste from the documentation.It
      also includes a JavaScript file that enables interactive components, such
      as modals, dropdowns, and datepickers which you can optionally include
      into your project via CDN or NPM.
    </p>
  </div>
</template>

<style scoped>
</style>