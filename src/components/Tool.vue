<template>
  <!-- 右侧工具栏 -->
  <div class="tool">
    <ul>
      <!-- 白天 昼夜切换 -->
      <el-tooltip class="item" effect="dark" content="太阳 昼夜模式切换" placement="left">
        <li @click="isDayAndNight">
          <svg data-v-65af85a3="" aria-hidden="true" class="icon" style="font-size: 20px" >
            <use data-v-65af85a3="" :xlink:href="icon"></use>
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
</template>

<script>
export default {
  created() {
    this.theme()
  },
  data() {
    return {
      root: document.querySelector(":root"),
      icon: "#icon-taiyang-copy-copy",
      template: {},
    };
  },
  methods: {
    //  昼夜切换
    isDayAndNight() {
      if (this.icon === "#icon-taiyang-copy-copy") {
        // 切换到昼夜模式
        this.icon = "#icon-icon_yejianqingtian";

        // 昼夜主题
        this.template = {
          state:"#icon-icon_yejianqingtian",
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
        console.log('2',JSON.parse(localStorage.getItem("theme")) || {});
      } else {
        // 切换到太阳模式
        this.icon = "#icon-taiyang-copy-copy";

        // 太阳主题
        this.template = {
          state:"#icon-taiyang-copy-copy",
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
        console.log('3',JSON.parse(localStorage.getItem("theme")) || {});
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
      this.template = JSON.parse(localStorage.getItem("theme")) || {};
  
      // 记录上一次是白天 还是 黑夜状态
      if(this.template.state){
        this.icon = this.template.state

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
  }
};
</script>

<style lang="less" scoped>
.tool {
  position: fixed;
  top: 60%;
  right: 40px;

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
</style>