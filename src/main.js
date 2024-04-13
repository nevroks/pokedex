import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/Router.js";
import {addIcons, OhVueIcon} from "oh-vue-icons";
import {MdCatchingpokemon} from "oh-vue-icons/icons";

addIcons(MdCatchingpokemon);

const app=createApp(App)
    app
        .component("v-icon", OhVueIcon)
        .use(router)
        .mount('#app')
