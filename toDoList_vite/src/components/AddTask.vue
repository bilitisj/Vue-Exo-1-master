<template>
<div>
    <h2>Tâche à ajouter</h2>
    <form action="submit" @submit.prevent="addTask">
        <input type="text" v-model="newTask.label">
        <button class="btn">Ajouter</button>
    </form>
</div>
</template>

<script setup>
import {ref, defineEmits} from 'vue'
const newTask = ref({
    label: "",
    done: false
})

const emit = defineEmits(['plus-task'])

const addTask = () => {
    emit('plus-task', newTask.value)
}

</script>

<style lang="scss">
$color: hsla(160, 100%, 37%, 1);
.btn {
    background: $color;
    border: none;
    padding: .5rem .8rem;
    margin: 1rem;
    border-radius: 1rem;
}
</style>