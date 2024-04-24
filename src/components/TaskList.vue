<script setup>
import { useStore } from "vuex";
import { computed, onMounted , ref} from "vue";
import taskItem from "@/components/taskItem.vue";

const store = useStore();

const loading = ref(true);

onMounted(() => {
    store.dispatch('fetchText')
    setTimeout(() => {
      loading.value = false;
    }, 700);
});

const tasks = computed(() => store.getters.mytasks);


</script>

<template>
  <h1 id="title">list of tasks</h1>
  <div v-if="loading" class="spinnerContainer">
    <div  class="spinner"></div>
  </div>
  <div v-else class="lists">
    <div class="container">
      <ul>
        <task-item
          v-for="task in tasks"
          :key="task.id"
          :id="task.id"
          :title="task.title"
          :tag="task.tage"
        ></task-item>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#title {
  text-align: center;
  margin-top: 20px;
  color: aliceblue;
}
.lists {
  display: flex;
  justify-content: center;
}
.container {
  margin-top: 20px;
  width: 60%;
  
  height: max-content;
}
.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.spinner::before,
.spinner::after {
  content: "";
  position: absolute;
  border-radius: inherit;
}

.spinner::before {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #51E5FF 0%, #172A3A 50%);
  animation: spin .5s infinite linear;
}

.spinner::after {
  width: 85%;
  height: 85%;
  background-color: #172A3A;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.spinnerContainer{
  display: flex;
  justify-content: center;
  margin-top: 10%;
}
</style>
