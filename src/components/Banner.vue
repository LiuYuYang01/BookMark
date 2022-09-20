<template>
  <div class="banner">
    <!-- box -->
    <div class="box">
      <!-- 信息 -->
      <div class="text">
        <h2>BookMark</h2>
        <p>一个主页 ~ 整个世界!</p>
      </div>

      <!-- 搜索框 -->
      <Search></Search>

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
import Search from "@/components/Search";
export default {
  data() {
    return {
      value: "",
      qq: 3311118881,
    };
  },
  components:{Search}
};
</script>

<style lang="less">
.banner {
  // 搜索框
  .box {
    position: relative;
    height: 380px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgb(107 159 175 / 20%);

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