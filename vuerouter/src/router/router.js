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
        component: () => import('@/views/VistaPerfil.vue'), //APLICACIÓN DE LAZY LOADING PARA REPARTIR CARGA DE COMPONENTES
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
/*
    beforeRouteLeave (to, from, next) {
      // Guarda la posición de desplazamiento actual en el almacenamiento local
      localStorage.setItem('savedPosition', window.pageYOffset)
      next()
    }

*/
const router =
    createRouter({
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
        strict: true,
})

/*El siguiente ejemplo para probar un navigation Failure trabaja sobre la vista alta porque es sobre la que
* se pueden realizar modificaciones que queden reflejadas en la página para hacer pruebas*/
import { NavigationFailureType, isNavigationFailure } from 'vue-router'

//intento de dejar la página que se esta editando sin guardar cambios.
const failure = await router.push('/alta')

if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
    // muestra un mensaje
    alert('Tienes cambios sin guardar, ¿dejar la página?')
}
    //const navigationResult = await router.push('/borrado') -> SI ESTA VARIABLE DEVUELVE UN VALOR, QUIERE DECIR QUE EL
    // NAVIGATION GUARD NO TERMINO CORRECTAMENTE LA NAVEGACION DEBIDO A LA ESPERA POR LA NAVEGACION A LA RUTA ALTA Y RECOPILA
    // INFORMACIÓN SOBRE ELLO

    //if (navigationResult) {
    /*Navegación cancelada
    * debido posiblemente a navigation guard,
    * navigationResult contendrá un objeto con
    * información sobre la navegación prevista*/
    //} else {
    //navigationResult devolverá undefined.
    // navegación exitosa, con lo cual se produciría una redirección
    /*
     Acción a realizar cuando se produzca redirección. En este caso el menu de prueba
     se cierra una vez que se ha llegado a la nueva página.
    */
    //this.isMenuOpen = false
    //}

    /*  Prueba de navegación asíncrona
        await router.push('/listado')
        this.isMenuOpen = false

     */
//Asigna el título de forma dinámica
router.beforeEach((to) => {
    document.title = to.meta.pageTitle;
} ) //asignar el título de la página
export default router