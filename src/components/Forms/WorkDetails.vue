
<template>
  <div id="persoanl">
          <div class="flex justify-between">
              <div>
                    <h1 class="font-bold">Experience Details</h1>
                    <p class="text-sm text-gray-500">
                        For many employers, your work experience section is one of the most important parts of your resume. This section gives them a quick idea of your employment history. It also indicates that you possess the skills and experience necessary to succeed in the role you are applying for.
                    </p>
              </div>
              <button @click="addWork" class="bg-blue-600 px-3 py-1 rounded text-white mt-2">Add</button>
          </div>
          <div class="mt-5 shadow-lg p-3 rounded-lg" v-for="(edu,index) in experiences" :key="edu">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <label for="" class="block">Company / Office</label>
                <input v-model="experiences[index].name" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Role / Responsibility</label>
                <input v-model="experiences[index].degree" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">From</label>
                <input v-model="experiences[index].from" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">To</label>
                <input v-model="experiences[index].to" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
            </div>
            <button @click="removeWork(index)" class="bg-red-600 px-3 py-1 rounded text-white mt-2">Delete</button>
          </div>
        </div>
</template>

<script>
export default {
    data:function(){
        return {
            // educations:[{name:"Hello"}]
        }
    },
 computed:{
    experiences: {
      get () {
        return this.$store.state.resume.experiences
      },
      set (value) {
        this.$store.commit('updateResume', {key:"experiences",val:value})
      }
    }
  },
    methods:{
        addWork(){
            let res = this.$store.state.resume.experiences;
            res.push({from:''});
            this.$store.commit('updateResume', {key:"experiences",val:res})
        },
        removeWork(i){
            let res = this.$store.state.resume.experiences;
            res.splice(i,1)
            this.$store.commit('updateResume', {key:"experiences",val:res})
        }
    }
}
</script>

<style>

</style>