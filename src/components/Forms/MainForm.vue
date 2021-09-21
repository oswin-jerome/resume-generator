
<template>
  <div id="persoanl">
          <div class="flex justify-between">
              <div>
                    <h1 class="font-bold">Additional sections</h1>
                    <p class="text-sm text-gray-500">
                        Add sections to your need
                    </p>
              </div>
              <button @click="addLang" class="bg-blue-600 px-3 py-1 rounded text-white mt-2">Add</button>
          </div>
          <div class="mt-5 shadow-lg p-3 rounded-lg" v-for="(edu,index) in addonmains" :key="edu">
            <div class="grid md:grid-cols-1 gap-4">
              <div>
                <label for="" class="block">Title</label>
                <input v-model="addonmains[index].title" type="text" class="rounded border-gray-400 w-full bg-gray-100">
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
    addonmains: {
      get () {
        return this.$store.state.resume.addonmains
      },
      set (value) {
        this.$store.commit('updateResume', {key:"addonmains",val:value})
      }
    }
  },
    methods:{
        addLang(){
            let res = this.$store.state.resume.addonmains;
            res.push({from:''});
            this.$store.commit('updateResume', {key:"addonmains",val:res})
        },
        removeLanguage(i){
            let res = this.$store.state.resume.addonmains;
            res.splice(i,1)
            this.$store.commit('updateResume', {key:"addonmains",val:res})
        }
    }
}
</script>

<style>

</style>