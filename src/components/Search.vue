<template>
  <div class="search">
    <!-- banner -->
    <div class="banner">
      <!-- 信息 -->
      <div class="text">
        <h2>BookMark</h2>
        <p>一个主页 ~ 整个世界!</p>
      </div>

      <!-- 搜索框 -->
      <div class="search">
        <el-input
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          v-model="value"
          autosize
        >
        </el-input>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,320L1440,192L1440,0L0,0Z"
        ></path>
      </svg>

      <!-- 管理员头像 -->
      <div class="avatar">
        <el-avatar
          shape="square"
          :src="`https://q2.qlogo.cn/headimg_dl?dst_uin=${qq}&spec=100`"
        ></el-avatar>
        <span>管理员：<br /><i style="font-size: 14px">LiuYuYang</i></span>
      </div>
      <!-- https://www.baidu.com/s?wd=刘宇阳&cl=3 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      qq: 3311118881,
    };
  },
  methods: {},
};
</script>

<style lang="less">
.search {
  // 搜索框
  .banner {
    position: relative;
    height: 380px;
    background-color: #fff;

    // 信息
    .text {
      position: absolute;
      left: 55%;
      transform: translateX(-50%);
      margin-top: 45px;
      color: #fff;
      text-align: center;

      h2 {
        font-size: 45px;
      }

      p {
        margin-top: 10px;
      }
    }

    // 搜索框宽度
    .search {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 800px;
      margin: 0 auto;
      margin-top: 180px;
      margin-left: 90px;

      .el-input--suffix .el-input__inner {
        border-radius: 30px;
        border: none !important;
      }
      .el-input__icon::before {
        display: inline-block;
        width: 50px;
        font-size: 20px !important;
        margin-left: -30px;
        cursor: pointer;
      }
    }

    .avatar {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 40px;
      right: 100px;

      span {
        color: #333;
        margin-left: 10px;
        font-family: "黑体";
      }
    }
  }
}
</style>