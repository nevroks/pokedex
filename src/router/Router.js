import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import ProfilePage from "../pages/ProfilePage.vue";

const routes=[
    {
        path:"/",
        component:HomePage
    },
    {
        path:"/login",
        component:LoginPage
    }
    ,
    {
        path:"/profile",
        component:ProfilePage
    }
]
const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router

