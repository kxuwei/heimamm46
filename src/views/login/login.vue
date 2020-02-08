<template>
  <div class="box">
    <div class="leftBox">
      <div class="left-top">
        <div class="topbox">
          <img src="../../assets/1贝.png" alt />
          <span class="top-a">黑马面面</span>
          <span class="top-b"></span>
          <span class="top-c">用户登陆</span>
        </div>
        <div class="reader">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-user" v-model="input1" class="content"></el-input>
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
            v-model="input2"
            class="powss"
          ></el-input>
          <el-row>
            <el-col :span="17">
              <div class="grid-content bg-purple">
                <el-input
                  placeholder="请输入验证码"
                  prefix-icon="el-icon-key"
                  v-model="input3"
                  class="authcode"
                ></el-input>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content bg-purple-light">
                <img src="../../assets/login_captcha.png" class="image" alt />
              </div>
            </el-col>
          </el-row>
          <el-checkbox v-model="checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
          <el-button type="primary" class="login">登录</el-button>
          <el-button type="primary" class="login-a">注册</el-button>
        </div>
      </div>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      input1: "",
      input2: "",
      input3: ""
    };
  }
};
</script>
<style lang="less">
.box {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
  .leftBox {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    .topbox {
      margin-left: 48px;
      display: flex;
      align-items: center;
      margin-top: 44px;
      img {
        margin-right: 16px;
      }
      .top-a {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .top-b {
        margin-left: 14px;
        margin-right: 13px;
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        display: inline-block;
      }
      .top-c {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    input {
      width: 100%;
      height: 100%;
    }
    .content {
      width: 394px;
      height: 45px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      margin: 29px 41px 25px 43px;
    }
    .powss {
      width: 393px;
      height: 43px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      margin: 0px 41px 25px 43px;
    }
    .el-row{
      margin: 0px 41px 32px 42px;
      .el-input__inner,
      .image {
        width: 100%;
        height: 44px;
      }
    }  
    .el-checkbox {
      display: flex;
      margin-left: 44px;
      align-items: center;
      .el-checkbox__label{
        display: flex;
        align-items: center;
      }
    }
    .login {
      margin: 28px 42px 26px 42px;
      width: 394px;
      height: 40px;
      background: rgba(20, 147, 250, 1);
      border-radius: 4px;
    }
    .login-a {
      margin: 0px 42px 26px 42px;
      width: 394px;
      height: 40px;
      background: rgba(20, 147, 250, 1);
      border-radius: 4px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
  }
}
</style>