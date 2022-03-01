<template>
    <div class="admin">
        <router-link to="/" class="back">&nbsp;&larr;回到首页</router-link>
        <div class="manipulate">
            <table>
                <tr>
                    <th>小说名</th>
                    <th>作者</th>
                    <th>类别</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(value, index) in 12" :key="index">
                    <td>霸道仲裁爱上我</td>
                    <td>王铁妞</td>
                    <td>科幻</td>
                    <td>
                        <router-link to="/content" class="detail">详情</router-link>
                        <a href="" class="agree">同意</a>
                        <a href="" class="delete">删除</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin",
    }
</script>

<style lang="css" scoped>
    a {
        text-decoration: none;
    }
    .back:hover {
        color:#668cff;
    }
    .detail {
        background-color: #8585e0;
    }
    .agree {
        background-color: #1affa3;
    }
    .delete {
        background-color: #ff4d4d;
    }
    .admin {
        overflow: scroll;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background:linear-gradient(to bottom, #b3b3ff, #ffb3ff);
    }
    .manipulate {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10%;
    }
    table {
        min-width: 600px;
        border-collapse: collapse;
        background-color: azure;
        margin-bottom: 20px;
    }
    th, td {
        padding: 4px 6px;
        text-align: center;
        border: 1px solid #e0e0eb;
    }
    td a {
        display: inline-block;
        margin: 0 10px;
        padding: 0 3px;
        color: #e6e6e6;
        width: 40px;
    }
    td a:hover {
        color: rgb(82, 82, 122);
    }
</style>