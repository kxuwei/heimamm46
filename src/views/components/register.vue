 <template>
  <el-dialog title="用户注册" :visible.sync="dialogFormVisible">
    <el-form :model="form" :rules="rules" ref="register" status-icon>
      <el-form-item label="头像" :label-width="formLabelWidth" prop="photo">
        <el-upload
          class="avatar-uploader"
          :action="photourl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          name="image"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth" prop="username">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth" prop="phone">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="powssword">
        <el-input v-model="form.powssword" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item label="图形码" :label-width="formLabelWidth" prop="code">
        <el-row>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input v-model="form.code" autocomplete="off"></el-input>
            </div>
          </el-col>
          <el-col :span="7" :offset="1">
            <div class="grid-content bg-purple-light">
              <img :src="imgurl" @click="imgclick" />
            </div>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码" :label-width="formLabelWidth" prop="rcode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.rcode" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button
              :disabled="time!=0"
              class="box-a"
              @click="boxa"
            >{{time==0?"点击获取验证码":`${time}秒后获取`}}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm('register')">取 消</el-button>
      <el-button type="primary" @click="submitForm('register')">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { sendsms, register } from "@/abi/register.js";
import {checkphone,checkemail} from '@/untils/validators.js'
export default {
  data() {
    return {
      imgurl: process.env.VUE_APP_URL + "/captcha?type=sendsms",
      photourl: process.env.VUE_APP_URL + "/uploads",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        photo: "",
        name: "",
        username: "",
        powssword: "",
        email: "",
        phone: "",
        code: "",
        rcode: ""
      },
      rules: {
        photo: [{ required: true, message: "头像不能为空", trigger: "blur" }],
        username: [
          { required: true, message: "用户名称不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "change" }
        ],
        powssword: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 8, message: "长度在 6 到 8 个字符", trigger: "change" }
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { validator: checkemail, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "手机不能为空", trigger: "blur" },
          { validator: checkphone, trigger: "blur" }
        ]
      },
      formLabelWidth: "62px",
      time: 0,
      imageUrl: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          register({
            username: this.form.username,
            phone: this.form.phone,
            email: this.form.email,
            avatar: this.form.photo,
            password: this.form.powssword,
            rcode: this.form.rcode
          }).then(res => {
            if (res.data.code == 200) {
              this.$message.success("注册成功");
              this.dialogFormVisible = false;
              this.$refs[formName].resetFields();
              this.photourl="";
            } else if (res.data.code == 201) {
              this.$message.error(res.data.message);
            }
          });
        } else {
          this.$message.error("验证失败");
          return false;
        }
      });
    },
    visibli() {
      this.$refs.register.dialogFormVisible = true;
    },
    imgclick() {
      this.imgurl =
        process.env.VUE_APP_URL + "/captcha?type=sendsms&t=" + Date.now();
    },
    boxa() {
      if (this.form.code.length != 4) {
        return this.$message.error("验证码长度错误");
      }
      if (this.time == 0) {
        this.time = 10;
        let timeout = setInterval(() => {
          this.time--;
          if (this.time == 0) {
            clearInterval(timeout);
          }
        }, 1000);
        sendsms({
          code: this.form.code,
          phone: this.form.phone
        }).then(res => {
          window.console.log(res);
          if (res.data.code == 200) {
            this.$message.success("验证成功:" + res.data.data.captcha);
          } else {
            this.$message.error("验证失败");
          }
        });
      }
    },
    handleAvatarSuccess(res, file) {
      window.console.log(res);
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.photo = res.data.file_path;
      this.$refs.register.validateField("photo");
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/gif"||'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
        this.imageUrl="";
      }
  }
};
</script>
<style lang="less">
div .el-dialog {
  width: 603px;
  height: 786px;
  margin-top: 0px !important;
  .el-dialog__body {
    padding-right: 26.4px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 39px;
  }
  .box-a {
    width: 100%;
  }
  .el-dialog__header {
    width: 100%;
    height: 53px;
    background: linear-gradient(to right, #01c3fa, #1495fb);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-sizing: border-box;
  }
  .el-dialog__footer {
    display: flex;
    justify-content: center;
  }
  .avatar-uploader {
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>