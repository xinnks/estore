<template>
  <div class="h-screen w-full bg-gray-50 flex items-center">
    <div
      class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700"
    >
      <div class="w-full lg:w-1/2 mx-24 text-center md:text-left">
        <p class="text-3xl md:text-4xl font-light leading-normal mb-8">
          Sorry we couldn't find the page you're looking for
        </p>

        <router-link
          to="/"
          class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-cyan-600 active:bg-cyan-700 hover:bg-cyan-700 hover:text-white"
          >back to homepage</router-link
        >
      </div>
      <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
        <img src="../assets/404.svg" class="" alt="Page not found" />
      </div>
    </div>
  </div>
</template>
