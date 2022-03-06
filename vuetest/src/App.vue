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
			let uId = window.localStorage.getItem("uId")
			if (uName !== null && uPassword !== null) {
				if (fromAdmin == "true") {
					this.$store.commit('setAll',{uName,uPassword,fromAdmin:true,isLogin:true, uId})
				} else {
					this.$store.commit('setAll',{uName,uPassword,fromAdmin:false,isLogin:true, uId})
				}
			} else {
				this.$store.commit('setAll',{uName,uPassword,fromAdmin:false,isLogin:false, uId})
			}
		},
	}
</script>

<style lang="css" scoped>
</style>
