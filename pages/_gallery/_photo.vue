<template>
    <div>
    	<h1>Photo Page</h1>
        <p>photo number: <span v-text="photoNumber"></span></p>
    </div>
</template>

<style scoped>
    /* some scoped css */
</style>

<script>
    import axios from "axios";

    export default {
        asyncData: function(context) {
            return {
                photoNumber: context.params.photo
            }
        },
        data: function() {
            return {
                msg: "Context Params"
            };
        }
    }
</script>