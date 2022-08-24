<template>
    <div>
        <h2>Liste des tâches</h2>
        <ul v-if="tasks.length > 0">
            <li v-for="(task, key) in tasks" :key="key">{{ task.label}}</li>
        </ul>
        <p v-else>Pas encore de tâches</p>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
const props = defineProps({
    tasks: {
        type: Array,
        default: []
    }
})
</script>

<style>

</style>