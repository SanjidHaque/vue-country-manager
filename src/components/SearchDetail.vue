<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <h4>Country Details</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div>
                   Country Name: {{ this.getCountry.name }}
                </div>
                <div>
                    Capital: {{ this.getCountry.capital }}

                </div>
                <div>
                    Languages: {{ this.getCountry.languages[0].name }}
                </div>
                <div>
                   Flag: <img width="30" height="20" :src="this.getCountry.flag" >
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {

            }
        },
        computed: mapGetters(['getCountry']),
        methods: {


        }
    }
</script>

