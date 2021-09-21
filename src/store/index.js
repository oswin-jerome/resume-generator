import { createStore } from 'vuex'

export default createStore({
  state: {
    resume:{
      name: 'Oswin Jerome',
      role:"Software Developer",
      phone:"+91 8344441492",
      email:"oswinjeromej@gmail.com",
      website:"oswinjerome.in",
      educations:[{name:"",from:''}],
      experiences:[{from:''}],
      languages:[{name:'English',prof:"read, write, speak,"}],
      areasofintrest:[],
      skillset:[]
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
