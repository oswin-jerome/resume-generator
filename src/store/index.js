import { createStore } from 'vuex'

export default createStore({
  state: {
    resume:{
      name: 'Oswin Jerome',
      role:"Software Developer",
      educations:[{name:"",from:''}],
      experiences:[{from:''}]
    }
  },
  mutations: {
    updateResume(state,data){
      state.resume[data.key] = data.val;
    }
  },
  actions: {
  },
  modules: {
  }
})
