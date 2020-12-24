<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <h4>Detail</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div>
                    {{ this.getCountry.name }}
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
