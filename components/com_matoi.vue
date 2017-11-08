<template>
    <div>
    	matoi rock!
    	<img src="/images/static_1.png" alt="">
    </div>
</template>

<style scoped>
    /* some scoped css */
</style>

<script>
    import axios from "axios";

    export default {
        data: function() {
            return {
                msg: "Context Params"
            };
        },
        created: function() {
        	console.log('component created');
        },
        mounted: function() {
        	console.log('component mounted');
        }
    }
</script>