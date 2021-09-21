import { createStore } from 'vuex'

export default createStore({
  state: {
    resume:{
      name: 'Oswin Jerome',
      fname: '',
      role:"Software Developer",
      address:"sds",
      phone:"+91 8344441492",
      email:"oswinjeromej@gmail.com",
      website:"oswinjerome.in",
      educations:[{name:"",from:''}],
      experiences:[{from:''}],
      languages:[{name:'English',prof:"read, write, speak,"}],
      areasofintrest:[],
      skillset:[],
      addonmains:[]
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
