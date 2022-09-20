<template>
  <div>
    <!-- 侧边分类栏 -->
    <Nav></Nav>
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 导航 -->
    <Content></Content>
    <!-- 右侧工具栏 -->
    <Tool></Tool>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import Content from "@/components/Content";
import Tool from "@/components/Tool";
export default {
  components: { Nav, Search, Content, Tool },
};
</script>

<style>
</style>