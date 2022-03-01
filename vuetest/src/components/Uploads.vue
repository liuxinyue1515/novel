<template>
    
    <div class="uploads">
        <form action="">
            <div>
                <label for="title"><span>*</span>小说标题</label>
                <input type="text" id="title"><br>
            </div>
            <div>
                <label for="category"><span>*</span>小说类别</label>
                <select name="category" id="category">
                    <option value="1">玄幻小说</option>
                    <option value="2">修真小说</option>
                    <option value="3">都市小说</option>
                    <option value="4">穿越小说</option>
                    <option value="5">网游小说</option>
                    <option value="6">科幻小说</option>
                    <option value="7">其他小说</option>
                </select>
            </div>
            <div>
                <label for="file"><span>*</span>小说文件</label>
                <input type="file" id="file" accept="text/plain"><br>
            </div>
            <div>
                <label for="cover"><span>*</span>封面图片</label>
                <input type="text" id="cover" placeholder="图片路径"><br>
            </div>
            <div>
                <label for="bDesc" class="info">简介</label>
                <textarea name="bDesc" id="bDesc" cols="30" rows="10"></textarea><br>
            </div>
            <button type="submit" id="submit">上传</button>
            <button type="reset" id="reset">重置</button>
        </form>
    </div>

</template>

<script>
    export default {
        name: "Uploads",
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
    #submit {
        position: absolute;
        left: 21%;
        bottom: 2%;
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
        bottom: 2%;
        width: 40px;
        color: black;
        border: none;
        height: 25px;
        cursor: pointer;
    }
</style>