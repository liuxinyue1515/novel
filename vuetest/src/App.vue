<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Main from "./components/Main.vue"

	export default {
		name:'App',
		components:{
			Main
		},
		mounted() {
			let uName = window.localStorage.getItem("uName")
			let uPassword = window.localStorage.getItem('uPassword')
			let fromAdmin = window.localStorage.getItem("fromAdmin") 
			if (uName !== null && uPassword !== null) {
				if (fromAdmin) {
					this.$store.commit('setAll',{uName,uPassword,fromAdmin:true,isLogin:true})
				} else {
					this.$store.commit('setAll',{uName,uPassword,fromAdmin:false,isLogin:true})
				}
			} else {
				this.$store.commit('setAll',{uName,uPassword,fromAdmin:false,isLogin:false})
			}
		},
	}
</script>

<style lang="css" scoped>
</style>
