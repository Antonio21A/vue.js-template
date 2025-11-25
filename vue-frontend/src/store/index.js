import {createStore}from 'vuex'

const store = createStore({
    state:{
        message:'Hello from Vuex Store!'
    },
    getters:{
        getMessage(state){
            return state.message
        }
    },
    mutations:{

    },
    actions:{}
})

export default store