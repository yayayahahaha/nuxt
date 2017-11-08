<template>
    <div>
    	matoi rock!
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
        	console.log('component loaded');
        }
    }
</script>