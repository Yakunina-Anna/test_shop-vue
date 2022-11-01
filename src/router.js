import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/about', component: RegistrationPage },
    ]
})