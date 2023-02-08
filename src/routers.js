import Home from './components/Home.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory}  from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/log-in'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;