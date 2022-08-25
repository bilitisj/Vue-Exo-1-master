import { defineStore } from "pinia";

export const useTeamStore = defineStore({
    id: 'team',
    state: () => ({
        team: [
            {
            prenom: "Pierre",
            nom: "Charlier",
            vue: false
        },
        {
            prenom: "Michèle",
            nom: "Voos",
            vue: true
        }
    ]
    }),
    getters: {
        allTeam: (state) => {
            return state.team
        }
    },
    actions: {
        switchVu(idteam) {
            this.team[idteam].vue = !this.team[idteam].vue
        },
        add(newMember) {
            this.team.push({... newMember})
        }
    }
})