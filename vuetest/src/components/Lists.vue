<template>
    <ul>
        <li v-for="(obj) in fileArr" :key="obj.bid" class="item">
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
            }">
                <img :src="imgPath+ obj.imgPath" alt="封面" class="cover">
            </router-link>
            <div class="info">
                <span class="category">
                    <i>类别: </i>
                    <span v-if="obj.tid == '1'">武侠</span>
                    <span v-else-if="obj.tid == '2'">玄幻</span>
                    <span v-else-if="obj.tid == '3'">爱情</span>
                    <span v-else-if="obj.tid == '4'">都市</span>
                    <span v-else-if="obj.tid == '5'">校园</span>
                    <span v-else-if="obj.tid == '6'">其他</span>
                </span> <br>
                <span class="title"><i>标题: </i>《{{obj.bname}}》</span> <br>   
                <span class="author"><i>作者: </i>{{obj.author}}</span>   <br>
                <span class="collect" v-show="$route.name == 'rank'"><i>收藏数: </i>{{obj.count}}</span>   <br>
                <span class="link"><router-link :to="{
                                name: 'content', 
                                query: {
                                    bid: obj.bid
                                },
                                params: {
                                    author: obj.author,
                                    title: obj.bname
                                }
                }">全文阅读</router-link></span><br>
                <span class="brief"><i>简介: </i>{{obj.bdesc}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name: "Lists",
        data() {
            return {
                fileArr:[],
                imgPath: "http://101.43.56.126/imgback/",
                textPath: "http://101.43.56.126/text/"
            }
        },
        computed: {    
            //借助mapState生成计算属性：user（对象写法）    
            ...mapState({user:'user'}),             
        },
        beforeRouteEnter (to, from, next) {
            next((vc) => {
                let currentPage = vc.$route.params.currentPage
                vc.user.uId = localStorage.getItem("uId")
                axios.defaults.baseURL = 'http://101.43.56.126:8181';
                if (vc.$route.name == "rank") {
                    axios.get("/books/hotList").then(
                        response => {
                            vc.fileArr = response.data.message
                            vc.$store.commit('setPage',1)
                            vc.$store.commit('setTotal', 10)
                        }
                    )
                } else if (vc.$route.name == "category") {
                    let type = vc.$route.params.type
                    axios.get(`/books/${type}/${currentPage}/9`).then(
                        response => {
                            vc.fileArr = response.data.message.records
                            vc.$store.commit('setPage',response.data.message.pages)
                            vc.$store.commit('setTotal',response.data.message.total)
                        }
                    )
                } else if (vc.$route.name == "search") {
                    let form = new FormData
                    form.append("bName", vc.$route.query.kw)
                    axios.post(`/books/${currentPage}/9`, form).then(
                        response => {
                            vc.fileArr = response.data.message.records
                            vc.$store.commit('setPage',response.data.message.pages)
                            vc.$store.commit('setTotal',response.data.message.total)
                        }
                    )
                } else if (vc.$route.name == "recommend") {
                    axios.get(`/books/${currentPage}/9`).then(
                        response => {
                            vc.fileArr = response.data.message.records
                            vc.$store.commit('setPage',response.data.message.pages)
                            vc.$store.commit('setTotal',response.data.message.total)
                        }
                    )
                } else if (vc.$route.name == "collect") {
                    let url = `/collects/${vc.user.uId}/${currentPage}/9`
                    axios.get(url).then(
                        response => {
                            vc.fileArr = response.data.message.records
                            vc.$store.commit('setPage',response.data.message.pages)
                            vc.$store.commit('setTotal',response.data.message.total)
                        }
                    )
                }
            })
        },
        beforeRouteUpdate (to, from, next) {
            let vc = this
            let currentPage = to.params.currentPage

            axios.defaults.baseURL = 'http://101.43.56.126:8181';
            if (to.name == "rank") {
                axios.get("/books/hotList").then(
                    response => {
                        vc.fileArr = response.data.message
                        vc.$store.commit('setPage',1)
                        vc.$store.commit('setTotal', 10)
                    }
                )
            } else if (to.name == "category") {
                let type = to.params.type
                axios.get(`/books/${type}/${currentPage}/9`).then(
                    response => {
                        vc.fileArr = response.data.message.records
                        vc.$store.commit('setPage',response.data.message.pages)
                        vc.$store.commit('setTotal',response.data.message.total)
                    }
                )
            } else if (to.name == "search") {
                let form = new FormData
                form.append("bName", to.query.kw)
                axios.post(`/books/${currentPage}/9`, form).then(
                    response => {
                        vc.fileArr = response.data.message.records
                        vc.$store.commit('setPage',response.data.message.pages)
                        vc.$store.commit('setTotal',response.data.message.total)
                    }
                )
            } else if (to.name == "recommend") {
                axios.get(`/books/${currentPage}/9`).then(
                    response => {
                        vc.fileArr = response.data.message.records
                        vc.$store.commit('setPage',response.data.message.pages)
                        vc.$store.commit('setTotal',response.data.message.total)
                    }
                )
            } else if (to.name == "collect") {
                axios.get(`/collects/${vc.user.uId}/${currentPage}/9`).then(
                    response => {
                        vc.fileArr = response.data.message.records
                        vc.$store.commit('setPage',response.data.message.pages)
                        vc.$store.commit('setTotal',response.data.message.total)
                    }
                )
            }
            next()
        },
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
        height: 80%;
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