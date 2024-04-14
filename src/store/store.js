import { createStore } from 'vuex'
import {moduleAuth} from "./modules/auth.js";

// Create a new store instance.
export const store = createStore({
    modules: {
        auth: moduleAuth,
    },
})