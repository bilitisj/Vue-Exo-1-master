
<script setup>
import AddTask from '@/components/AddTask.vue'
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
  tasks.value.push(newTask)
}
</script>

<template>
  <main class="main">
    <AddTask @plus-task="addTask"></AddTask>
    <TasksList :tasks="tasks"></TasksList>
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
