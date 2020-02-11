<template>
  <div class="box">
    <register ref="register"></register>
    <div class="leftBox">
      <div class="left-top">
        <div class="topbox">
          <img src="../../assets/1贝.png" alt />
          <span class="top-a">黑马面面</span>
          <span class="top-b"></span>
          <span class="top-c">用户登陆</span>
        </div>
        <div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="43px" 
            class="demo-ruleForm"
          >
            <el-form-item prop="phone">
              <el-input
                placeholder="请输入手机号"
                prefix-icon="el-icon-user"
                v-model="ruleForm.phone"
                class="content"
              ></el-input>
            </el-form-item>
            <el-form-item prop="powss">
              <el-input
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                show-password
                v-model="ruleForm.powss"
                class="powss"
              ></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-row>
                <el-col :span="17">
                  <div class="grid-content bg-purple">
                    <el-input
                      placeholder="请输入验证码"
                      prefix-icon="el-icon-key"
                      v-model="ruleForm.code"
                      class="authcode"
                    ></el-input>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="grid-content bg-purple-light">
                    <img @click="codeclick" :src="codeurl" class="image" alt />
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item prop="type">
              <el-checkbox v-model="ruleForm.type" name="type">
                我已阅读并同意
                <el-link type="primary">用户协议</el-link>和
                <el-link type="primary">隐私条款</el-link>
              </el-checkbox>
            </el-form-item>
            <el-button type="primary" class="login" @click="submitForm('ruleForm')">登录</el-button>
            <el-button type="primary" class="login-a" @click="visibli">注册</el-button>
          </el-form>
        </div>
      </div>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>
<script>
import register from '../components/register'
import {checkphone} from '@/untils/validators.js'
export default {
  name: "login",
  data() {
    return {
      codeurl:process.env.VUE_APP_URL + "/captcha?type=login",
      ruleForm: {
        phone: "",
        type: [],
        powss: "",
        code: ""
      },
      rules: {
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { validator: checkphone, trigger: "blur" }
        ],
        powss: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6到 12 个字符", trigger: "blur" }
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "长度在 4 个字符", trigger: "blur" }
        ],
        type: [
           { type: 'array', required: true, message: '请勾选', trigger: 'change' }
         ],
      }
    };
  },
  components:{
    register,
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('验证成功')
            
          } else {
            this.$message.error('验证失败')
            return false;
          }
        });
      },
      visibli(){
        this.$refs.register.dialogFormVisible = true
      },
      codeclick(){
        this.codeurl= process.env.VUE_APP_URL + "/captcha?type=login&t=" + Date.now();
      },
  },
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
      margin-top: 29px;
      margin-right: 41px;
    }
    .powss {
      width: 393px;
      height: 43px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      margin-top: 13px;
      margin-right: 41px;
    }
    .el-row {
      margin-top:14px;
      margin-right: 41px;
      .el-input__inner,
      .image {
        width: 100%;
        height: 44px;
      }
    }
    .el-form-item__content{
      line-height: 0;
    }
    .el-checkbox {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .el-checkbox__label {
        display: flex;
        align-items: center;
      }
    }
    .login {
      margin: 6px 42px 26px 42px;
      width: 394px;
      height: 40px;
      background: rgba(20, 147, 250, 1);
      border-radius: 4px;
    }
    .login-a {
      margin: 0px 42px 26px 42px;
      width: 394px;
      height: 40px;
     
    }
  }
}
</style>