
<template>
  <div id="persoanl">
          <h1 class="font-bold">Contact Details</h1>
          <p class="text-sm text-gray-500">
            Enter your contact details
          </p>
          <div class="mt-5">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <label for="" class="block">Phone</label>
                <input v-model="phone" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Email</label>
                <input v-model="email" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Website</label>
                <input v-model="website" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {

 computed:{
    phone: {
      get () {
        return this.$store.state.resume.phone
      },
      set (value) {
        this.$store.commit('updateResume', {key:"phone",val:value})
      }
    }
    ,email: {
      get () {
        return this.$store.state.resume.email
      },
      set (value) {
        this.$store.commit('updateResume', {key:"email",val:value})
      }
    },
    website: {
      get () {
        return this.$store.state.resume.website
      },
      set (value) {
        this.$store.commit('updateResume', {key:"website",val:value})
      }
    }
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