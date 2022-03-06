<template>

<body>
    <form>
        <div class="wrapper">
            <div class="input-data">
                <input type="text" id="uName" name="uName" v-model="uName" required autocomplete="off">
                <div class="underline"></div>
                <label for="email">用户名</label>
            </div>
            <br>
            <div class="input-data">
                <input type="password" id="uPassword" name="uPassword" v-model="uPassword" required autocomplete="off">
                <div class="underline"></div>
                <label for="email">您的密码</label>
            </div>
            <input type="submit" value="登录" id="submit" @click.prevent="register">
        </div>
    </form>
</body>

</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name: "Login",
        data(){
            return {
                uName:"",
                uPassword:"",
            }
        },
        methods: {
            register(){
                if (this.uName !== "" && this.uPassword !== "") {
                    let uName = this.uName
                    let uPassword =  this.uPassword
                    this.uName = ""
                    this.uPassword = ""
                    if (uName === "admin" && uPassword === "123456") {
                        this.$store.commit('setAll',{uName,uPassword,fromAdmin:true,isLogin:true, uId: 4})
                        window.localStorage.setItem("uName", uName)
                        window.localStorage.setItem("uPassword", uPassword)
                        window.localStorage.setItem("fromAdmin", true)
                        window.localStorage.setItem("isLogin", true)
                        window.localStorage.setItem("uId", 4)
                        this.$router.back() // 后退
                    } else {
                        let form = new FormData
                        form.append('uName', uName)
                        form.append('uPassword',uPassword)
                        axios.defaults.baseURL = 'http://101.43.56.126:8181';
                        axios.post('/users/login',form).then(
                            response => {
                                if (response.data.code === 400) {
                                    alert(response.data.message)
                                } else if (response.data.code >= 200 && response.data.code < 300) {
                                    this.$store.commit('setAll',{uName,uPassword,fromAdmin:false,isLogin:true, uId: response.data.id})
                                    window.localStorage.setItem("uName", uName)
                                    window.localStorage.setItem("uPassword", uPassword)
                                    window.localStorage.setItem("fromAdmin", false)
                                    window.localStorage.setItem("isLogin", true)
                                    window.localStorage.setItem("uId", response.data.id)
                                    this.$router.back() // 后退
                                }
                            },
                            error => {
                                alert(error.message)
                            }
                        )
                    }
                    return true
                }else {
                    return false
                }
            }
        },
        computed: {    
            //借助mapState生成计算属性：user（对象写法）    
            ...mapState({user:'user'}),             
        },
    }
</script>

<style lang="css" scoped>
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        min-height: 100vh;
        background: linear-gradient(200deg, #0c3483, #a2b6df);
    }

    .wrapper {
        width: 450px;
        background-color: #fff;

        padding: 40px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        border-radius: 8px;
    }  

    .wrapper .input-data {
        position: relative;
        width: 100%;
        height: 40px;
    }

    .wrapper .input-data input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 16px;
        border-bottom: 2px solid #c0c0c0;
    }
    .wrapper .input-data input:focus ~ label,
    .wrapper .input-data input:valid ~ label {
        transform: translateY(-25px);
        font-size: 2px;
        color: #2c6fdb;
    }
    .wrapper .input-data label {
        position: absolute;
        bottom: 10px;
        left: 0px;
        color: #808080;
        pointer-events: none;
        transition: all 0.3s ease;
    }

    .wrapper .input-data .underline {
        position: absolute;
        bottom: 0px;
        height: 2px;
        width: 100%;
        background-color: #2c6fdb;
        transform: scaleX(0);
        transition: all 0.3s ease;
    }

    .wrapper .input-data input:focus ~ .underline,
    .wrapper .input-data input:valid ~ .underline
    {
        transform: scaleX(1);
    }

    form > .wrapper > input {
        float: left;
        margin-top: 10px;
    }
</style>