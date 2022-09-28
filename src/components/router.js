//import vue from 'vue'
//import Router from 'vue-router'
import {createRouter , createWebHistory} from 'vue-router'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'



export const routes=[
    {
        path:'/',
        component:HomePage,
    },
    {
        path:'/login',
        component:LoginPage
    },
    {
        path:'/register',
        component:RegisterPage
    },
]

const router = createRouter({
  history : createWebHistory(),
  routes
})

export default router;