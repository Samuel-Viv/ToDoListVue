import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from "@/components/ToDoList.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'toDoList',
      component: ToDoList
    },
  ]
})

export default router
