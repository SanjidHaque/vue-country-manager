import axios from 'axios';

const state = {
    countries: []
};

const getters = {
    countries: state => state.countries
};

const actions = {
    async fetchCountries({ commit }, searchString) {
        const response = await axios
            .get(`https://restcountries.eu/rest/v2/capital/${searchString}`);
        commit('setCountries', response);
        console.log(response);
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
