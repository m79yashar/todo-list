import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '@/components/TaskList.vue';
import TaskDetail from '@/components/TaskDetail.vue';
import addTask from '@/components/addTask.vue';

const routes = [
  {path: '/',redirect: '/tasks'},
  {path: '/tasks', component: TaskList},
  {path: '/tasks/:tid', component: TaskDetail, props: true},
  {path: '/add-task', component: addTask,},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
