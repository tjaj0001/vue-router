<template>
  <div class="error">
    <h2>404: Página no encontrada</h2>
    <p> Aunque la página que has intentado buscar
      no ha sido encontrada,
      puedes volver al <RouterLink to="/">Inicio</RouterLink> </p>
  </div>
  <div id="main" style="height: 50px; background-color: #282828; width:200px;">
    <!-- Contenido de prueba -->
    <p>punto de referencia con id main para scroll Behavior.</p>
  </div>
  <div>
    <!-- Contenido de prueba  PARA MOSTRAR QUE SCROLL BEHAVIOR SE REALIZA CORRECTAMENTE CUANDO TENEMOS MAS CONTENIDO EN LA VISTA.-->
    <!--<p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>
    <p>TEXTO</p>-->
  </div>
  <!--<script>
    /* EJEMPLO DE COMPROBACIÓN SOBRE TIPOS DE FALLOS DE NAVEGACIÓN PARA PODER MANEJARLOS Y SOLUCIONAR PROBLEMAS.
       TAMBIÉN SE PUEDE IMPLEMENTAR EN ROUTER.JS
    export default {
      name: 'App',
      created() {
        this.$router.onError(error => {
          if (error && error.type === NavigationFailureType.redirected) {
            console.log("La navegación fue redirigida a otra ruta");
          } else if (error && error.type === NavigationFailureType.aborted) {
            console.log("La navegación fue abortada");
          } else if (error && error.type === NavigationFailureType.cancelled) {
            console.log("La navegación fue cancelada");
          } else if (error && error.type === NavigationFailureType.duplicated) {
            console.log("La navegación fue duplicada");
          } else if (error && error.type === NavigationFailureType.uncaught) {
            console.log("Error no capturado durante la navegación");
          }
        });
      }
    }
     */
  </script>-->
</template>
