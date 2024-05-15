<script>
import datos from "@/components/DatosUsuarios.vue"
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data(){
    return{
      usuarios: datos.data().usuarios,
    }
  },
  computed: {
    usuario() {
      return this.usuarios.find(usuario =>
                                usuario.id === this.id)
    }
  }
  /*methods: {
    async init(){
      const response = await fetch('url/${this.$route.params.slug') //en el caso de que contásemos con un servicio REST
      this.usuario = await response.json()
    },
    async creado()
    {
      this.init()
    }
  },*/
}
</script>

<template>
  <div v-if="usuario">
    <h2>Hola, {{ usuario.nombre }} tu id es: {{usuario.id}}</h2>
  </div>
</template>

<style scoped>

</style>