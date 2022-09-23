<!-- 
Name：BookMark
Author：刘宇阳
GitHub：https://github.com/LiuYuYang01/BookMark
describe：有些梦虽然遥不可及，但并不是不可能实现！
-->

<template>
  <div>
    <!-- 侧边分类栏 -->
    <Nav></Nav>
    <!-- Banner -->
    <Banner></Banner>
    <!-- 导航 -->
    <Content></Content>
    <!-- 右侧工具栏 -->
    <Tool></Tool>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Content from "@/components/Content";
import Tool from "@/components/Tool";
import Search from "@/components/Search";
export default {
  components: { Nav, Banner, Content, Tool, Search },
};
</script>

<style>
</style>