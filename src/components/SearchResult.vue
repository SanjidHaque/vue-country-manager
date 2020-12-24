<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <h4>Result</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div v-for="(country) in getCountries" v-bind:key="country.area">
                    <div @click="onSelectCountry(country)">
                        {{ country.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex';
    export default {
        data() {
            return {
            }
        },
        computed: mapGetters(['getCountries']),
        methods: {
            ...mapActions(['selectCountry']),
            onSelectCountry(country) {
                this.selectCountry(country)
            }
        }
    }
</script>
