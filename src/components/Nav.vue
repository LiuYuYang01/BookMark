<template>
  <!-- 侧边分类栏 -->
  <div class="nav">
    <el-col :span="3">
      <el-menu class="el-menu-vertical-demo">
        <div v-for="(item) in navList" :key="item.id">
          <!-- 如果有二级分类就显示下拉箭头 -->
          <el-submenu :index="item.index" v-if="item.twoNav.length">
            <template slot="title">
              <span>
                <!-- 一级分类图标 -->
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                <!-- 一级分类名称 -->
                {{item.oneNav}}
              </span>
            </template>

            <!-- 二级分类 -->
            <el-menu-item-group v-if="item.twoNav.length">
              <el-menu-item :index="item.index" v-for="(item) in item.twoNav" :key="item.id" @click="btn(item.cid)">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                {{item.title}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 如果没有二级分类，就不显示下拉箭头 -->
          <el-menu-item v-else>
            <span slot="title">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              {{item.oneNav}}
            </span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import { navListAPI } from "@/api/main";
import bus from '@/eventBus/eventBus'
export default {
  created() {
    this.navList = navListAPI.data;
  },
  data() {
    return {
      navList: [],
    };
  },
  methods:{
    btn(id){
      // 向Content.vue组件传递数据
      bus.$emit('cateId',id)
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  height: 100%;
  position: fixed;
  width: 201px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(107 159 175 / 20%);
  z-index: 2;

  svg {
    margin-right: 5px;
    font-size: 18px;
  }

  .el-menu-vertical-demo {
    width: 200px;
  }
}
</style>