<template>
  <div class="error"
       :key="this.$route.params.id">
    <h2>404: Página no encontrada</h2>
    <p> Aunque la página que has intentado buscar
      no ha sido encontrada,
      puedes volver al <RouterLink to="/">Inicio</RouterLink> </p>
  </div>
</template>
