<template>
  <div>
    <header
      class="
        bg-gradient-to-r from-blue-800 to-blue-700 h-36 flex justify-center flex-col
      "
    >
      <h1 class="text-center mt-0 text-white font-bold text-4xl font-mono">
        Resuminator
      </h1>
      <p class="text-center text-sm mb-5 text-white font-mono">
        Adichan paru appointment order....
      </p>
    </header>
    <section
      class=" container m-auto relative -top-14 p-5 gap-5 flex flex-col lg:flex-row "
    >
      <div class="bg-white p-4 shadow-lg rounded">
        <div class="flex flex-col justify-between items-center">
          <h3 class="font-bold">Sections</h3>
          <p class="text-sm text-gray-500">
            Choose a section to start adding data
          </p>
          <div
            class=" grid grid-cols-4 lg:grid-cols-2 gap-3 mt-5 text-gray-500 w-full "
          >
            <!-- Personal -->
            <a
              @click="form = 'personal'"
              href="#"
              class="bg-red- p-3 rounded-md shadow flex flex-col items-center"
              :class="form == 'personal' ? 'bg-blue-600 text-white' : ''"
            >
              <i class="bx bxs-user text-2xl"></i>
              <p class="text-sm">Personal</p>
            </a>
            <!-- Education -->
            <a
              @click="form = 'education'"
              :class="form == 'education' ? 'bg-blue-600 text-white' : ''"
              href="#"
              class="p-3 rounded-md shadow flex flex-col items-center"
            >
              <i class="bx bxs-book-alt text-2xl"></i>
              <p class="text-sm">Education</p>
            </a>
            <!-- Experience -->
            <a
              @click="form = 'experience'"
              :class="form == 'experience' ? 'bg-blue-600 text-white' : ''"
              href="#"
              class="bg-red- p-3 rounded-md shadow flex flex-col items-center"
            >
              <i class="bx bxs-briefcase text-2xl"></i>
              <p class="text-sm">Experience</p>
            </a>
            <!-- Contact -->
            <a
              @click="form = 'contact'"
              :class="form == 'contact' ? 'bg-blue-600 text-white' : ''"
              href="#"
              class="bg-red- p-3 rounded-md shadow flex flex-col items-center"
            >
              <i class="bx bxs-contact text-2xl"></i>
              <p class="text-sm">Contact</p>
            </a>
            <!-- Experience -->
            <a
             @click="form = 'language'" :class="form == 'language' ? 'bg-blue-600 text-white' : ''" href="#" class="bg-red- p-3 rounded-md shadow flex flex-col items-center" >
              <i class="bx bx-globe text-2xl"></i>
              <p class="text-sm">Languages</p>
            </a>

            <a
             @click="form = 'skill'" :class="form == 'skill' ? 'bg-blue-600 text-white' : ''" href="#" class="bg-red- p-3 rounded-md shadow flex flex-col items-center" >
              <i class="bx bx-globe text-2xl"></i>
              <p class="text-sm">Skillset</p>
            </a>
            <a
             @click="form = 'intrest'" :class="form == 'intrest' ? 'bg-blue-600 text-white' : ''" href="#" class="bg-red- p-3 rounded-md shadow flex flex-col items-center" >
              <i class="bx bx-globe text-2xl"></i>
              <p class="text-sm">Areas of intrest</p>
            </a>
          </div>
          <div>
            <button @click="generateReport" class=" bg-blue-600 hover:bg-blue-700 hover: ring-4 text-white px-3 py-2 rounded mt-5 shadow-lg " >
              Generate PDF
            </button>
          </div>
        </div>
      </div>
      <div class=" bg-white p-3 shadow-lg rounded flex-1 max-h-screen overflow-y-auto overflow-x-hidden " >
        <personal-details v-show="form == 'personal'" />
        <educational-details v-show="form == 'education'" />
        <work-details v-show="form == 'experience'" />
        <contact-details v-show="form == 'contact'" />
        <language-details v-show="form == 'language'" />
        <interest v-show="form == 'intrest'" />
        <skill-details v-show="form == 'skill'" />
      </div>
    </section>
    <resume-one :resume="resume" />
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import ResumeOne from "../components/ResumeOne.vue";
import PersonalDetails from "../components/Forms/PersonalDetails.vue";
import EducationalDetails from "../components/Forms/EducationalDetails.vue";
import WorkDetails from "../components/Forms/WorkDetails.vue";
import ContactDetails from "../components/Forms/ContactDetails.vue";
import LanguageDetails from '../components/Forms/LanguageDetails.vue';
import Interest from '../components/Forms/Interest.vue';
import SkillDetails from '../components/Forms/SkillDetails.vue';
// import {useStore} from "vuex";
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.resume.name;
      },
      set(value) {
        this.$store.commit("updateResume", { key: "name", val: value });
      },
    },
  },
  methods: {
    generateReport() {
      var element = document.getElementById("element-to-print");
      var opt = {
        dpi: 600,
        letterRendering: true,
        useCORS: true,

        margin: 0,
        filename: this.$store.state.resume.name + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 10 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // New Promise-based usage:
      html2pdf().from(element).set(opt).save();
    },
  },
  data: function () {
    return {
      form: "personal",
      resume: {
        name: "",
        image: "",
        website: "",
        role: "",
      },
    };
  },
  components: {
    ResumeOne,
    PersonalDetails,
    EducationalDetails,
    WorkDetails,
    ContactDetails,
    LanguageDetails,
    Interest,
    SkillDetails,
  },
};
</script>

<style></style>
