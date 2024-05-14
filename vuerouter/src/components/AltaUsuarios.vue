
<script>
  export default {
    data(){
      return{
        nombre: '',
        username: '',
        message:'Este es el alta',
      }
    }
  }
</script>

<template>
  <h1>{{message}}</h1>
  <p>{{nombre}}</p>
  <p>{{username}}</p>
  <label>
    Nombre:
    <input type="text" v-model="nombre" maxlength="20" />
  </label>
  <p>{{usuname}}</p>
  <label>
    Username:
    <input type="text" v-model="username" maxlength="20" />
  </label>
</template>

<style scoped>

</style>