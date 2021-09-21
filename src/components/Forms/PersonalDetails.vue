
<template>
  <div id="persoanl">
          <h1 class="font-bold">Personal Details</h1>
          <p class="text-sm text-gray-500">
           Personal details on your resume serves a great purpose and are used for identification purposes and getting in touch with you.
          </p>
          <div class="mt-5">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <label for="" class="block">Name</label>
                <input v-model="name" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Image</label>
                <input @change="getImage" type="file" class="rounded p-1.5 border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Role</label>
                <input v-model="role" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Date of birth</label>
                <input v-model="dob" type="date" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Father's Name</label>
                <input v-model="fname" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div>
                <label for="" class="block">Aadhar number</label>
                <input v-model="aadhar" type="text" class="rounded border-gray-400 w-full bg-gray-100">
              </div>
              <div class="row-span-2 col-start-1">
                <label for="" class="block">Address</label>
                <!-- <input v-model="dob" type="date" class="rounded border-gray-400 w-full bg-gray-100"> -->
                <textarea rows="5" v-model="address" class="rounded border-gray-400 w-full bg-gray-100" ></textarea>
              </div>
              
            </div>
          </div>
        </div>
</template>

<script>
export default {

 computed:{
    name: {
      get () {
        return this.$store.state.resume.name
      },
      set (value) {
        this.$store.commit('updateResume', {key:"name",val:value})
      }
    },
    aadhar: {
      get () {
        return this.$store.state.resume.aadhar
      },
      set (value) {
        this.$store.commit('updateResume', {key:"aadhar",val:value})
      }
    },
    fname: {
      get () {
        return this.$store.state.resume.fname
      },
      set (value) {
        this.$store.commit('updateResume', {key:"fname",val:value})
      }
    }
    ,dob: {
      get () {
        return this.$store.state.resume.dob
      },
      set (value) {
        this.$store.commit('updateResume', {key:"dob",val:value})
      }
    },
    role: {
      get () {
        return this.$store.state.resume.role
      },
      set (value) {
        this.$store.commit('updateResume', {key:"role",val:value})
      }
    },
    address: {
      get () {
        return this.$store.state.resume.address
      },
      set (value) {
        this.$store.commit('updateResume', {key:"address",val:value})
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