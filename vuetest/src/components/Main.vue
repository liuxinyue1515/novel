<template>
    	<div>
			<Header></Header>
			<Banner></Banner>
			<router-view></router-view>
		</div>
</template>

<script>
	import Header from "./Header.vue"
	import Banner from './Banner.vue'
    export default {
        name: "Main",
        components:{
			Header,
			Banner
		},
    }
</script>

<style lang="css" scoped>

</style>