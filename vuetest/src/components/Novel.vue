<template>
    <div class="novel">
        <router-link to="/content">
            <img src="../../assets/image/封面.jpg" alt="封面">
            <span class="name">霸道仲裁爱上我</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Novel",
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