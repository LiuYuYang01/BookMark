<!-- 
Name：BookMark
Author：刘宇阳
GitHub：https://github.com/LiuYuYang01/BookMark
describe：有些梦虽然遥不可及，但并不是不可能实现！
-->

<template>
  <div class="none">
    <img src="../assets/404.png" alt="">

    <!-- 回到主页 -->
    <el-button type="primary" size="mini" class="home" @click="go('/home')" round>回到主页</el-button>
  </div>
</template>

<script>
import Search from "@/components/Banner.vue";
import Content from "@/components/Content.vue";
export default {
  components: { Search, Content },
  methods:{
    // 点击回跳转到主页
    go(path){
        this.$router.push({
            path
        })
    }
  }
};
</script>

<style lang="less" scoped>
body {
  background-color: #fff;
}
.none {
  img {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 30%;
  }

  .home{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>