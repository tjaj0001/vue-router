import {createWebHistory, createRouter} from 'vue-router'

import Inicio from "@/views/VistaInicio.vue"    //manera 1 de importar el componente

const routes = [
    {path: '/', name: 'inicio', component: Inicio },   //manera 1 de importar el componente
    /*APLICACIÓN DE LAZY LOADING MEDIANTE LAS FUNCIONES IMPORT PARA REPARTIR LA CARGA DE COMPONENTES DE LA APLICACIÓN*/
    {path: '/alta', name: 'alta', component: () => import('@/views/VistaAlta.vue') },  //manera 2 de importarlo
    {path: '/listado/', name: 'listado', component: () => import('@/views/VistaListado.vue')},
    {path: '/borrado/:id', name: 'borrado', component: () => import('@/views/VistaBorrado.vue')},
    {path: '/muestra/:id', name: 'muestra', component: () => import('@/views/VistaMuestra.vue')},
    {path: '/:pathMatch(.*)*', name: 'error', component: () => import('@/views/VistaError.vue')},
]

const router = createRouter({
    history: createWebHistory(),    //la url parecerá https://mipagina.com/inicio
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Siempre desplaza el scroll 10px por encima del elemento #main
        // Si existe una posición guardada, vuelve a esa posición
        if (savedPosition) {
            return savedPosition
        } else {
            // De lo contrario, se desplaza al selector '#main' con un desplazamiento de 10px por encima de este.
            return { el: '#main', top: 10 }
        }
    },
})
export default router