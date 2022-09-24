<!-- 
Name：BookMark
Author：刘宇阳
GitHub：https://github.com/LiuYuYang01/BookMark
describe：有些梦虽然遥不可及，但并不是不可能实现！
-->

<template>
  <div class="Popover" :style="{display:flag ? 'block' : 'none'}">
    <div class="box" :style="{display:flag ? 'block' : 'none'}">
      <div class="title">登录</div>

      <div class="from">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
          <el-form-item label="用户名">
            <el-input v-model.trim="formLabelAlign.user"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model.trim="formLabelAlign.password"></el-input>
          </el-form-item>

          <el-button type="primary" @click="submitForm"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>

    <!-- 遮罩层 -->
    <div class="mask" @click="flag = false"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        user: "",
        password: "",
      },
      flag:false
    };
  },
  methods: {
    submitForm(){
      // 判断是否为空
      if(!this.formLabelAlign['user'] || !this.formLabelAlign['password']) return this.$message.error('用户名或密码不能为空!')
      
      // 判断账号密码是否输入正确
      if(this.formLabelAlign['user'] != "admin" || this.formLabelAlign['password'] != 123456){
        this.$message.error('请检查用户名或密码是否正确!')
      }else{
        this.$message({
          message: '恭喜你，登录成功!',
          type: 'success'
        });
      }
    }
  },
};
</script>

<style lang="less" scoped>
.isShow{
  display: none;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  z-index: 2;
}

.box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgb(121 122 243 / 20%);
  z-index: 3;

  .title {
    text-align: center;
    color: #333;
    font-size: 18px;
  }

  // 表单
  .from {
    width: 100%;
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
    .el-button--primary:active {
      background-color: #7984f7;
    }
  }
}
</style>