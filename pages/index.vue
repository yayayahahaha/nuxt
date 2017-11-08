<template>
    <div>
        <h1 v-text="msg"></h1>
        <p v-for="item in context" v-text='item'></p>
        <matoi></matoi>
    </div>
</template>

<style scoped>
    /* some scoped css */
</style>

<script>


    import axios from "axios";
    import matoi from "@/components/com_matoi";

    export default {
        layout: 'matoi',
        components: {
            matoi: matoi
        },
        head: function() {
            return {
                title: 'custom title',
                meta: [{
                    charset: 'utf-8'
                }, {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                }, {
                    hid: 'description',
                    name: 'description',
                    content: 'Meta description'
                }]
            }
        },
        asyncData: function(context) {
            return axios({
                method: 'get',
                url: 'https://www.google.com.tw',
                data: {
                    key: "value"
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
        },
        created: function() {
            console.log('inex.vue created!');
        },
        mounted: function() {
            console.log('index.vue mounted!');
        }
    }

</script>