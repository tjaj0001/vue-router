<script>
  import {defineComponent} from "vue";
  import PîePagina from "@/components/FooterComponent.vue";
  export default defineComponent({
    components: {PîePagina},
    data() {
      return {
        usuarios: [
          {id: 1, nombre: 'Tomás Jesús', username: 'tomasj10'},
          {id: 2, nombre: 'Fernando', username: 'fsc00016'},
        ]
      }
    }
  })

</script>

<template>

  <div class="wrapper">
    <header>
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/alta">Alta</RouterLink>
        <RouterLink to="/listado">Vista</RouterLink>
        <RouterLink to="/borrado/id:">Borrado</RouterLink>
        <p> Ruta actual: {{$route.fullPath}} </p>
      </nav>
    </header>
  </div>

  <main>
    <RouterView />
  </main>

  <footer>
    <PîePagina />
  </footer>
</template>