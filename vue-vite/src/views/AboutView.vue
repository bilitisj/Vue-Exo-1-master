<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p><Compteur :start="start"></Compteur></p>
  </div>
</template>

<script setup>
import Compteur from '@/components/Compteur2.vue'
let start = 0
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
