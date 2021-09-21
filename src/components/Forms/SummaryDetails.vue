
<template>
  <div id="persoanl">
          <h1 class="font-bold">Summary</h1>
          <p class="text-sm text-gray-500">
            If you’re the most qualified person in the world, it’s not going to matter much if the hiring manager can’t contact you!
          </p>
          <div class="mt-5">
            <div class="grid md:grid-cols-1 gap-4">
              <div>
                <label for="" class="block">Summary</label>
                <textarea rows="5" class="rounded border-gray-400 w-full bg-gray-100" v-model="summary"></textarea>
              </div>
               <div>
                <label for="" class="block">Decleration</label>
                <textarea rows="5" class="rounded border-gray-400 w-full bg-gray-100" v-model="decleration"></textarea>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {

 computed:{
    decleration: {
      get () {
        return this.$store.state.resume.decleration
      },
      set (value) {
        this.$store.commit('updateResume', {key:"decleration",val:value})
      }
    }
    ,summary: {
      get () {
        return this.$store.state.resume.summary
      },
      set (value) {
        this.$store.commit('updateResume', {key:"summary",val:value})
      }
    },
  },
    methods:{
        getImage(e){
      console.log(this.$store)
        // this.resume.image =URL.createObjectURL(  e.target.files[0]);
        this.$store.commit('updateResume', {key:"image",val:URL.createObjectURL(  e.target.files[0])})

        // console.log(this.resume)
    },
    }
}
</script>

<style>

</style>