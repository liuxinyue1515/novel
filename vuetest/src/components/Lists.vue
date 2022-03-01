<template>
    <ul>
        <li v-for="(item, index) in 9" :key="index" class="item">
            <router-link to="/content">
                <img src="../../assets/image/封面.jpg" alt="封面" class="cover">
            </router-link>
            <div class="info">
                <span class="category"><i>类别: </i>玄幻小说</span> <br>
                <span class="title"><i>标题: </i>《霸道仲裁爱上我》</span> <br>   
                <span class="author"><i>作者: </i>王铁妞</span>   <br>
                <span class="link"><router-link to="/content">全文阅读</router-link></span>
                <span class="brief"><i>简介: </i>霸道的仲裁宣布一生不爱, 却在一个偶然的机会下碰到了一个女人,并与其相爱的故事</span>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Lists",
    }
</script>

<style lang="css" scoped>
    a {
        cursor: pointer;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
    }
    .item {
        margin: 10px 0;
        flex: 0 0 33%;
    }
    .info {
        min-height: 300px;
    }
    .cover {
        width: 50%;
        float: left;
    }
    span {
        display: inline-block;
        margin: 20px 20px 40px 10px;
    }
    span:last-child {
        margin-bottom: 5px;
    }
    i {
        color: #ff9933;
    }
</style>