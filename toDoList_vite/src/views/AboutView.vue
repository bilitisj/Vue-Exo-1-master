<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AddTask></AddTask>
    <TasksList></TasksList>
  </div>
</template>

<script setup>


</script>

<style>
@media (min-width: 1024px) {
  .about {
    /*min-height: 100vh;*/
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
