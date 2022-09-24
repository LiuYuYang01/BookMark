<!-- 
Name：BookMark
Author：刘宇阳
GitHub：https://github.com/LiuYuYang01/BookMark
describe：有些梦虽然遥不可及，但并不是不可能实现！
-->

<template>
<div class="tool">
  <!-- 右侧工具栏 -->
  <div class="box">
    <ul>
      <!-- 管理员登录 -->
      <el-tooltip class="item" effect="dark" :content="isLoginText" placement="left">
        <li @click="isLogin">
          <svg data-v-65af85a3="" aria-hidden="true" class="icon icon16px">
            <use data-v-65af85a3="" :xlink:href="isLoginIcon"></use>
          </svg>
        </li>
      </el-tooltip>

      <!-- 白天 昼夜切换 -->
      <el-tooltip class="item" effect="dark" :content="isDayAndNightText" placement="left">
        <li @click="isDayAndNight">
          <svg data-v-65af85a3="" aria-hidden="true" class="icon icon16px">
            <use data-v-65af85a3="" :xlink:href="isDayAndNightIcon"></use>
          </svg>
        </li>
      </el-tooltip>
      
      <!-- 搜索 -->
      <el-tooltip class="item" effect="dark" content="搜你喜欢" placement="left">
        <li>
          <svg data-v-65af85a3="" aria-hidden="true" class="icon">
            <use data-v-65af85a3="" xlink:href="#icon-biaoqiankuozhan_sousuo-354" ></use>
          </svg>
        </li>
      </el-tooltip>

      <!-- 系统设置 -->
      <el-tooltip class="item" effect="dark" content="全局设置" placement="left" v-show="isLoginShow">
        <li>
          <svg data-v-65af85a3="" aria-hidden="true" class="icon">
            <use data-v-65af85a3="" xlink:href="#icon-shezhi-17"></use>
          </svg>
        </li>
      </el-tooltip>

      <!-- 返回顶部 -->
      <el-tooltip class="item" effect="dark" content="回到顶部" placement="left">
        <li @click="returnTop">
          <svg data-v-65af85a3="" aria-hidden="true" class="icon">
            <use data-v-65af85a3="" xlink:href="#icon-icon--fanhuidingbu"></use>
          </svg>
        </li>
      </el-tooltip>
    </ul>
  </div>

  <Popover></Popover>
</div>
</template>

