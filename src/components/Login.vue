<!-- 
Name：BookMark
Author：刘宇阳
GitHub：https://github.com/LiuYuYang01/BookMark
describe：有些梦虽然遥不可及，但并不是不可能实现！
-->

<template>
  <!-- 登录 -->
  <div class="login">
    <!-- LOGO -->
    <div class="title">BookMark</div>

    <div class="from">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.user"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.password"></el-input>
          </el-form-item>

          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        user: "",
        password: ""
      },
    };
  },
  methods:{
    submitForm(){
      
    },
    // 不断旋转达到渐变背景的效果
    gradientTime(){
      setInterval(()=>{
        this.deg += 1

        if(this.deg >= 360){
          this.deg = 0
        }
      },50)
    }
  }
};
</script>

<style lang="less" scoped>
body {
  overflow: hidden;
  height: 1000px;
  background-image: url(../assets/login.svg);
  background-size: cover;
  background-position: center;
}
/* 登 录 */
.login {
  overflow: hidden;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-50%);
  width: 420px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 7px 20px 0 rgb(255 255 255 / 50%);

  .title {
    width: 100%;
    height: 95px;
    line-height: 95px;
    background-color: #727cf5;
    text-align: center;
    color: #fff;
    font-size: 30px;

    img {
      width: 150px;
    }
  }
}

.from {
  width: 90%;
  margin: 20px auto;

  .el-form--label-top .el-form-item__label {
    padding: 0;
  }
  .el-form-item {
    margin-bottom: 10px;
  }
  /deep/.el-input__inner:focus {
    border-color: #727cf5 !important;
  }
  /deep/.el-form-item__label {
    padding: 0;
  }
  .el-button--primary {
    width: 100%;
    color: #fff;
    background-color: #727cf5;
    border-color: #727cf5;
    margin-top: 10px;
  }
  .el-button--primary:active{
    background-color: #7984f7;
  }
}
</style>