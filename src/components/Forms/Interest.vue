
<template>
  <div id="persoanl">
          <div class="flex justify-between">
              <div>
                    <h1 class="font-bold">Area of Interest</h1>
                    <p class="text-sm text-gray-500">
                        Having an area of interest not only shows that you have a life with different facets but also proves that you are a time manager. The kind of hobbies and interests that you put in your resume can give an employer in-depth knowledge about you as a manager, whether you are decisive or not?
                    </p>
              </div>
              <button @click="addLang" class="bg-blue-600 px-3 py-1 rounded text-white mt-2">Add</button>
          </div>
          <div class="mt-5 shadow-lg p-3 rounded-lg" v-for="(edu,index) in areasofintrest" :key="edu">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <label for="" class="block">Intrest</label>
                <input v-model="areasofintrest[index].name" type="text" class="rounded border-gray-400 w-full bg-gray-100">
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
    areasofintrest: {
      get () {
        return this.$store.state.resume.areasofintrest
      },
      set (value) {
        this.$store.commit('updateResume', {key:"areasofintrest",val:value})
      }
    }
  },
    methods:{
        addLang(){
            let res = this.$store.state.resume.areasofintrest;
            res.push({from:''});
            this.$store.commit('updateResume', {key:"areasofintrest",val:res})
        },
        removeLanguage(i){
            let res = this.$store.state.resume.areasofintrest;
            res.splice(i,1)
            this.$store.commit('updateResume', {key:"areasofintrest",val:res})
        }
    }
}
</script>

<style>

</style>