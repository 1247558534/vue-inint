let obj = {
  setCookie: function (name, value, days, path = '/') {
    let expires = ""
    if (days) {
      //days兼容传入日期
      //如果传入days不能转为数字，则表示是具体日期,日期也可能会被转换为时间戳，故判断其长度
      if (+days && +days.toString().length < 8) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();

      } else {
        expires = "; expires=" + new Date(days).toGMTString();
      }

    }
    let _path = ''
    if (path) {
      _path = '; path=' + path
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + _path;
  },

  // 获取cookie
  getCookie: function (name) {
    let nameEQ = encodeURIComponent(name) + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  },

  // 删除cookie方法
  deleteCookie: function (name) {
    //用于处理不同域的cookie删除，与项目版本相同
    this.setCookie(name, '', -1)
    this.setCookie(name, '', -1, '/')
  },

  getUrlParam: function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[
      1].replace(/\+/g, '%20')) || null;
  }

}

export default obj