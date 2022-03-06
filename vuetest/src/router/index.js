//引入VueRouter
import VueRouter from 'vue-router'
//引入路由组件

import Main from "../components/Main.vue"
import Show from "../components/Show.vue"
import Novels from "../components/Novels.vue"
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import Uploads from "../components/Uploads.vue"
import Content from "../components/Content.vue"
import Admin from "../components/Admin.vue"
import Lists from "../components/Lists.vue"

//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({	
    routes:[		
        {
            path: "/",
            component: Main,
            children:[
                {
                    name:"main",
                    path:"/",
                    component:Novels
                }, 		
                {				
                    name: "show",
                    path:'show',				
                    component:Show,
                    props(route) {
                        return {
                            curPage: route.params.currentPage*1
                        }
                    },
                    children: [
                        {
                            name:"rank",
                            path: "rank/:currentPage/:pageSize",
                            component: Lists
                        },
                        {
                            name:"recommend",
                            path: "recommend/:currentPage/:pageSize",
                            component: Lists
                        },
                        {
                            name:"category",
                            path: "category/:type/:currentPage/:pageSize",
                            component: Lists
                        },
                        {
                            name:"collect",
                            path: "collect/:currentPage/:pageSize",
                            component: Lists,
                            meta: {
                                isAuth:true
                            }
                        },
                        {
                            name:"search",
                            path:"search/:currentPage/:pageSize",
                            component: Lists
                        },
                    ]		
                },
                {
                    name: "content",
                    path:"content/:author/:title",
                    component: Content
                },
            ]	
        },
        {
            name: "login",
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/uploads",
            component: Uploads,
            meta: {
                isAuth:true
            }
        },
        {
            name:"admin",
            path: "/admin",
            component: Admin,
            meta: {
                isAuth:true
            }
        }
    ]
})

router.beforeEach((to,from,next)=>{
	if(to.meta.isAuth){ //判断是否需要鉴权
		if(localStorage.getItem('isLogin')){
            if (to.name == "admin") {
                if (localStorage.getItem("fromAdmin")) {
                    next()
                } else {
                    alert("非管理员禁止访问")
                }
            } else {
                next()
            }
		}else{
			alert('请登录')
		}
	}else{
		next()
	}
})

//暴露router
export default router