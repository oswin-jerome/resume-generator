
<template>
  <div id="persoanl">
          <div class="flex justify-between">
              <div>
                    <h1 class="font-bold">Educational Details</h1>
                    <p class="text-sm text-gray-500">
                        A well-written education summary can show recruiters your relevant academic qualifications and set you apart from other candidates. Hiring managers look at your education summary to see if you have the right academic background for the job.
                    </p>
              </div>
              <button @click="addEdu" class="bg-blue-600 px-3 py-1 rounded text-white mt-2">Add</button>
          </div>
          <div class="mt-5 shadow-lg p-3 rounded-lg" v-for="(edu,index) in educations" :key="edu">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <label for="" class="block">School / College / Institute</label>
                <input v-model="educations[index].name" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Course / Degree / Program</label>
                <input v-model="educations[index].degree" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">From</label>
                <input v-model="educations[index].from" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">To</label>
                <input v-model="educations[index].to" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
            </div>
            <button @click="removeEdu(index)" class="bg-red-600 px-3 py-1 rounded text-white mt-2">Delete</button>
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
    educations: {
      get () {
        return this.$store.state.resume.educations
      },
      set (value) {
        this.$store.commit('updateResume', {key:"educations",val:value})
      }
    }
  },
    methods:{
        addEdu(){
            let res = this.$store.state.resume.educations;
            res.push({from:''});
            this.$store.commit('updateResume', {key:"educations",val:res})
        },
        removeEdu(i){
            let res = this.$store.state.resume.educations;
            res.splice(i,1)
            this.$store.commit('updateResume', {key:"educations",val:res})
        }
    }
}
</script>

<style>

</style>