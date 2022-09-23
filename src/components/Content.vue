<!-- 
Name：BookMark
Author：刘宇阳
GitHub：https://github.com/LiuYuYang01/BookMark
describe：有些梦虽然遥不可及，但并不是不可能实现！
-->

<template>
  <div class="content">
    <!-- 渲染导航 -->
    <div class="item" v-for="item in list" :key="item.id">
      <!-- 默认显示全部 -->
      <div v-if="cid === 0">
        <!-- 分类名称 -->
        <h3 class="nav_title">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
          {{ item.title }}

          <!-- 导航展开 收起 切换按钮 -->
          <el-tooltip class="item" effect="dark" content="展开 收起" placement="left">
            <div class="item_show" @click="isItem_Show(item.id)">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.iconShow"></use>
              </svg>
            </div>
          </el-tooltip>
        </h3>

        <!-- 导航栏 -->
        <!-- 如果为展开状态就显示，反之隐藏 -->
        <div class="box" v-show="item.iconShow === '#icon-zhankai1'">
          <div class="nav" v-for="obj in item.data" :key="obj.id">
            <a target="_blank" :href="obj.url">
              <!-- 导航名称 -->
              <div class="title">
                <div>
                  <!-- 如果有图片logo就显示图片logo，如果没有就显示名称首位 -->
                  <!-- 导航logo -->
                  <img :src="obj.image" alt="" v-if="obj.image != ''" />
                  <!-- 将名称拿到首位 -->
                  <div class="logo" v-else>{{ obj.title | titleLogo }}</div>
                  <p>{{ obj.title }}</p>
                </div>

                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-10_fasong"></use>
                </svg>
              </div>

              <!-- 概况 -->
              <div class="info">
                <p>{{ obj.info }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- 点击哪个分类就显示哪个分类的导航 -->
      <div v-else-if="item.cid === cid">
        <!-- 分类名称 -->
        <h3 class="nav_title">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
          {{ item.title }}
        </h3>

        <!-- 导航栏 -->
        <div class="box">
          <div class="nav" v-for="obj in item.data" :key="obj.id">
            <a target="_blank" :href="obj.url">
              <!-- 导航名称 -->
              <div class="title">
                <div>
                  <!-- 如果有图片logo就显示图片logo，如果没有就显示名称首位 -->
                  <!-- 导航logo -->
                  <img :src="obj.image" alt="" v-if="Boolean(obj.image)" />
                  <!-- 将名称拿到首位 -->
                  <div class="logo" v-else>{{ obj.title | titleLogo }}</div>
                  <p>{{ obj.title }}</p>
                </div>

                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-10_fasong"></use>
                </svg>
              </div>

              <!-- 概况 -->
              <div class="info">
                <p>{{ obj.info }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 如果没有内容，就显示暂无内容图标 -->
    <div class="isShow" v-if="isShow">
      <img src="../assets/none.png" alt="" />
    </div>
  </div>
</template>

<script>
import { listAPI } from "@/api/main";
import bus from "@/eventBus/eventBus";
export default {
  created() {
    // 接收Nav.vue组件传递过来的数据
    bus.$on("cateId", (id) => {
      this.cid = id;
      console.log(id);
    });
  },
  data() {
    return {
      list: listAPI.data,
      cid: 0,
      isShow: null,
    };
  },
  methods: {
    isItem_Show(id) {
      // 查询被点击的那一项
      const item = this.list.find((item) => item.id === id);

      // 如果为展开就变成收起 反之收起就变成展开
      item.iconShow === "#icon-zhankai1" ? item.iconShow = "#icon-shouqi1" :  item.iconShow = "#icon-zhankai1"
    },
  },
  watch: {
    cid(id) {
      // 查询当前分类有没有内容，返回一个布尔值
      const item = this.list.find((item) => item.cid === id);
      this.isShow = !Boolean(item);
    },
  },
  filters: {
    // 将名称过滤为首字 如：宇阳  过滤为：宇
    titleLogo(val) {
      // 取名称的第一位
      return val.charAt(0);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 1250px;
  padding: 0 10px 0 210px;
  margin: 0 auto;
  margin-top: 10px;
  transition: all 0.3s;

  .item {
    margin-bottom: 10px;

    .nav_title {
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid var(--nav_show_border);
      background-color: var(--body_a);
      color: var(--a);
      font-weight: 400;
      transition: all 0.3s;

      .item_show {
        float: right;
        width: 50px;
        text-align: center;
        user-select: none;
        cursor: pointer;
      }

      svg {
        margin-right: 10px;
      }
    }

    .box {
      display: flex;
      flex-wrap: wrap;
    }

    .nav {
      width: 300px;
      height: 150px;
      padding: 15px;
      margin: 0 16px 10px 0;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid var(--nav_show_border);
      background-color: var(--body_a);
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        margin-top: -5px;
        box-shadow: 0 1px 3px rgb(107 159 175 / 20%);
      }

      &:nth-of-type(4n) {
        margin-right: 0;
      }

      &:hover .title div p::after {
        width: 100%;
      }

      // 导航名称
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
          display: flex;
          align-items: center;

          img {
            width: 50px;
            height: 50px;
            margin-right: 15px;
            border-radius: 50px;
            transition: all 0.3s;
          }

          .logo {
            display: block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            margin-right: 15px;
            border-radius: 50px;
            background: linear-gradient(90deg, #5ccdf3 0%, #2790fd 100%);
            font-size: 25px;
            color: #fff;
            text-align: center;
            transition: all 0.3s;
          }

          p {
            position: relative;
            color: var(--a);
            transition: all 0.3s;

            &::after {
              content: "";
              position: absolute;
              top: 25px;
              left: 0px;
              width: 0%;
              height: 2px;
              border-radius: 5px;
              background-color: #727cf5;
              transition: all 0.3s;
            }
          }
        }

        svg {
          font-size: 35px;
          margin-top: -30px;
          margin-right: -10px;
        }
      }

      // 概况
      .info {
        p {
          display: -webkit-box !important;
          overflow: hidden;
          word-break: break-all;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          font-size: 15px;
          color: var(--nav_b);
          line-height: 20px;
          font-family: "宋体";
          margin-top: 10px;
        }
      }
    }
  }

  .isShow {
    img {
      position: absolute;
      top: 55%;
      left: 40%;
      width: 20%;
      height: 30%;
    }
  }
}
</style>