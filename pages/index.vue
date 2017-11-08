<template>
    <div>
        <h1 v-text="msg"></h1>
        <p v-for="item in context" v-text='item'></p>
    </div>
</template>

<style scoped>
    /* some scoped css */
</style>

<script>
    import axios from "axios";

    export default {
        asyncData: function(context) {
            return axios({
                method: 'get',
                url: '/',
                data: {
                    key: "value"
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'
                }
            }).then(function(res) {
                return {
                    context: Object.keys(context)
                };
            }).catch(function(error) {
                return {
                    context: Object.keys(context)
                };
            });
        },
        data: function() {
            return {
                msg: "Context Params"
            };
        }
    }
</script>