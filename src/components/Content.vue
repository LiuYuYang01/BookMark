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
        </h3>

        <!-- 导航栏 -->
        <div class="box">
          <div class="nav" v-for="obj in item.data" :key="obj.id">
            <a :href="obj.url">
              <!-- 导航名称 -->
              <div class="title">
                <div>
                  <!-- 导航logo -->
                  <img :src="obj.image" alt="" />
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
            <a :href="obj.url">
              <!-- 导航名称 -->
              <div class="title">
                <div>
                  <!-- 导航logo -->
                  <img :src="obj.image" alt="" />
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

    <!-- 没有内容就不显示底部 -->
    <div v-else>
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>

<script>
import { listAPI } from "@/api/main";
import bus from "@/eventBus/eventBus";
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },
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
  watch: {
    cid(id) {
      // 查询当前分类有没有内容，返回一个布尔值
      const item = this.list.find((item) => item.cid === id);
      this.isShow = !Boolean(item);
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

  .item {
    margin-bottom: 10px;

    // 为什么这里匹配不到最后一项
    // &:last-of-type {
    //   margin-bottom: 100px !important;
    // }

    .nav_title {
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px #dfdfdf solid;
      background-color: #fff;
      color: #333;
      font-weight: 400;

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
      border: 1px #dfdfdf solid;
      background-color: #fff;
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
          }

          p {
            position: relative;

            &::after {
              content: "";
              position: absolute;
              top: 25px;
              left: 0px;
              width: 0%;
              height: 2px;
              border-radius: 5px;
              background-color: #3698fd;
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
          color: #666;
          line-height: 20px;
          font-family: 宋体;
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