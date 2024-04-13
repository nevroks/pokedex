import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:"/",
        component:HomePage
    },
    {
        path:"/login",
        component:LoginPage
    }
]
const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router

