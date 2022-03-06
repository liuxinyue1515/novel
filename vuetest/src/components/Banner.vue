<template>
	<div class="banner">
		<div>
			<router-link active-class="active" to="/">首页</router-link>
			<router-link active-class="active" to="/show/rank/1/9">收藏排行榜</router-link>
			<router-link active-class="active" to="/show/recommend/1/9">推荐</router-link>
			<el-dropdown class="drag">
  				<span class="el-dropdown-link">
    				分类<i class="el-icon-arrow-down el-icon--right"></i>
 				</span>
  				<el-dropdown-menu slot="dropdown">
    				<router-link to="/show/category/1/1/9"><el-dropdown-item>武侠小说</el-dropdown-item></router-link>
					<router-link to="/show/category/2/1/9"><el-dropdown-item>玄幻小说</el-dropdown-item></router-link>
					<router-link to="/show/category/3/1/9"><el-dropdown-item>爱情小说</el-dropdown-item></router-link>
					<router-link to="/show/category/4/1/9"><el-dropdown-item>都市小说</el-dropdown-item></router-link>
					<router-link to="/show/category/5/1/9"><el-dropdown-item>校园小说</el-dropdown-item></router-link>
					<router-link to="/show/category/6/1/9"><el-dropdown-item>其他小说</el-dropdown-item></router-link>
  				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name: "Banner",
		computed: {    
            //借助mapState生成计算属性：user（对象写法）    
            ...mapState({user:'user'}),             
        },
	}
	
</script>

<style lang="css" scoped>
	a {
		text-decoration: none;
	}
	.banner {
		display: block;
		width: 100%;
		background-color: rgb(255, 102, 0);
		border-radius: 5px;
	}
	.banner > div {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-content: space-around;
	}
	.banner a {
    	display: block;
    	line-height: 54px;
    	font-size: 14px;
    	color: #fff;
		text-align: center;
		padding: 5px;
		flex-grow: 1;
	}
	.banner a:hover {
		text-decoration: underline;
		background-color: rgb(238, 85, 37);
	}
	.el-dropdown {
		margin: 0 10px;
	}
	.el-dropdown-link {
		display: block;
		font-size: 14px;
    	cursor: pointer;
    	color: #fff;
		text-align: center;
  	}
  	.el-icon-arrow-down {
    	font-size: 12px;
  	}
	.router-link-exact-active {
		background-color: rgb(238, 85, 37);
	}
</style>