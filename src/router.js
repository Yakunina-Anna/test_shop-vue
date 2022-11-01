import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./pages/MainPage";
import ShopCardPage from "./pages/ShopCardPage";



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/about', component: ShopCardPage },
    ]
})