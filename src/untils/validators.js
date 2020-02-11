export const checkphone = (rule, value, callback) => {
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if (reg.test(value) == false) {
        return callback(new Error("手机号格式不对"));
    } else {
        callback();
    }
};
export const checkemail = (rule, value, callback) => {
    const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (reg.test(value) == false) {
      return callback(new Error("邮箱格式不对"));
    } else {
      callback();
    }
  };