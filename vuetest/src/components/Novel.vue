<template>
    <div class="novel">
        <router-link to="/content/admin/霸道仲裁?bid=1">
            <img src="../../assets/image/封面.jpg" alt="封面">
            <span class="name">霸道仲裁爱上我</span>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Novel",
        computed: {    
            //借助mapState生成计算属性：user（对象写法）    
            ...mapState({user:'user'}),             
        },
    }
</script>

<style lang="css" scoped>
    .novel {
        min-width: 250px;
        max-width: 300px;
        margin-top: 5px;
        margin-bottom: 15px;
    }
    img {
        width: 80%;
    }
    span {
        width: 80%;
        text-align: center;
        font-size: 10px;
        display: block;
        margin-top: 6px;
        font-weight: bold;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        cursor: pointer;
    }
</style>