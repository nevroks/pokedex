export const moduleAuth = {
    namespaced: true,
    state: () => ({
        isAuth:false
    }),
    mutations: {
        setAuth(state,payload){
            state.isAuth=payload
        }
    },
}



