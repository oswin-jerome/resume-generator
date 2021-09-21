
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
          <div class="mt-5 shadow-lg p-3 rounded-lg  bg-blue-100" v-for="(edu,index) in addonmains" :key="edu">
            <div class="grid md:grid-cols-1 gap-4">
              <div>
                <label for="" class="block">Section Title</label>
                <input v-model="addonmains[index].title" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div v-for="(itm) in edu.items" :key="itm" class="mt-1 shadow-sm p-1 rounded-lg grid md:grid-cols-3 gap-4">
                <div>
                    <label for="" class="block">Title</label>
                    <input v-model="itm.heading" type="text" class="rounded border-gray-400 w-full bg-gray-100">
                </div>
                <div>
                    <label for="" class="block">Sub Title</label>
                    <input v-model="itm.subheading" type="text" class="rounded border-gray-400 w-full bg-gray-100">
                </div>
                <div>
                    <label for="" class="block">trailing</label>
                    <input v-model="itm.trailing" type="text" class="rounded border-gray-400 w-full bg-gray-100">
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
                 <button class="bg-blue-600 px-3 py-1 rounded text-white mt-2" @click="edu.items.push({})">Add entry</button>

            <button @click="removeLanguage(index)" class="bg-red-600 px-3 py-1 rounded text-white mt-2">Delete</button>
        
            </div>
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
            res.push({title:'sds',items:[{
                heading:"sdsdsssss",
                trailing:"sdsd",
                subheading:"sd",
            }]});
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