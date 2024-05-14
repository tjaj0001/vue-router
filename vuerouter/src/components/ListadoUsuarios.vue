<script>
  import datos from '@/components/DatosUsuarios.vue'
  export default {
    data(){
      return{
        usuarios: datos.data().usuarios
      }
    },
    computed: {
     // eliminarUsuario(id){
       // return this.usuarios.pop(this.usuario.id === parseInt(id))
      //}
    }
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
          <RouterLink :to="{ name: 'muestra',
                             params: {id: user.id}}"><button>Ver</button></RouterLink></td>
                            <!--parámetros para la ruta, el id necesario en la ruta-->
        <td>
          <RouterLink :to="{ name: 'borrado',
                             params: {id: user.id}}"><button>Borrar</button></RouterLink>
        </td>
      </tr>
    </table>
</template>