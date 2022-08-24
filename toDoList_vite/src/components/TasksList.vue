<template>
    <div>
        <h2>Liste des tâches</h2>
        <ul v-if="tasks.length > 0">
            <li v-for="(task, key) in tasks" :key="key" :data-id="key" :class="{done:task.done}">{{ task.label}} <ValideTask :idtask="key" @valid-task="validTask"></ValideTask> <DeleteTask :idtask="key" @delete-task="deleteTask"></DeleteTask> </li>
        </ul>
        <p v-else>Pas encore de tâches</p>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import ValideTask from './ValideTask.vue';
import DeleteTask from './DeleteTask.vue';

const props = defineProps({
    tasks: {
        type: Array,
        default: []
    }
})
const emit = defineEmits('del-task')
const delTask = (idtask) => {
    emit('del-task', idtask)
}
const validTask = (idtask) => {
    emit('valid-task', idtask)
}

</script>

<style>

</style>