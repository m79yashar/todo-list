<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['tid']);
const task = store.getters.mytasks.find(tsk => tsk.id === props.tid);

console.log(task);
</script>

<template>

    <div class="cardContainer">
        <div class="card">
            <h1 class="text">{{ task.title }}</h1>
            <p class="text">{{ task.description }}</p>
            <span class="tage">{{ task.tage }}</span>
        </div>
    </div>
    
</template>

<style scoped>

.cardContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.card {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: rgba(65, 65, 65, 0.308);
  cursor: pointer;
  box-shadow: 0 10px 50px #73e6facf, -10px -10px 50px #73e6facf;
  color: white;
}
.text{
    margin-bottom: 10px;
}
.tage{
  background-color: #67e8ff;
  color: #172A3A;
  font-weight: bold;
  border-radius: 3px;
  margin-top: 5px;
  padding: 2px;
}
</style>