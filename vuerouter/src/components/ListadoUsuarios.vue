<script>
  import datos from '@/components/DatosUsuarios.vue'
  export default {
    data(){
      return{
        usuarios: datos.data().usuarios
      }
    },
  }
</script>
<template>

    <h1>Listado de datos</h1>

    <table>
      <tr>
        <td>Id</td><td>Nombre</td><td>Username</td><td>Visualizar</td>
      </tr>
      <tr v-for="user in usuarios" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.nombre}}</td>
        <td>{{user.username}}</td>
        <td>                <!-- nombre de la ruta -->
          <RouterLink :to="{ name: 'perfil',
                             params: {id: user.id}}">Ver</RouterLink></td>
                            <!--parámetros para la ruta, el id necesario en la ruta-->
      </tr>
    </table>
    <div id="main" style="height: 50px; background-color: #282828; width:200px;">
      <!-- Contenido de prueba -->
      <p>punto de referencia con id main para scroll Behavior.</p>
    </div>
</template>