<template>
	
	<div class="novels">
		<div class="topbar">首页推荐</div>
		<ul>
			<li v-for="(item,index) in 9" :key="index">
				<Novel></Novel>
			</li>
		</ul>
		<div class="topbar">分类推荐</div>
		<div class="category">玄幻小说</div>
		<ul>
			<li>
				<Novel></Novel>
			</li>
		</ul>
		<div class="category">修真小说</div>
		<ul>
			<li>
				<Novel></Novel>
			</li>
		</ul>
		<div class="category">都市小说</div>
		<ul>
			<li>
				<Novel></Novel>
			</li>
		</ul>
		<div class="category">穿越小说</div>
		<ul>
			<li>
				<Novel></Novel>
			</li>
		</ul>
		<div class="category">网游小说</div>
		<ul>
			<li>
				<Novel></Novel>
			</li>
		</ul>
		<div class="category">科幻小说</div>
		<ul>
			<li>
				<Novel></Novel>
			</li>
		</ul>
		<div class="category">其他</div>
		<ul>
			<li>
				<Novel></Novel>
			</li>
		</ul>
	</div>

</template>

<script>
	import Novel from "./Novel.vue"

	export default {
		name: "Novels",
		components: {
			Novel,
		}
	}
	
</script>

<style lang="css" scoped>
	.topbar {
		width: 100%;
		margin: 10px 0;
		font-size: 18px;
		padding-left: 10px;
		padding-bottom: 5px;
		color: rgb(255, 102, 0);
		background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
		border-radius: 5px;
	}
	.category {
		width: 100%;
		margin: 10px 0;
		font-size: 14px;
		padding-left: 10px;
		padding-bottom: 5px;
		color: rgb(47, 0, 255);
		background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
		border-radius: 5px;
	}
	ul {
		list-style: none;
		width: 100%;
		border: solid 1px #a1c4fd;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
	}
	ul > li {
		display: inline-block;
	}
</style>