import axios from 'axios';

const state = {
    countries: [],
    country: {}
};

const getters = {
    getCountries: state => state.countries
};

const actions = {
    async fetchCountries({ commit }, searchString) {

        try {
            const response = await axios
                .get(`https://restcountries.eu/rest/v2/capital/${searchString}`);
            commit('setCountries', response.data);
        } catch (e) {
            commit('setCountries', []);
        }


    }
};

const mutations = {
    setCountries: (state, countries) => (state.countries = countries)
};

export default {
    state,
    getters,
    actions,
    mutations
};
