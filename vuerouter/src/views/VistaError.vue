<template>
  <div :key="this.$route.params.id">
    <h1>404: Página no encontrada</h1>
    <p>Aunque la página que has intentado buscar no ha sido encontrada, puedes volver al <RouterLink to="/">inicio</RouterLink></p>
  </div>
  <div id="main" style="height: 50px; background-color: lightgray; width:200px;">
    <!-- Contenido de prueba -->
    <p>punto de referencia con id main para scroll Behavior.</p>
  </div>
</template>
