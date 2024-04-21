import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      tasks: [
        {
          id: "t1",
          title: "complet vue.js",
          description:
            "complet the learning of vue.js for become a front-end developer",
          tage: "work",
        },
        {
          id: "t2",
          title: "learn English",
          description:
            "Learning english for trip to italy and study",
          tage: "study",
        },
      ],
    };
  },
  getters: {
    mytasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload);
    }
  },
  actions: {
    addTask(context, payload){
      context.commit('addTask',payload)
    }
  },
});
