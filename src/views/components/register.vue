 <template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>
<script>
export default {
  methods: {
    open() {
      this.$prompt("请输入邮箱", "用户注册", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>
<style lang="less">
.el-message-box {
  width: 603px;
  height: 786px;
  .el-message-box__header {
    width: 100%;
    height: 53px;
    background: linear-gradient(to right, #01c3fa, #1495fb);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    box-sizing: border-box;
  }
}
</style>