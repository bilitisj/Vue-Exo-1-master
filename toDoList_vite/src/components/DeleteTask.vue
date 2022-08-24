<template>
    <button @click="deleteTask">X</button>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(['idtask'])
const emit = defineEmits(['delete-task'])
const delTask = () => {
    if(confirm(`Supprimer la tâche ?`))
    emit('del-task', props.idtask)
}
</script>

<style>

</style>