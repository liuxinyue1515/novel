<template>
    
    <div class="uploads">
        <form>
            <div>
                <label for="title"><span>*</span>小说标题</label>
                <input type="text" id="title" v-model="bName" required><br>
            </div>
            <div>
                <label for="category"><span>*</span>小说类别</label>
                <select name="category" id="category" v-model="tId" required>
                    <option value="1">武侠小说</option>
                    <option value="2">玄幻小说</option>
                    <option value="3">爱情小说</option>
                    <option value="4">都市小说</option>
                    <option value="5">校园小说</option>
                    <option value="6">其他小说</option>
                </select>
            </div>
            <div>
                <label for="file"><span>*</span>小说文件</label>
                <input type="file" id="file" accept=".txt,.jpg,.png" multiple required @change="getFile($event)"><br>
                <span class="tip">(传入图片和小说文件, 仅支持.txt, .jpg, .png格式)</span>
            </div>
            <div>
                <label for="bDesc" class="info">简介</label>
                <textarea name="bDesc" id="bDesc" cols="30" rows="10" maxlength="50" placeholder="50字以内" v-model="bDesc"></textarea><br>
            </div>
            <button type="submit" id="submit" @click.prevent="upload">上传</button>
            <button type="reset" id="reset">重置</button>
        </form>
    </div>

</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name: "Uploads",
        data() {
            return {
                bName:"",
                bDesc:"",
                author:"",
                tId: 1,
                fileArr: [],
            }
        },
        methods: {
            getFile(event){
                let file = event.target.files
                for (let i = 0; i < file.length; i++) {
                    let fileName = file[i].name
                    let idx = fileName.lastIndexOf(".")
                    if (idx != -1) {
                        let ext = fileName.substr(idx+1).toLowerCase()
                        if (ext != "txt" && ext != "jpg" && ext != "png") {
                            alert("非法文件类型")
                        } else {
                            this.fileArr.push(file[i])
                        }
                    } else {
                        alert("非法文件类型")
                    }
                }
            },
            upload() {
                this.author = this.user.uName
                if (!this.bName) {
                    alert("标题不能为空")
                    return false
                } else if (this.fileArr.length === 0) {
                    alert("请上传文件")
                    return false
                }
                let tId = this.tId + ""
                let formData = new FormData();
                formData.append('bName', this.bName);
                formData.append('bDesc', this.bDesc);
                formData.append('author', this.author);
                formData.append('tId', tId);
                for(let i = 0; i < this.fileArr.length; i++){
                    formData.append('novel', this.fileArr[i]);
                }
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                };
                axios.defaults.baseURL = 'http://101.43.56.126:8181';
                axios.post("/books/upload", formData, config).then(
                    response => {
                        console.log(response);
                        if (response.data.code >= 200 && response.data.code < 300) {
                            alert("上传成功")
                        } else if (response.data.code === 400) {
                            alert(response.data.message)
                        }
                    },
                    error => {
                        alert(error.message)
                    }
                )
                this.bName = ""
                this.bDesc = ""
                this.tId = 1
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
    span {
        color: red;
    }
    .uploads {  
        position: relative;
        width: 100%;
        height: 100vh;
        background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    }
    form {
        min-width: 600px;
        width: 50%;
        height: 350px;
        padding: 10px 0px 10px 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #d9d9d9;
    }
    form > div {
        position: relative;
        margin: 10px; 
    }
    form > div:nth-child(3){
        position: relative;
    }
    select {
        width: 80%;
        margin-left: 5px;
    }
    input {
        width: 80%;
        margin-left: 5px;
    }
    textarea {
        position: absolute;
        width: 80%;
        left: 77px;
    }
    .info {
        position: absolute;
        left: 40px;
    }
    .tip {
        font-size: 4px;
    }
    #submit {
        position: absolute;
        left: 21%;
        bottom: 8%;
        width: 60px;
        background-color: #3385ff;
        color: whitesmoke;
        border: none;
        height: 25px;
        cursor: pointer;
    }
    #reset {
        position: absolute;
        left: 33%;
        bottom: 8%;
        width: 40px;
        color: black;
        border: none;
        height: 25px;
        cursor: pointer;
    }
</style>