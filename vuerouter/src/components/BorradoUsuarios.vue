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
    },
    eliminarUsuario() {
      return this.usuarios.filter(u => u.id !== this.usuario.id)
    }
  },
}
</script>

<template>
  <div v-if="usuario" >
    <h2>Eliminado {{usuario.nombre}}, id: {{usuario.id}}</h2>
    <h1>Listado de usuarios</h1>

    <table>
      <tr v-for="user in eliminarUsuario" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.nombre}}</td>
        <td>{{user.username}}</td>
      </tr>
    </table>
  </div>
</template>
