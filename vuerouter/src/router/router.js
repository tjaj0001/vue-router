import {createWebHistory,
        createRouter} from 'vue-router'
import Inicio from "@/views/VistaInicio.vue"    //manera 1 de importar el componente

const routes = [
    {path: '/',
        name: 'inicio',
        component: Inicio,

        meta: { pageTitle: 'Inicio'} },   //manera 1 de importar el componente
    
    {path: '/alta', name: 'alta', component: () => import('@/views/VistaAlta.vue'), meta: { pageTitle: 'Registro'} },  //manera 2 de importarlo

    {path: '/listado', name: 'listado', component: () => import('@/views/VistaListado.vue'), meta:  { pageTitle: 'Listado'} },

    {path: '/perfil/:id(\\d+)',
        name: 'perfil',
        component: () => import('@/views/VistaPerfil.vue'),
        sensitive: true,
        props: ruta=> ({
            id: parseInt(ruta.params.id)
        }),
        meta: { pageTitle: 'Perfil'
                },
    },

    {path: '/borrado/:id(\\d+)',
        name: 'borrado',
        component: () => import('@/views/VistaBorrado.vue'),
        sensitive: true,
        meta: { pageTitle: 'Borrado'} },

    {path: '/:pathMatch(.*)*',
        name: 'error',
        component: () => import('@/views/VistaError.vue'),
        meta: { pageTitle: 'Error'} },  //título de la página
]

const router =
    createRouter({
        history: createWebHistory(),    //la url parecerá https://mipagina.com/inicio
        routes,
        strict: true,
})

//Asigna el título de forma dinámica
router.beforeEach((to) => {
    document.title = to.meta.pageTitle;
} ) //asignar el título de la página
export default router