<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <h4>Search with capital</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">

                <v-form ref="form" v-model="valid">
                    <v-text-field
                            v-model="searchString"
                            outlined
                            @keyup.enter.native="onFetchCountries"
                            required>
                    </v-text-field>
                </v-form>

            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions} from 'vuex';


    export default {
        data() {
            return {
                valid: false,
                searchString: ''
            }
        },
        methods: {
            ...mapActions(['fetchCountries']),
            onFetchCountries() {
                this.fetchCountries(this.searchString);
            }

        }
    }
</script>
