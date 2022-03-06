<template>
	
	<div class="header">
		<span>西二小说网站</span>
		<form>
			<input type="search" placeholder="小说搜索" name="search" class="search" v-model="kw">
			<a class="btn" @click="search">搜索</a>
		</form>

		<ul>
			<li v-if="!user.isLogin">
				<img src=../../assets/image/登陆.png alt="登陆">
				<router-link active-class="active" to="/login">登陆</router-link>
				|
				<router-link active-class="active" to="/register">注册</router-link>
			</li>
			<li v-else>
				<img src="../../assets/image/登陆.png" alt="退出">
				<a @click.prevent="back">退出</a>
			</li>
			<li v-if="user.isLogin">
				<img src="../../assets/image/小说.png" alt="书架">
				<router-link active-class="active" to="/show/collect/1/9">书架</router-link>
			</li>
			<li v-if="user.fromAdmin">
				<img src="../../assets/image/管理.png" alt="管理">
				<router-link active-class="active" to="/admin">管理</router-link>
			</li>
			<li v-if="user.isLogin">
				<img src="../../assets/image/上传.png" alt="上传">
				<router-link active-class="active" to="/uploads">上传</router-link>
			</li>
			<li v-if="user.isLogin">
				<img src="../../assets/image/用户.png" alt="用户">
				<router-link active-class="active" to="/show/collect/1/9">用户:{{user.uName}}</router-link>
			</li>
		</ul>
	</div>

</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name: "Header",
		data() {
			return {
				kw: "",
			}
		},
		methods: {
			back() {
				if (window.confirm("您确定要退出嘛?"))
					this.$store.commit('setAll',{uName:"",uPassword:"",fromAdmin:false,isLogin:false})
					window.localStorage.removeItem('uName')
					window.localStorage.removeItem('uPassword')
					window.localStorage.removeItem('fromAdmin')
					window.localStorage.removeItem('isLogin')
					window.localStorage.removeItem('uId')
			},
			search() {
				this.$router.push({	
    				name:'search',
					params: {
						currentPage: 1,
						pageSize: 9
					},
					query: {
						kw: this.kw,
					}
				}).catch(()=>{});
			}
		},
		computed: {    
            //借助mapState生成计算属性：user（对象写法）    
            ...mapState({user:'user'}),             
        },
	}
	
</script>

<style lang="css" scoped>

	.header {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-content: space-around;
	}
	.header > span {
		color: rgb(251, 102, 56);
		font-size: 30px;
	}
	.header > form > input {
		width: 200px;
		height: 40px;
	}
	.header > form > .search {
		border-radius: 6px 0 0 6px;
		outline: 0;
		font-size: 12px;
		padding: 0 10px;
    	border: 1px solid #f1f1f1;
    	line-height: 2.5;
    	color: #999;
	}
	.header > form > .btn {
		line-height: 40px;
		text-align: center;
		display: inline-block;
		background-color: rgb(255, 102, 0);
		color: white;
		border: none;
		width: 80px;
		height: 40px;
		cursor: pointer;
	}
	ul {
		list-style: none;
	}
	ul > li {
		float: left;
		margin: 0 10px;
	}
	ul > li > img{
		position: relative;
		top: 3px;
		width: 20px;
	}
	a {
		text-decoration: none;
		color: rgb(51, 51, 51);
	}
	a:hover {
		color: rgb(255, 102, 0);
	}
</style>