
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
  <div id="main" style="height: 50px; background-color: lightgray; width:200px;">
    <!-- Contenido de prueba -->
    <p>punto de referencia con id main para scroll Behavior.</p>
  </div>
</template>

<style scoped>

</style>