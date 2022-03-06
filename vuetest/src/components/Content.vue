<template>
        <div class="content">
            <div id="title">
                《{{$route.params.title}}》
            </div>
            <div id="author"><span>作者: </span>{{$route.params.author}}</div>
            <div class="novel">
                {{novelContent}}
            </div>
            <div class="form">
                <form v-if="user.isLogin">
                    <input type="submit" :value="text" id="collect" @click.prevent="manipulate">
                </form>
                <form>
                    <input type="submit" value="下载" id="download" @click.prevent="download">
                </form>
            </div>
        </div>
</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'
    import {saveAs} from 'file-saver';
    export default {
        name: "Content",
        data(){
            return {
                novelContent: "空空如也",
                isCollect: false
            }
        },
        methods: {
            collect() {
                let _this = this
                let form = new FormData
                form.append('bId', this.$route.query.bid)
                form.append('uId', this.user.uId)
                axios.defaults.baseURL = 'http://101.43.56.126:8181';
                axios.post("/collects", form).then(
                    response => {
                        console.log(response);
                        console.log("collect");
                        if (response.data.code >= 200 && response.data.code < 300) {
                            _this.isCollect = true
                            alert(response.data.message);
                        } else if (response.data.code === 400) {
                        }
                    }
                )
            },
            cancel () {
                let _this = this
                let url = `/collects?bId=${this.$route.query.bid}&uId=${this.user.uId}`
                axios.defaults.baseURL = 'http://101.43.56.126:8181';
                axios.delete(url).then(
                    response => {
                        console.log(response);
                        console.log("cancel");
                        if (response.data.code >= 200 && response.data.code < 300) {
                            _this.isCollect = false
                        } else if (response.data.code === 400) {
                            alert(response.data.message);
                        }
                    }
                )
            },
            manipulate () {
                if (!this.isCollect) {
                    this.collect()
                } else {
                    this.cancel()
                }
            },
            download() {
                let data = this.novelContent
                let str = new Blob([data], {type: 'text/plain;charset=utf-8'});
                // 注意这里要手动写上文件的后缀名
                saveAs(str, `${this.$route.params.title}.txt`);
            }
        },
        computed: {    
            //借助mapState生成计算属性：user（对象写法）    
            ...mapState({user:'user'}),
            text () {
                return this.isCollect ? "取消收藏" : "收藏"
            }      
        },
        mounted() {
            let _this = this;
            axios.get(this.$route.query.novelPath).then(response => {
                _this.novelContent = response.data
                if (_this.novelContent == "") {
                    _this.novelContent = "空空如也"
                }
            })
            .catch(function(error){
                console.log(error);
            })
            
            let form = new FormData
            form.append('bId', this.$route.query.bid)
            form.append('uId', this.user.uId)
            axios.defaults.baseURL = 'http://101.43.56.126:8181';
            axios.post("/collects", form).then(
                response => {
                    if (response.data.code >= 200 && response.data.code < 300) {
                        _this.cancel()
                    } else if (response.data.code === 400) {
                        _this.isCollect = true
                    }
                }
            )            
        }
    }
</script>

<style lang="css" scoped>
    .content {
        width: 100%;
        background-color: #FAF0E6;
        position: absolute;
        top: 128px;
        bottom: 0;
        overflow: scroll;
    }
    #title {
        font-weight: 900;
        text-align: center;
        width: 50%;
        margin: 10px auto;
    }
    #author {
        font-weight: 800;
        position: relative;
        left: 90%;
    }
    .novel {
        font-size: 14px;
        font-weight: bold;
        margin: 10px auto;
        width: 80%;
        min-height: 75%;
        background: linear-gradient(to bottom, white, grey);
    }
    .form {
        margin: 20px;
        display: flex;
        justify-content: center;
    }
    input {
        border: 0;
    }
    form {
        margin: 0 10px;
    }
    input {
        cursor: pointer;
    }
    #collect {
        background-color: #ff9933;
        color: white;
    }
    #download {
        background-color: whitesmoke;
        color: grey;
    }
</style>