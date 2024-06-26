import { ref } from 'vue';
import { createStore } from "vuex";
import axios from 'axios'

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
    },
    setTask(state, apiData){
      state.tasks = apiData;
    }
  },
  actions: {
    addTask(context, payload){
      context.commit('addTask',payload)
    },
    fetchText(context){
      axios
        .get('https://todo-list-1f086-default-rtdb.firebaseio.com/task-list.json')
        .then((response) => {
          const objectArray = ref([]);
          for (const key in response.data) {
            const obj = response.data[key];
            objectArray.value.push(obj);
          }
          context.commit('setTask', objectArray.value);
        })
    }
  },
});
