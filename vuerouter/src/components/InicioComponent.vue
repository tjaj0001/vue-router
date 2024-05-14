<script>
  export default {
    methods: {
      goToVistaAlta() {
        this.$router.push('/alta')
      },
    },
    data() {
      return {
        message:'Esta es la vista Inicio'
      }
    }
  }
  </script>
<template>
  <div>
    <h1>
      {{message}}
    </h1>
  </div>
</template>
