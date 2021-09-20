<template>
  <div>
    <header class="bg-gradient-to-r from-blue-800 to-blue-700 h-36">
      <h1>Resume Generator</h1>
    </header>
    <section
      class="
        container
        m-auto
        relative
        -top-14
        p-5
        gap-5
        flex flex-col
        lg:flex-row
      "
    >
      <div class="bg-white p-4 shadow-lg rounded">
        <h3 class="font-bold">Sections</h3>
        <p class="text-sm text-gray-500">
          Choose a section to start adding data
        </p>
        <div class="grid grid-cols-4 lg:grid-cols-2 gap-3 mt-5">
          <!-- Personal -->
          <a
            @click="generateReport"
            href="#"
            class="
              bg-red-
              p-3
              rounded-md
              shadow
              flex flex-col
              items-center
              text-gray-500
            "
          >
            <i class="bx bxs-user text-2xl"></i>
            <p class="text-sm">Personal</p>
          </a>
          <!-- Education -->
          <a
            href="#"
            class="
              bg-red-
              p-3
              rounded-md
              shadow
              flex flex-col
              items-center
              text-gray-500
            "
          >
            <i class="bx bxs-book-alt text-2xl"></i>
            <p class="text-sm">Education</p>
          </a>
          <!-- Experience -->
          <a
            href="#"
            class="
              bg-red-
              p-3
              rounded-md
              shadow
              flex flex-col
              items-center
              text-gray-500
            "
          >
            <i class="bx bxs-briefcase text-2xl"></i>
            <p class="text-sm">Experience</p>
          </a>
          <!-- Experience -->
          <a
            href="#"
            class="
              bg-red-
              p-3
              rounded-md
              shadow
              flex flex-col
              items-center
              text-gray-500
            "
          >
            <i class="bx bx-globe text-2xl"></i>
            <p class="text-sm">Languages</p>
          </a>
        </div>
      </div>
      <div class="bg-white p-3 shadow-lg rounded flex-1">
        <div id="persoanl">
          <h1 class="font-bold">Personal Details</h1>
          <p class="text-sm text-gray-500">
            Enter your personal details
          </p>
          <div class="mt-5">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <label for="" class="block">Name</label>
                <input v-model="resume.name" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Image</label>
                <input @change="getImage" type="file" class="rounded p-1.5 border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Role</label>
                <input v-model="resume.role" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <resume-one :resume="resume"/>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import ResumeOne from '../components/ResumeOne.vue';
export default {
  methods: {
    getImage(e){
        this.resume.image =URL.createObjectURL(  e.target.files[0]);
        console.log(this.resume)
    },
    generateReport() {
      var element = document.getElementById("element-to-print");
      var opt = {
        dpi: 600,
        letterRendering: true,
        useCORS: true,

        margin: 0,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 15 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // New Promise-based usage:
      html2pdf().from(element).set(opt).save();
    },
  },
  data:function(){
    return {
      resume:{
        name:"",
        image:"",
        website:"",
        role:""
      }
    }
  },
  components: {ResumeOne},
};
</script>

<style>
</style>