<template>
  <el-container class="container">
    <el-header>
      <div class="left">
        <i class="el-icon-s-fold" @click=" isCollapse=!isCollapse"></i>
        <img src="../assets/1贝.png" alt class="image" />
        <span class="title">黑马面面</span>
      </div>
      <div class="right">
        <img :src="usering" class="userimg" />
        <span class="user">{{user}}.您好!</span>
        <el-button type="primary" class="exit" @click="logoutclick">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <el-menu
          router
          :collapse="isCollapse"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="/index/chart">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据概览</span>
          </el-menu-item>
          <el-menu-item index="/index/user">
            <i class="el-icon-user"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item index="/index/question">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">题库列表</span>
          </el-menu-item>
          <el-menu-item index="/index/enterprise">
            <i class="el-icon-office-building"></i>
            <span slot="title">企业列表</span>
          </el-menu-item>
          <el-menu-item index="/index/subject">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">学科列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { logout } from "@/abi/index.js";
import { removeToken } from "@/untils/token.js";
export default {
  name:'index',
  data() {
    return {
      usering: "",
      user: "",
      isCollapse: false
    };
  },
  // beforeCreate() {
  //   if (getToken() == undefined) {
  //     this.$message.warning("您好! 游客,请登录");
  //     this.$router.push("/login");
  //   }
  // },
  // created() {
  //   info().then(res => {
  //     window.console.log(res);
  //      this.usering = process.env.VUE_APP_URL + "/" + res.data.data.avatar;
  //     this.user = res.data.data.username;
  //   //  if (res.data.code==206) {
  //   //    this.$message.error('登录异常')
  //   //    removeToken()
  //   //    this.$router.push('/login')
  //   //  }else if (res.data.code==200) {
  //   //    this.usering = process.env.VUE_APP_URL + "/" + res.data.data.avatar;
  //   //   this.user = res.data.data.username;
  //   //  }
  //   });
  // },
  methods: {
    logoutclick() {
      this.$confirm("确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        logout()
          .then(res => {
            window.console.log(res);
            if (res.data.code == 200) {
              removeToken();
              this.$router.push("/login");
            }
          })
          .catch(() => {});
      });
    }
  }
};
</script>
<style lang="less">
.container {
  height: 100%;
  .el-header {
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
        border-radius: 43px;
      }
      .exit {
        margin-left: 38px;
      }
    }
  }
  .el-main {
    background-color: red;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>