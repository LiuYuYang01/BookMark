<!-- 
Name：BookMark
Author：刘宇阳
GitHub：https://github.com/LiuYuYang01/BookMark
describe：有些梦虽然遥不可及，但并不是不可能实现！
 -->
 
<template>
  <div class="search">
    <input type="text" placeholder="搜你喜欢!" v-model="value" @keydown.enter="btn" />
    <span @click="btn"><i class="el-icon-search" :style="{ color: '#666' }"></i></span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value:""
        }
    },
    methods:{
        btn(){
            window.open(`https://www.baidu.com/s?wd=${this.value}&cl=3`)
        }
    }
};
</script>

<style lang="less" scoped>
.search {
  position: absolute;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 40px;
  padding-left: 200px;
  transition: all 0.3s;

  input {
    width: 100%;
    height: 40px;
    padding-left: 20px;
    border-radius: 50px;
    border: none;
    box-sizing: border-box;
    color: #666;
    outline: none;
  }

  span {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 60px;
    height: 40px;
    line-height: 40px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #fff;
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;

    &:hover{
        background-color: #e7f3ff;
    }
  }
}
</style>