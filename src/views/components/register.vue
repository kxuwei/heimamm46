 <template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="用户注册" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="图形码" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="17">
              <div class="grid-content bg-purple">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content bg-purple-light">
                <img src="../../assets/login_captcha.png" alt />
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-row>
            <el-col :span="17">
              <div class="grid-content bg-purple">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content bg-purple-light">
                <div class="box-a">点击获取验证码</div>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>
<style lang="less">
div .el-dialog {
  width: 603px;
  height: 786px;
  .el-dialog__body {
    padding-right: 26.4px;
    box-sizing: border-box;
    padding-left: 0px;
    .el-form-item__label {
      padding-left: 26.4px;
    }
  }
  img {
    width: 100%;
    height: 39px;
  }
  .box-a{
    border: 1px solid #ccc;
    height: 39px;
    text-align: center;
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
}
</style>