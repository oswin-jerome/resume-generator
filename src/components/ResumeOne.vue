<template>
  <div
        id="element-to-print"
        class="bg-white p-0 shadow-lg rounded flex-1 container m-auto"
      >
      <div class="flex overflow-scroll lg:overflow-auto transform">
          <!-- Left -->
        <div class="bg-blue-900 px-8 pt-3 pb-3 h-screen ">
          <img class="rounded-full mt-6 w-56 h-56 object-cover" :src="resume.image" alt="" />
          <h3 class="mt-5 text-2xl mb-2 font-bold text-white">Personal Details</h3>
          <p class="text-white opacity-80 text-sm "><span><i class='mr-1 mt-1 bx bx-map-alt'></i></span> <pre class="inline ">{{resume.address}}</pre> </p>
          <p class="text-white opacity-80 text-sm "><span><i class='mr-1 mt-2 bx bxs-calendar'></i></span> {{resume.dob}}</p>
         
          <h3 class="mt-5 text-2xl mb-2 font-bold text-white">Contact</h3>
          <p class="text-white opacity-80 text-sm "><span><i class='bx bx-mail-send mr-1 mt-1'></i></span> {{resume.email}}</p>
          <p class="text-white opacity-80 text-sm"> <span><i class='bx bxs-phone-call mr-1 mt-1' ></i></span>{{resume.phone}}</p>
          <a target="_blank" :href="'https://'+resume.website" v-show="resume.website"><p class="text-white opacity-80 text-sm"> <span><i class='bx bx-network-chart mr-1 mt-1' ></i></span>{{resume.website}}</p></a>

          <!-- Languages -->
          <h3 class="mt-5 text-2xl mb-2 font-bold text-white" v-if="resume.languages.length>0">Languages</h3>
          <p v-for="(lang, index) in resume.languages" :key="index" class="text-white opacity-80 text-sm ">{{lang.name}} <span v-if="lang.prof" class="text-xs italic">({{lang.prof}})</span></p>
           <!-- Languages -->
          <h3 class="mt-5 text-2xl mb-2 font-bold text-white" v-if="resume.areasofintrest.length>0">Area of interest</h3>
          <p v-for="(lang, index) in resume.areasofintrest" :key="index" class="text-white opacity-80 text-sm ">{{lang.name}} <span v-if="lang.prof" class="text-xs italic">({{lang.prof}})</span></p>
           <!-- Languages -->
          <h3 class="mt-5 text-2xl mb-2 font-bold text-white" v-if="resume.skillset.length>0">Skillset</h3>
          <p v-for="(lang, index) in resume.skillset" :key="index" class="text-white opacity-80 text-sm ">{{lang.name}} <span v-if="lang.prof" class="text-xs italic">({{lang.prof}})</span></p>
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
          <div class="p-3" v-if="resume.summary.length>0">
              <h1 class="text-2xl font-bold text-blue-800">Summary</h1>
              <p>{{resume.summary}}</p>
          </div>
          <div class="p-3" v-if="resume.educations.length>0">
              <h1 class="text-2xl font-bold text-blue-800">Educations</h1>
              <ul class=" list-inside mt-2 flex flex-col gap-3">
                  <li class="" v-for="(edu,index) in resume.educations" :key="index">
                      <h1 class="font-bold"> {{edu.name}} <span class="font-normal italic text-sm" v-if="edu.from!=''">- {{edu.from}} to {{edu.to}}</span> </h1>
                    <p class="text-base text-gray-500">{{edu.degree}}</p>
                  </li>
              </ul>
          </div>
          <div class="p-3" v-if="resume.experiences.length>0">
              <h1 class="text-2xl font-bold text-blue-800">Experiences</h1>
              <ul class=" list-inside mt-2 flex flex-col gap-3">
                  <li class="" v-for="(exp,index) in resume.experiences" :key="index">
                      <h1 class="font-bold">{{exp.name}} <span class="font-normal italic text-sm" v-if="exp.from!=''">- {{exp.from}} to {{exp.to}}</span> </h1>
                    <p class="text-base text-gray-500">{{exp.degree}}</p>
                  </li>
              </ul>
          </div>
          <div class="p-3" v-for="(section,ind) in resume.addonmains" :key="ind">
              <h1 class="text-2xl font-bold text-blue-800">{{section.title}}</h1>
              <ul class=" list-inside mt-2 flex flex-col gap-3">
                  <li class="" v-for="(exp,index) in section.items" :key="index">
                      <h1 class="font-bold">{{exp.heading}} <span class="font-normal italic text-sm" v-if="exp.trailing">- {{exp.trailing}}</span> </h1>
                    <p class="text-base text-gray-500">{{exp.subheading}}</p>
                  </li>
              </ul>
          </div>
          <div class="p-3" v-if="resume.decleration.length>0">
              <h1 class="text-2xl font-bold text-blue-800">Decleration</h1>
              <p>{{resume.decleration}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data:function(){
      return {
        resume :this.$store.state.resume
      }
    }
}
</script>

<style>

</style>