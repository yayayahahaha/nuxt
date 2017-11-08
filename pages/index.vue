<template>
	<div>
		<p>hello</p>
	</div>
</template>

<style></style>

<script>

export default {
    asyncData: function(context) {
        return {
            msg: Object.keys(context)
        };
    },
    data: function() {
        return {

        };
    }
}

</script>