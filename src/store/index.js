import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        token:true
    },
    mutation: {
        login: function(state,data){
            state.token = data;
        },
        loginOut: function(state){
            console.log(state)
            state.token = null;
        }
    }
});