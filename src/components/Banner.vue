<template>
  <div class="banner">
    <!-- box -->
    <!-- <div class="box" :style="{backgroundImage:`linear-gradient(${deg}deg, #21D4FD 0%, #B721FF 100%)`}"> -->
    <div class="box" :style="{backgroundImage:`linear-gradient(${deg}deg, #6284FF, #9599E2, #4d87fd, #FFBBEC)`}">
      <!-- 信息 -->
      <div class="text">
        <h2>BookMark</h2>
        <p>一个主页 ~ 整个世界!</p>
      </div>

      <!-- 搜索框 -->
      <Search></Search>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
export default {
  created() {
    this.gradientTime()
  },
  data() {
    return {
      value: "",
      deg: 153
    };
  },
  methods:{
    // 不断旋转达到渐变背景的效果
    gradientTime(){
      setInterval(()=>{
        this.deg += 1

        if(this.deg >= 360){
          this.deg = 0
        }
      },50)
    }
  },
  components: { Search },
};
</script>

<style lang="less">
.banner {
  // 搜索框
  .box {
    position: relative;
    height: 380px;
    // background-color: #4d87fd;
    background-color: #0093e9;
    background-size: 400% 400%;
    box-shadow: 0 1px 3px rgb(107 159 175 / 20%);

    // 信息
    .text {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 75px;
      color: #fff;
      text-align: center;
      padding-left: 200px;
      transition: all 0.3s;

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