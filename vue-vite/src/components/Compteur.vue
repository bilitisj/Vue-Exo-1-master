<template>
    <button @click="increment">Cliquez {{ incrementValue }} fois</button>
</template>

<script>
import {ref} from 'vue'
export default {
    props: ['start'],
    setup(props) {
        let incrementValue = ref(props.start)
        const increment = () => {
            incrementValue.value ++
        }
        return {incrementValue, increment}
    }
}
</script>

<style>

</style>