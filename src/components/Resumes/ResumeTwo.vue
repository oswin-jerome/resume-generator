<template>
  <div
        id="element-to-print"
        class="bg-white p-0 shadow-lg rounded flex-1 container m-auto"
      >
     <main id="wrapper" class="flex flex-col sm:flex-row-reverse shadow-2xl">
        <div id="sidebar" class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white">
          <div class="px-2 mb-12">
            <img :src="resume.image" alt="Profile Picture" class="rounded-full w-48 mx-auto mb-2">
            <h1 class="text-center text-3xl font-semibold mb-2">{{resume.name}}</h1>
            <h2 class="text-center text-xl font-light">{{resume.role}}</h2>
          </div>

          <div class="font-light text-lg px-2 mb-12">
            <h2 class="text-xl font-semibold mb-4">Contact</h2>
            <div class="flex items-center my-3">
              <i class='bx bx-mail-send mr-1 mt-1'></i>
              <a href="mailto:">{{resume.email}}</a>
            </div>
            <div class="flex items-center my-3">
              <i class='bx bxs-phone-call mr-1 mt-1' ></i>
              <a href="tel:">{{resume.phone}}</a>
            </div>
            <div class="flex items-center my-3">
              <i class='bx bx-network-chart mr-1 mt-1' ></i>
              <a href="tel:">{{resume.website}}</a>
            </div>
            <!-- <div class="flex items-center my-3">
              <img src="/dev-resume-template/assets/home-outline.8a86be06.svg" class="inline w-6 pb-1 mr-4" alt="House icon">
              <div>
                <p>Dev Street 13</p>
                <p>Dev Town</p>
              </div>
            </div> -->
          </div>

          <div class="font-light text-lg px-2 mb-12">
            <h2 class="text-xl font-semibold mb-4">Personal</h2>
            <div class="flex items-center my-3">
              <i class='mr-1 mt-2 bx bxs-calendar'></i>
              <span>{{resume.dob}}</span>
            </div>
            <div class="flex items-center my-3">
              <i class='mr-1 mt-1 bx bx-map-alt'></i>
               <pre class="inline ">{{resume.address}}</pre>
            </div>
          </div>

          <!-- <div class="font-light text-lg px-2 mb-12">
            <h2 class="text-xl font-semibold mb-4">On the Web</h2>
            <div class="flex items-center my-3">
              <img src="/dev-resume-template/assets/logo-github.e5a3483e.svg" class="inline w-6 mr-4" alt="GitHub Logo">
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div class="flex items-center my-3">
              <img src="/dev-resume-template/assets/logo-stackoverflow.e47dbd23.svg" class="inline w-6 mr-4" alt="Stack Overflow Logo">
              <a href="#" target="_blank" rel="noopener noreferrer">StackOverflow</a>
            </div>
            <div class="flex items-center my-3">
              <img src="/dev-resume-template/assets/logo-linkedin.cb874d74.svg" class="inline w-6 mr-4" alt="LinkedIn Logo">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div class="flex items-center my-3">
              <img src="/dev-resume-template/assets/logo-twitter.4e9e4703.svg" class="inline w-6 mr-4" alt="Twitter Logo">
              <a href="#" target="_blank" rel="noopener noreferrer">@twitter_handle</a>
            </div>
            <div class="flex items-center my-3">
              <img src="/dev-resume-template/assets/logo-codepen.eaba39a9.svg" class="inline w-6 mr-4" alt="CodePen Logo">
              <a href="#" target="_blank" rel="noopener noreferrer">CodePen</a>
            </div>
            <div class="flex items-center my-3">
              <img src="/dev-resume-template/assets/globe-outline.4c58bb35.svg" class="inline w-6 mr-4" alt="Globe icon">
              <a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </div>
          </div> -->

          <div class="font-light text-lg px-2 mb-12">
         
            <h2 class="text-xl font-semibold mb-4" v-if="resume.skillset.length>0">Skills &amp; Tools</h2>
            <ul class="list-none">
              <li v-for="(lang, index) in resume.skillset" :key="index">
                <label for="js-skill">{{lang.name}}</label>
              </li>
            </ul>
          </div>

          <div class="font-light text-lg px-2 mb-12" v-if="resume.educations.length>0">
            <h2 class="text-xl font-semibold mb-4">Educations</h2>
            <div v-for="(edu,index) in resume.educations" :key="index">
                <h3 class="font-semibold">{{edu.degree}}</h3>
                <p>{{edu.from}} - {{edu.to}} {{edu.name}}</p>
            </div>
            </div>

          <div class="font-light text-lg px-2 mb-12">
            <h2 class="text-xl font-semibold mb-4">Languages</h2>
            <div v-for="(lang, index) in resume.languages" :key="index">
                <h3 class="font-semibold">{{lang.name}}</h3>
                <p>{{lang.prof}}</p>
            </div>
          </div>
        </div>
        <div class="content w-full p-12">
          <div id="profile" class="prose">
            <h2 class="section-headline">Profile</h2>
            <p class="text-sm">
              {{resume.summary}}
            </p>
          </div>
          <hr class="mt-3 mb-8">
          <div id="experience" class="prose" v-if="resume.experiences.length>0">
            <h2 class="section-headline">Experience</h2>
            <div v-for="(exp,index) in resume.experiences" :key="index" >
              <h3 class="font-semibold text-xl mb-2">{{exp.name}}</h3>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  {{exp.from}} - {{exp.to}}:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  {{exp.degree}}
                </div>
              </section>
              <!-- <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Task:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </section>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </section>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tools:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  <span class="rounded-xl bg-gray-300 px-3">Vue</span>
                  <span class="rounded-xl bg-gray-300 px-3">Vuex</span>
                  <span class="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                  <span class="rounded-xl bg-gray-300 px-3">Docker</span>
                  <span class="rounded-xl bg-gray-300 px-3">Git</span>
                  <span class="rounded-xl bg-gray-300 px-3">Bitbucket</span>
                  <span class="rounded-xl bg-gray-300 px-3">Jira</span>
                </div>
              </section> -->
            </div>
          </div>
          <section v-for="(section,ind) in resume.addonmains" :key="ind">
             <hr class="mt-3 mb-8">
          <div id="experience" class="prose">
            <h2 class="section-headline">{{section.title}}</h2>
            <div v-for="(exp,index) in section.items" :key="index" >
              <h3 class="font-semibold text-xl mb-2">{{exp.heading}}</h3>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  {{exp.trailing}}
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  {{exp.subheading}}
                </div>
              </section>
              <!-- <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Task:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </section>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </section>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tools:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  <span class="rounded-xl bg-gray-300 px-3">Vue</span>
                  <span class="rounded-xl bg-gray-300 px-3">Vuex</span>
                  <span class="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                  <span class="rounded-xl bg-gray-300 px-3">Docker</span>
                  <span class="rounded-xl bg-gray-300 px-3">Git</span>
                  <span class="rounded-xl bg-gray-300 px-3">Bitbucket</span>
                  <span class="rounded-xl bg-gray-300 px-3">Jira</span>
                </div>
              </section> -->
            </div>
          </div>
          </section>

          <hr class="mt-3 mb-8">
          <div id="projects" class="prose">
            <h2 class="section-headline">Decleration</h2>
            <div class="mb-16 text-sm">
              <h4 id="expand-knowledge-headline text-sm">
                {{resume.decleration}}
              </h4>
            </div>
          </div>
        </div>
      </main>
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

<style scoped>
.section-headline{
    color:#10b981!important;
    --tw-border-opacity: 1;
    border-color: rgba(16,185,129,var(--tw-border-opacity));
    border-left-width: 8px;
    font-weight: 700;
    letter-spacing: .1em;
    padding-left: .5rem;
    text-transform: uppercase;
    @apply mb-4 text-xl;
}
</style>