<template>
    <button @click="switchVu">V</button>
</template>

<script setup>
//import {ref} from 'vue'
import { useTeamStore } from '@/stores/team';

const teamStore = useTeamStore()
const props = defineProps(['idteam'])
const switchVu = () => {
    teamStore.switchVu(props.idteam)
}

</script>

<style>

</style>