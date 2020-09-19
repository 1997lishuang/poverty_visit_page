<template>
  <!-- <div id="top"></div> -->
  <div class="one">
    <div id="top">


    </div>
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px" class="login-box">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import loginApi from '@/api/login'
  import storage from "@/utils/storage.js"




  export default {
    data(){
      return {
        loginForm:{
          username: '',
          password: '',
        },

        // 对表单的验证
        loginFormRules:{
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
          ],
        },
      }
    },
    mounted(){
      this.$nextTick(function () {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + "年" + month + "月" + strDate
          + "日" +"&nbsp"+date.getHours() + "时" + date.getMinutes()
          + "分" + date.getSeconds()+"秒"

        var dom
        dom = document.getElementById("top")
        dom.innerHTML=  currentdate
      })
    },
    created() {
      //调用精准扶贫信息查询接口

      // this.data6 = 接口返回的数据
    },
    methods:{

      resetloginForm(){
        console.log(this)
        this.$refs.loginFormRef.resetFields();
      },
      login(){
        var username
        username = this.loginForm.username
        var password
        password = this.loginForm.password


        loginApi.login(username,password)
          .then(response=>{
            console.log(response.data)
            //将用户的id 存入到localstore中
            var id = storage.set("loginInfoId",1)

            this.$router.push('/')
          })
      }
    },
  };
</script>
<style>

  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .login-title{
    text-align: center;
  }
  .login-box{
    text-align: center;
    width: 400px;
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 150px;
    padding: 20px 50px 20px 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px;
  }
</style>
