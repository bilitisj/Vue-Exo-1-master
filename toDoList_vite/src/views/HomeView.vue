
<script setup>
import AddTask from '@/components/AddTask.vue'
import DeleteTask from '@/components/DeleteTask.vue'
import TasksList from '@/components/TasksList.vue'
import {ref} from 'vue'
const tasks = ref([
  {
    label: "Tâche 1",
    done: false
  },
  {
    label: "Tâche 2",
    done: true
  }
])
const addTask = (newTask) => {
  tasks.value.push({... newTask})
}
const valideTask = (idtask) => {
    tasks.value[idtask] = !tasks.value[idtask]
}
const delTask = (idtask) => {
    tasks.value.splice(idtask,1)
}
</script>

<template>
  <main class="main">
    <h1>Home</h1>
    <AddTask @plus-task="addTask"></AddTask>
    <TasksList :tasks="tasks" @valid-task="valideTask" @del-task="delTask"></TasksList>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .main {
    /*min-height: 100vh;*/
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
