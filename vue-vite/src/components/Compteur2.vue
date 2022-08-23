<template>
    <button class="compteur" @click="increment">Cliquez {{ incrementValue }} fois</button>
</template>

<script setup>
import {ref} from 'vue'
    const props = defineProps({
        start: {
            type: Number,
            default: 0
        }
    })

    let incrementValue = ref(props.start)
    const increment = () => {
        incrementValue.value ++
    }
        //return {incrementValue, increment}
    

</script>

<style lang="scss">
$color: hsla(160, 100%, 37%, 1);
.compteur {
    background: $color;
    border: none;
    padding: .5rem;
    border-radius: .5rem;
}
</style>