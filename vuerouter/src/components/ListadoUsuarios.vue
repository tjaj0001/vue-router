<script>
  import Borrado from "@/components/BorradoUsuarios.vue"
  export default {
    data()
    {
      return {
        usuarios: [
              {id: 1, nombre: 'Tomás', username: 'tomasj10'},
              {id: 2, nombre: 'Fernando', username: 'fsc00016'},
        ],
        usuario: {},
      }
    },
    components: {Borrado},
  }
</script>

<template>
  <div>
    <table>
      <tr>
        <td>Id</td><td>Nombre</td><td>Username</td><td>Borrar</td>
      </tr>
      <tr v-for="user in usuarios" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.nombre}}</td>
        <td>{{user.username}}</td>
                              <!--nombre de la ruta en el router-->
        <td><RouterLink :to="{name: 'borrado',
                              params: {id: user.id}}">
                              <!--parámetros definidos en el router-->
          <Borrado />
        </RouterLink></td>
      </tr>
    </table>
    <p>Total usuarios: {{usuarios.length}}</p>
  </div>
</template>

<style scoped>

</style>