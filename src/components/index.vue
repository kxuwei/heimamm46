<template>
  <el-container class="container">
    <el-header>
      <div class="left">
        <i class="el-icon-s-fold"></i>
        <img src="../assets/1贝.png" alt class="image" />
        <span class="title">黑马面面</span>
      </div>
      <div class="right">
        <img :src="usering" class="userimg" />
        <span class="user">{{user}}</span>
        <el-button type="primary" class="exit">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import { info } from "@/abi/index.js";
export default {
  data() {
    return {
      usering: "",
      user: ""
    };
  },
  created() {
    info().then(res => {
      window.console.log(res);
      this.usering = process.env.VUE_APP_URL + "/" + res.data.data.avatar;
      this.user = res.data.data.username;
    });
  }
};
</script>
<style lang="less">
.container {
  height: 100%;
  .el-header {
    background-color: aquamarine;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .image {
        width: 33px;
        height: 28px;
        display: inline-block;
        margin-left: 22px;
      }
      .el-icon-s-fold {
        width: 24px;
        height: 20px;
        display: inline-block;
        margin-left: 4px;
      }
      .title {
        color: #49a1ff;
        font-size: 22px;
        display: inline-block;
        margin-left: 11px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .userimg {
        width: 43px;
        height: 43px;
        display: inline-block;
        margin-right: 9px;
      }
      .exit{
          margin-left: 38px;
      }
    }
  }
  .el-aside {
    background-color: pink;
  }
  .el-main {
    background-color: red;
  }
}
</style>