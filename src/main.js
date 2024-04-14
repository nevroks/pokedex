import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/Router.js";


import {store} from "./store/store.js";
import {uiComponents} from "./components/UI/index.js";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {api_key} from "../secrets.js";


const firebaseConfig = {
    apiKey: `${api_key}`,
    authDomain: "pokedex-62dde.firebaseapp.com",
    projectId: "pokedex-62dde",
    storageBucket: "pokedex-62dde.appspot.com",
    messagingSenderId: "551134932032",
    appId: "1:551134932032:web:4b01fe901b381d8d7443a5"
};

const FireApp = initializeApp(firebaseConfig);


const auth = getAuth(FireApp);

const app=createApp(App)

    uiComponents.forEach(component=>{
        app.component(component.name,component)
    })

    app
        .use(store)
        .use(router)
        .mount('#app')
