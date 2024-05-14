import {createWebHistory, createRouter} from 'vue-router'

import Inicio from "@/views/VistaInicio.vue"    //manera 1 de importar el componente

const routes = [
    {path: '/', name: 'inicio', component: Inicio },   //manera 1 de importar el componente
    {path: '/alta', name: 'alta', component: () => import('@/views/VistaAlta.vue') },  //manera 2 de importarlo
    {path: '/listado/', name: 'listado', component: () => import('@/views/VistaListado.vue')},
    {path: '/borrado/:id', name: 'borrado', component: () => import('@/views/VistaBorrado.vue')},
    {path: '/muestra/:id', name: 'muestra', component: () => import('@/views/VistaMuestra.vue')},
    {path: '/:pathMatch(.*)*', name: 'error', component: () => import('@/views/VistaError.vue')},
]

const router = createRouter({
    history: createWebHistory(),    //la url parecerá https://mipagina.com/inicio
    routes,
})
export default router