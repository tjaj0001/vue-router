<script>
  import datos from '@/components/DatosUsuarios.vue'
  export default {
    data(){
      return{
        usuarios: datos.data().usuarios
      }
    },
    eliminarUsuario(id){
      return this.usuarios.pop(this.usuario.id === id)
    },
  }
</script>

<template>

    <table>
      <tr>
        <td>Id</td><td>Nombre</td><td>Username</td><td>Visualizar</td><td>Eliminar</td>
      </tr>
      <tr v-for="user in usuarios" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.nombre}}</td>
        <td>{{user.username}}</td>
        <td>                <!-- nombre de la ruta -->
          <RouterLink :to="{ name: 'perfil',
                             params: {id: user.id}}">Ver</RouterLink></td>
                            <!--parámetros para la ruta, el id necesario en la ruta-->
        <td>
          <RouterLink :to="{ name: 'borrado',
                             params: {id: user.id}}">Borrar</RouterLink>
        </td>
      </tr>
    </table>

</template>