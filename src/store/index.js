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
      summary:`A motivated individual with in-depth knowledge of languages and development tools, seeking a
      position in a growth-oriented company where I can use my skills to the advantage of the company
      while having the scope to develop my own skills.`,
      decleration:`All the information mentioned in the resume are correct to the best of my knowledge. `,
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
