import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
const config = {
    plugins: [createPersistedState()],
    state: {
        isLogin: false,
        username: '',
        token: '',
        // url: "http://192.168.2.195:8711",
        url: "http://39.104.99.181:8711",
    },
    getters: {
        isLogin: state => state.isLogin,
        token: state => state.token,
        username: state => state.username
    },
    mutations: {
        updateLogin(state, payload) {
            state.isLogin = payload;
        },
        updateToken(state, payload) {
            state.token = payload;
        },
        updateUsername(state, payload) {
            state.username = payload;
        }
    },
    actions: {}
}
const store = new Vuex.Store(config);
export default store;