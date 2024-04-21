<script setup>
import { defineProps } from "vue";

const props = defineProps(["id", "title", "tag"]);
</script>

<template>
  <div class="cardContainer">
    <div class="card">
      <li>
        <h2>{{ props.title }}</h2>
        <span class="tage">{{ props.tag }}</span>
      </li>
      <button><router-link :to="'/tasks/' + props.id">Detailes</router-link></button>
    </div>
  </div>
</template>
<style scoped>
.cardContainer {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  margin: 20px 0 20px 0;
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  background-color: rgba(65, 65, 65, 0.308);
  cursor: pointer;
  box-shadow: 0 10px 50px #73e6facf, -10px -10px 50px #73e6facf;
}
li{
  list-style-type: none;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 220px;
}
.tage{
  background-color: #67e8ff;
  color: #172A3A;
  font-weight: bold;
  border-radius: 3px;
  margin-top: 5px;
  padding: 2px;
}
a{
  text-decoration: none;
  color: #172A3A;
  font-weight: bold;
  font-size: medium;
}
button{
  background-color: #67e8ff;
  height: 30px;
  width: 80px;
  border: none;
  border-radius: 5px;
  
}
</style>
