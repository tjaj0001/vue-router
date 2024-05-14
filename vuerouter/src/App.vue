<script>
  import {defineComponent} from "vue";
  import PîePagina from "@/components/FooterComponent.vue";
  export default defineComponent({
    components: {PîePagina},
  })

</script>

<template>

  <div class="wrapper">
    <header>
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/alta">Alta</RouterLink>
        <RouterLink to="/listado">Vista</RouterLink>
        <RouterLink to="/muestra/id:">Mi Usuario</RouterLink>
        <RouterLink to="/borrado/id:">Borrado</RouterLink>
        <p> Ruta actual: {{$route.fullPath}} </p>
      </nav>
    </header>
  </div>

  <main>
    <RouterView :key="$route.path"/>
  </main>

  <footer>
    <PîePagina />
  </footer>
</template>