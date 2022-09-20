<template>
  <!-- 右侧工具栏 -->
  <div class="tool">
    <ul>
      <li>
        <svg data-v-65af85a3="" aria-hidden="true" class="icon" style="font-size: 20px;">
          <use data-v-65af85a3="" xlink:href="#icon-taiyang-copy-copy"></use>
        </svg>
      </li>

      <li>
        <svg data-v-65af85a3="" aria-hidden="true" class="icon">
          <use data-v-65af85a3="" xlink:href="#icon-icon_yejianqingtian"></use>
        </svg>
      </li>
      
      <li>
        <svg data-v-65af85a3="" aria-hidden="true" class="icon">
          <use data-v-65af85a3="" xlink:href="#icon-biaoqiankuozhan_sousuo-354"></use>
        </svg>
      </li>

      <li>
        <svg data-v-65af85a3="" aria-hidden="true" class="icon">
          <use data-v-65af85a3="" xlink:href="#icon-icon--fanhuidingbu"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tool {
  position: fixed;
  top: 60%;
  right: 40px;

  ul {
    li {
      width: 40px;
      height: 40px;
      line-height: 40px;
      margin: 15px 0px;
      border-radius: 50px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgb(107 159 175 / 20%);
      text-align: center;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>