<script>
import Popover from '@/components/Popover'
export default {
  created() {
    this.theme()
    this.login()
  },
  data() {
    return {
      root: document.querySelector(":root"),
      template: JSON.parse(localStorage.getItem("theme")) || {},
      isDayAndNightIcon: "#icon-taiyang-copy-copy",
      isDayAndNightText:"切换昼夜模式",
      isLoginIcon:"#icon-yonghu1",
      isLoginText:"登录",
      isLoginShow:false,
      isLoginState: JSON.parse(localStorage.getItem('isLoginState')) || {}
    };
  },
  components:{Popover},
  methods: {
    //  昼夜切换
    isDayAndNight() {
      if (this.isDayAndNightIcon === "#icon-taiyang-copy-copy") {
        // 切换到昼夜模式
        this.isDayAndNightIcon = "#icon-icon_yejianqingtian";
        this.isDayAndNightText = "切换太阳模式";

        // 昼夜主题
        this.template = {
          isDayAndNightIcon:"#icon-icon_yejianqingtian",
          isDayAndNightText:"切换太阳模式",
          body: "#151617",
          body_a: "#1d1f20",
          a: "#fff",
          nav_hover: "#2d3132",
          nav_a: "#a4a8b4",
          nav_b: "#a4a8b4",
          nav_select_hover: "#292a2c",
          nav_show_border: "#292a2c",
        };

        // 持久化到本地存储
        localStorage.setItem("theme", JSON.stringify(this.template));
      } else {
        // 切换到太阳模式
        this.isDayAndNightIcon = "#icon-taiyang-copy-copy";
        this.isDayAndNightText = "切换昼夜模式";

        // 太阳主题
        this.template = {
          isDayAndNightIcon:"#icon-taiyang-copy-copy",
          isDayAndNightText:"切换昼夜模式",
          body: "#f7f7f7",
          body_a: "#fff",
          a: "#333",
          nav_hover: "#ecf5ff",
          nav_a: "#333",
          nav_b: "#666",
          nav_select_hover: "#fbfbfb",
          nav_show_border: "#DCDFE6"
        };

        localStorage.setItem("theme", JSON.stringify(this.template));
      }

      // 主题切换
      this.root.style.setProperty("--body", this.template.body);
      this.root.style.setProperty("--body_a", this.template.body_a);
      this.root.style.setProperty("--a", this.template.a);
      this.root.style.setProperty("--nav_hover", this.template.nav_hover);
      this.root.style.setProperty("--nav_a", this.template.nav_a);
      this.root.style.setProperty("--nav_b", this.template.nav_b);
      this.root.style.setProperty("--nav_select_hover",this.template.nav_select_hover);
      this.root.style.setProperty("--nav_show_border",this.template.nav_show_border);
    },
    // 记录上一次是白天 还是 黑夜状态
    theme(){
      // 记录上一次是白天 还是 黑夜状态
      if(this.template.isDayAndNightIcon){
        this.isDayAndNightIcon = this.template.isDayAndNightIcon
        this.isDayAndNightText = this.template.isDayAndNightText

        this.root.style.setProperty("--body", this.template.body);
        this.root.style.setProperty("--body_a", this.template.body_a);
        this.root.style.setProperty("--a", this.template.a);
        this.root.style.setProperty("--nav_hover", this.template.nav_hover);
        this.root.style.setProperty("--nav_a", this.template.nav_a);
        this.root.style.setProperty("--nav_b", this.template.nav_b);
        this.root.style.setProperty("--nav_select_hover",this.template.nav_select_hover);
        this.root.style.setProperty("--nav_show_border",this.template.nav_show_border);
      }
    },
    // 返回顶部
    returnTop() {
      // 获取当前距离
      let top = window.pageYOffset;

      let time = setInterval(function () {
        top -= 10;
        window.scroll(0, top);
        // 当前位置小于0时就当前位置等于0
        if (top <= 0) {
          fn();
        }
      });

      // 调用 停止滚动
      function fn() {
        window.scroll(0, 0);
        clearInterval(time);
      }
    },
    // 判断是否登录成功
    isLogin(){
      if(this.isLoginIcon === "#icon-yonghu1"){
        this.isLoginIcon = "#icon-tuichu";
        this.isLoginText = "退出";
        this.isLoginShow = true

        this.isLoginState.isLoginIcon = "#icon-tuichu";
        this.isLoginState.isLoginText = "退出";
        this.isLoginState.isLoginShow = true;
      }else{
        this.isLoginIcon = "#icon-yonghu1";
        this.isLoginText = "登录";
        this.isLoginShow = false

        this.isLoginState.isLoginIcon = "#icon-yonghu1";
        this.isLoginState.isLoginText = "登录";
        this.isLoginState.isLoginShow = false;
      }
      localStorage.setItem('isLoginState',JSON.stringify(this.isLoginState))
      console.log(JSON.parse(localStorage.getItem('isLoginState')) || {});
    },
    // 记录上一次是登录 还是 退出状态
    login(){
      if(this.isLoginState.isLoginIcon){
        this.isLoginIcon = this.isLoginState.isLoginIcon;
        this.isLoginText = this.isLoginState.isLoginText;
        this.isLoginShow = this.isLoginState.isLoginShow;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  position: fixed;
  top: 60%;
  right: 40px;
  transition: all 0.3s;

  ul {
    li {
      width: 40px;
      height: 40px;
      line-height: 40px;
      margin: 15px 0px;
      border-radius: 50px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgb(107 159 175 / 20%);
      text-align: center;
      font-size: 18px;
      // 不允许复制
      user-select: none;
      // 鼠标变小手
      cursor: pointer;
    }
  }
}
.icon16px{
  font-size: 20px;
}
</style>