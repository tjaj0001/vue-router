<script>
  import ComponenteInicio from "@/components/InicioComponent.vue"

  export default {
    components: {
      ComponenteInicio

    },
    data() {
      return {
        message: 'Y este es la vista de Inicio'
      }
    }
  }

</script>

<template>
  <ComponenteInicio/>
  <p>{{message}}</p>
</template>