<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import taskItem from "@/components/taskItem.vue";

const store = useStore();

const tasks = computed(() => store.getters.mytasks);
</script>

<template>
  <h1 id="title">list of tasks</h1>
  <div class="lists">
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
</style>
