<template>
    <div>
    <p>Alerte <span v-if="afficheTxt">{{ msg}}</span></p>
    <button class="btn" @click.prevent="clicked">Click-me</button>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
const texte = ref('Hello')
/*const props = defineProps({
    msg: {
        type: String
    },
    afficheTxt: {
        type: Boolean
    }
})*/
const props = defineProps(['msg', 'afficheTxt'])
const emit = defineEmits("clicked")
const clicked = () => {
    emit('clicked', texte.value)
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