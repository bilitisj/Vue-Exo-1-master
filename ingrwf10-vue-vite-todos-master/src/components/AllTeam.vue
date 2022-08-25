<template>
    <ul v-if="team.length >0">
        <li :class="{vu: membre.vue}" v-for="(membre, key) in team" :key="key">{{ membre.prenom }} <BtnVu :idteam="key"></BtnVu></li>
    </ul>
    <p v-else>Pas de team</p>

    <h2>New membre</h2>
    <form action="" @submit.prevent="addMember">
        <input type="text" v-model="newMember.prenom" placeholder="Prénom">
        <input type="text" v-model="newMember.nom" placeholder="Nom">
        <button>Ajouter</button>
    </form>
</template>

<script setup >
    import { useTeamStore } from '@/stores/team';
    import BtnVu from '@/components/BtnVuTeam.vue'
    import {ref} from 'vue'
import BtnVuTeam from './BtnVuTeam.vue'

    const teamStore = useTeamStore()

    const team = ref(teamStore.allTeam) // allTeam est le getters

    const newMember = ref({
        prenom:"",
        nom:"",
        vue: false
    })

    const addMember = () => {
        teamStore.add(newMember.value)
    }
</script>

<style>
.vu {
    color: red;
    text-decoration:line-through;
}
</style>