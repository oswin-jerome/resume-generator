<template>
  <div
        id="element-to-print"
        class="bg-white p-0 shadow-lg rounded flex-1 container m-auto"
      >
      <div class="flex overflow-scroll lg:overflow-auto transform">
          <!-- Left -->
        <div class="bg-blue-900 px-8 pt-3 pb-3 h-full  ">
          <img class="rounded-full w-56 h-56 object-cover" :src="resume.image" alt="" />
          <h3 class="mt-3 text-2xl font-bold text-white">Contact</h3>
          <p class="text-white opacity-80 text-sm "><span><i class='bx bx-mail-send mr-1 mt-1'></i></span> oswinjeromej@gmail.com</p>
          <p class="text-white opacity-80 text-sm"> <span><i class='bx bxs-phone-call mr-1 mt-1' ></i></span> +91 8344441492</p>
          <a href="" v-show="resume.website"><p class="text-white opacity-80 text-sm"> <span><i class='bx bx-network-chart mr-1 mt-1' ></i></span>oswin.in</p></a>
        </div>
        <!-- Right -->
        <div class="flex-1">
          <div
            class="bg-blue-100 p-6 flex flex-col justify-center items-center"
          >
            <h1 class="font-bold text-4xl text-gray-700 mb-2">{{resume.name}}</h1>
            <div class="h-0.5 bg-red-500 w-32 mt-2 block"></div>
            <h3 class="mt-0">{{resume.role}}</h3>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:['resume']
}
</script>

<style>

</style>