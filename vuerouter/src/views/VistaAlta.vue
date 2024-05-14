<script setup>
import {ref} from "vue"

const name = ref('Hola')
const usuname = ref('Adios')
</script>

<script>
import ComponenteAlta from "@/components/AltaUsuarios.vue";
export default {
  components: {
    ComponenteAlta
  }
}
</script>

<template>
  <p>{{name}} {{usuname}}</p>
  <ComponenteAlta
      v-model:nombre="name"
      v-model:username="usuname"/>
</template>