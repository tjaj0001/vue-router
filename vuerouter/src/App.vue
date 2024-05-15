<script>
  import navmenu from "@/components/MenuNavegacion.vue"
  import pie from "@/components/FooterComponent.vue"
  export default {
    components: {
      navmenu,
      pie
    }
  }
</script>

<template>

  <div class="wrapper">

    <header>
      <navmenu />
    </header>

  </div>

  <!--

  <RouterView :key="$route.fullPath" />

  -->

  <RouterView v-slot="{ Component } ">
    <transition name='fade'
                mode="out-in" >
      <keep-alive>
        <component :is="Component"
                 :key="$route.fullPath" />
      </keep-alive>
    </transition>
  </RouterView>

  <footer>
    <pie />
  </footer>

</template>

<style>
@import "assets/main.css";
</style>