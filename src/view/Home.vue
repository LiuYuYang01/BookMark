<template>
  <div>
    <!-- 侧边分类栏 -->
    <Nav></Nav>
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 导航 -->
    <Content></Content>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import Content from "@/components/Content";
export default {
  components: { Nav, Search, Content },
};
</script>

<style>
</style>