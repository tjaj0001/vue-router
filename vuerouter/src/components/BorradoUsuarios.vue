<script>
import datos from '@/components/DatosUsuarios.vue'
export default {
  data()
  {
     return {
       usuarios: datos.data().usuarios,
     }
  },
  computed: {
    usuario() {
      return this.usuarios.find(usuario =>
          usuario.id === parseInt(this.$route.params.id))
    }
  }
}
</script>

<template>
  <div v-if="usuario">
    <p>Has eliminado al usuario {{usuario.nombre}}, con id {{usuario.id}}</p>
  </div>
</template>
