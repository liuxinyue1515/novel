<template>
    <div class="paginate">
        <div class="bar">
            <span>共 <i>724</i> 条</span>
            <ul class="pag">
                <li><router-link :to="render(1)" class="no">首页</router-link></li>
                <li v-if="curPage>1"><router-link :to="render(curPage-1)" class="no">上一页</router-link></li>
                <li v-else><router-link :to="render(curPage)" class="no">上一页</router-link></li>
                <li v-for="(value, index) in 6" :key="index">
                    <router-link :to="render(totalPage-6+index)" v-if="totalPage-curPage <= 6">{{totalPage-6+index}}</router-link>
                    <router-link :to="render(curPage+index)" v-else-if="index===5">...</router-link>
                    <router-link :to="render(curPage+index)" v-else>{{curPage+index}}</router-link>
                </li>
                <li><router-link :to="render(totalPage)">{{totalPage}}</router-link></li>
                <li v-if="curPage<totalPage"><router-link :to="render(curPage+1)" class="no">下一页</router-link></li>
                <li v-else><router-link :to="render(curPage)" class="no">下一页</router-link></li>
                <li><router-link :to="render(totalPage)" class="no">尾页</router-link></li>
                <li>前往<input type="text" v-model.number="toPage" @keydown.enter="change">页</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Paginate",
        data() {
            return {
                totalPage:20,
                toPage: ""
            }
        },
        methods: {
            change() {
                let toPage = this.toPage
                if (toPage > this.totalPage) {
                    toPage = this.totalPage
                } else if (toPage < 1) {
                    toPage = 1
                }
                this.toPage = ""
                this.$router.push({	
                    name:this.$route.name,		
                    params:{			
                        currentPage:toPage,			
                        pageSize:9		
                    }
                })
            },
            render(currentPage) {
                return {	
                    name:this.$route.name,		
                    params:{			
                        currentPage,			
                        pageSize:9		
                    }
                }
            }
        },
        props: {
            curPage: {
                type: Number,
                default:1
            }
        },
        mounted() {
            
        }
    }
</script>

<style lang="css" scoped>
    .paginate {
        width: 100%;
        background: linear-gradient(to right, #6666ff, #b3b3ff)
    }
    .bar {
        width: 70%;
        margin: 0 auto;
        line-height: 32px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    i {
        font-weight: 900px;
    }
    ul,li {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    li {
        min-width: 47px;
        list-style: none;
    }
    .pag {
        margin: 0px 8px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .pag li:not(li:last-child) {
        background-color: rgba(255, 255, 255, 0.575);
    }
    li:last-child {
        margin-left: 5px;
    }
    .pag a {
        text-decoration: none;
        padding: 5px 12px;
        margin: 0px 2px;
        color: black;
    }
    .pag a:hover {
        background-color: #ccc;
    }
    .pag a.router-link-exact-active:not(.no) { 
        background: #4CAF50;
        color: white;
	}
    input {
        width: 20px;
    }
</style>