
<template>
  <div id="persoanl">
          <div class="flex justify-between">
              <div>
                    <h1 class="font-bold">Languages</h1>
                    <p class="text-sm text-gray-500">
                        If you speak one additional language or your languages are not important for the position, adding them to your skills section can help you save space on your resume 😅
                    </p>
              </div>
              <button @click="addLang" class="bg-blue-600 px-3 py-1 rounded text-white mt-2">Add</button>
          </div>
          <div class="mt-5 shadow-lg p-3 rounded-lg" v-for="(edu,index) in languages" :key="edu">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <label for="" class="block">Language</label>
                <input v-model="languages[index].name" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Profiency</label>
                <input v-model="languages[index].prof" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
            </div>
            <button @click="removeLanguage(index)" class="bg-red-600 px-3 py-1 rounded text-white mt-2">Delete</button>
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
    languages: {
      get () {
        return this.$store.state.resume.languages
      },
      set (value) {
        this.$store.commit('updateResume', {key:"languages",val:value})
      }
    }
  },
    methods:{
        addLang(){
            let res = this.$store.state.resume.languages;
            res.push({from:''});
            this.$store.commit('updateResume', {key:"languages",val:res})
        },
        removeLanguage(i){
            let res = this.$store.state.resume.languages;
            res.splice(i,1)
            this.$store.commit('updateResume', {key:"languages",val:res})
        }
    }
}
</script>

<style>

</style>