<script>
  export default {
    data(){
      return{
        usuario: {
          name: '',
          username: '',
        },
        message:'Registro',
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
  </div>
</template>