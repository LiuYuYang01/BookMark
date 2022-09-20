<template>
  <div class="search">
    <input type="text" />
    <i class="el-icon-search" :style="{ color: '#666' }"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.search {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 40px;
  padding-left: 200px;

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

  i {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}
</style>