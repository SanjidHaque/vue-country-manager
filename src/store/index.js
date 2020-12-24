import Vue from 'vue';
import Vuex from 'vuex';
import coutries from './modules/coutries';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        countries
    }
});
