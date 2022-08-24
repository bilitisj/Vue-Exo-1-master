<template>
    <div>
        <ul>
            <li v-for="(item, key) in products" :key="key"><RouterLink>{{ item.label}}</RouterLink></li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { RouterLink } from 'vue-router';

    const products = ref([
        {
            label: "produit 1",
            prix: 50.5,
            description: "description produit 1"
        },
        {
            label: "produit 2",
            prix: 35.5,
            description: "description produit 2"
        },
        {
            label: "produit 3",
            prix: 90.5,
            description: "description produit 3"
        }

    ])
</script>

<style>

</style>