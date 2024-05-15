<script>
  import datos from '@/components/DatosUsuarios.vue'
  export default {
    data(){
      return{
        usuario: {
          name: '',
          username: '',
        },
        message:'Registro',
        usuarios: datos.data().usuarios,
      }
    },
    computed: {
      newArray()
      {
        return this.usuarios.slice(0).push(this.usuario)
      }
    },
  }
</script>

<template>
  <div>
    <h1>{{message}}</h1>
    <p>{{usuario.name}}</p>
    <label>
      Nombre:
      <input
             type="text"
             v-model="usuario.name"
             maxlength="20" />
    </label>
    <p>{{usuario.username}}</p>
    <label>
      Username:
      <input type="text"
             v-model="usuario.username"
             maxlength="20" />
    </label>
    <table>
      <tr v-for="user in newArray" :key="user.id">
        <td>{{user.nombre}}</td>
      </tr>
    </table>
  </div>
</template>