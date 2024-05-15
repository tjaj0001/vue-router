import {createWebHistory, createRouter} from 'vue-router'

import Inicio from "@/views/VistaInicio.vue"    //manera 1 de importar el componente

const routes = [
    {path: '/', name: 'inicio', component: Inicio },   //manera 1 de importar el componente
    
    {path: '/alta', name: 'alta', component: () => import('@/views/VistaAlta.vue') },  //manera 2 de importarlo

    {path: '/listado', name: 'listado', component: () => import('@/views/VistaListado.vue')},

    {path: '/muestra/:id(\\d+)',
        name: 'muestra',
        component: () => import('@/views/VistaMuestra.vue'),
        sensitive: true,
        props: ruta=> ({
            id: parseInt(ruta.params.id)
        }) },

    {path: '/borrado/:id(\\d+)',
        name: 'borrado',
        component: () => import('@/views/VistaBorrado.vue'),
        sensitive: true},


    {path: '/:pathMatch(.*)*',
     name: 'error',
     component: () => import('@/views/VistaError.vue')},
]

const router = createRouter({
    history: createWebHistory(),    //la url parecerá https://mipagina.com/inicio
    routes,
    strict: true,
})
export default router