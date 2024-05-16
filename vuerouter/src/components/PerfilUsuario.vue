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
  },
}
</script>

<template>


  <div class="error"
       v-if="usuario">

    <p>Id de ruta: {{this.$route.params.id}}</p>

    <h3>Id: {{usuario.id}}</h3>
    <h3>Nombre: {{usuario.nombre}}</h3>
    <h3>Username: {{usuario.username}}</h3>
    <RouterLink :to="{ name: 'borrado',
                     params: {
                              id: id }
                   }">Borrar</RouterLink>
    <RouterView />
  </div>
</template>
