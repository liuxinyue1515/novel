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
                <tr v-if="fileArr.length == 0">
                    <td colspan="4">空</td>
                </tr>
                <tr v-else v-for="(obj) in fileArr" :key="obj.bid">
                    <td>{{obj.bname}}</td>
                    <td>{{obj.author}}</td>
                    <td v-if="obj.tid == '1'">武侠</td>
                    <td v-else-if="obj.tid == '2'">玄幻</td>
                    <td v-else-if="obj.tid == '3'">爱情</td>
                    <td v-else-if="obj.tid == '4'">都市</td>
                    <td v-else-if="obj.tid == '5'">校园</td>
                    <td v-else-if="obj.tid == '6'">其他</td>
                    <td>
                        <router-link :to="{
                            name: 'content', 
                            query: {
                                bid: obj.bid,
                                novelPath: textPath+obj.textPath,
                            },
                            params: {
                                author: obj.author,
                                title: obj.bname
                            }
                        }" class="detail">详情</router-link>
                        <a class="agree" @click="agree(obj.bid)">同意</a>
                        <a class="delete" @click="remove(obj.bid)" >删除</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Admin",
        data() {
            return {
                fileArr: [],
                imgPath: "http://101.43.56.126/imgback/",
                textPath: "http://101.43.56.126/text/"
            }
        },
        methods: {
            agree(id) {
                axios.defaults.baseURL = 'http://101.43.56.126:8181';
                axios.post(`/books/pass/${id}`)
                axios.get("/books/unPassed/1/9").then(
                    response => {
                        if (response.data.code >= 200 && response.data.code < 300) {
                            this.fileArr = response.data.message.records
                        }
                    },
                    error => {
                        alert(error.message)
                    }
                )
            },
            remove(id) {
                axios.defaults.baseURL = 'http://101.43.56.126:8181';
                axios.delete(`/books/${id}`)
                axios.get("/books/unPassed/1/9").then(
                    response => {
                        if (response.data.code >= 200 && response.data.code < 300) {
                            this.fileArr = response.data.message.records
                        }
                    },
                    error => {
                        alert(error.message)
                    }
                )              
            }
        },
        mounted () {
            axios.defaults.baseURL = 'http://101.43.56.126:8181';
            axios.get("/books/unPassed/1/9").then(
                response => {
                    if (response.data.code >= 200 && response.data.code < 300) {
                        this.fileArr = response.data.message.records
                    }
                },
                error => {
                    alert(error.message)
                }
            )
        },
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
        cursor: pointer;
    }
    td a:hover {
        color: rgb(82, 82, 122);
    }
</style>