<template>
  <!-- 侧边分类栏 -->
  <div class="nav" :style="{ width: navWidth }">
    <el-col :span="3">
      <el-menu class="el-menu-vertical-demo" :style="{ width: navWidth }">
        <div v-for="item in navList" :key="item.id">
          <!-- 如果有二级分类就显示下拉箭头 -->
          <el-submenu :index="item.index" v-if="item.twoNav.length">
            <template slot="title">
              <span>
                <!-- 一级分类图标 -->
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                <!-- 一级分类名称 -->
                {{ item.oneNav }}
              </span>
            </template>

            <!-- 二级分类 -->
            <el-menu-item-group v-if="item.twoNav.length">
              <el-menu-item
                :index="item.index"
                v-for="item in item.twoNav"
                :key="item.id"
                @click="btn(item.cid)"
              >
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                {{ item.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 如果没有二级分类，就不显示下拉箭头 -->
          <el-menu-item v-else>
            <span slot="title">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              {{ item.oneNav }}
            </span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>

    <!-- 展开 、 收起 -->
    <div class="show" :style="{ left: showLeft }" @click="showBtn">
      <el-button :icon="isIcon" circle></el-button>
    </div>
  </div>
</template>

<script>
import { navListAPI } from "@/api/main";
import bus from "@/eventBus/eventBus";
export default {
  created() {
    this.navList = navListAPI.data;
  },
  data() {
    return {
      navList: [],
      navWidth: "201px",
      showLeft: "210px",
      isIcon: "el-icon-d-arrow-left", //默认展开
    };
  },
  methods: {
    btn(id) {
      // 向Content.vue组件传递数据
      bus.$emit("cateId", id);
    },
    // 点击展开 收起左侧分类栏
    showBtn() {
      const contentLeft =  document.querySelector('.content')
      const toolLeft =  document.querySelector('.tool')
      const searchLeft =  document.querySelector('.search')
      const bannerLeft =  document.querySelector('.banner .box .text')
      // 点击收起 再次点击则展开
      if (this.isIcon === "el-icon-d-arrow-left") {
        // 切换到收起模式
        this.isIcon = "el-icon-d-arrow-right";
        // nav宽度改为0
        this.navWidth = 0;
        // 收起按钮位置调整
        this.showLeft = "20px";

        // 分类栏如果被收起 就让页面整体往左边来点
        bannerLeft.style.paddingLeft = "0"
        searchLeft.style.paddingLeft = "0"
        contentLeft.style.padding = "0 10px 0 0";
        toolLeft.style.right = "90px";
      } else {
        this.isIcon = "el-icon-d-arrow-left";
        this.navWidth = "201px";
        this.showLeft = "210px";

        // 分类栏如果被展开 就让页面整体还原
        bannerLeft.style.paddingLeft = "200px"
        searchLeft.style.paddingLeft = "200px"
        contentLeft.style.padding = "0 10px 0 210px"
        toolLeft.style.right = "40px";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  height: 100%;
  position: fixed;
  width: 201px;
  background-color: var(--body_a);
  box-shadow: 0 1px 3px rgb(107 159 175 / 20%);
  transition: all 0.3s;
  z-index: 2;

  svg {
    margin-right: 5px;
    font-size: 18px;
  }

  // 删除分类小标题多余部分
  .el-submenu /deep/ .el-menu-item-group__title {
    display: none;
  }

  // 分类栏
  .el-menu-vertical-demo {
    overflow: hidden;
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: var(--body-a);
    transition: all 0.3s;
  }

  // 取消导航边框
  .el-menu {
    border: none;
  }

  // 一级分类颜色
  .el-submenu__title span,
  .el-menu-item span {
    color: var(--a);
    transition: all 0.3s;
  }

  // 二级分类文字颜色
  .el-menu-item {
    color: var(--nav_a);
    transition: all 0.3s;
  }

  // 二级分类背景颜色
  .el-menu-item-group {
    background-color: var(--nav_select_hover);
    transition: all 0.3s;
  }

  // 鼠标经过一级分类修改背景颜色
  .el-submenu /deep/ .el-submenu__title:hover {
    background-color: var(--nav_hover) !important;
  }

  // 鼠标经过二级级分类修改背景颜色
  .el-menu-item:hover {
    background-color: var(--nav_hover) !important;
  }

  // 展开 收起按钮
  .show {
    position: absolute;
    top: 50%;
    left: 210px;
    transform: translateY(-50%);
    transition: all 0.3s ease 0s;
  }

  // 展开 收起按钮颜色
  .el-button.is-circle {
    background-color: var(--body_a);
    transition: all 0.3s;
  }

  // 展开 收起边框颜色
  .el-button {
    border: 1px solid var(--nav_show_border);
    transition: all 0.3s;
  }
}
</style>