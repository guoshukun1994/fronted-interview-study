答案：XSS简单来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中
按类型来分：xss可以分为存储型，反射型以及dom型。DOM型XSS攻击中，取出和执行恶意代码由浏览器端完成，属于前端javascript自身的安全漏洞，而其他两种XSS都属于服务端的安全漏洞

防范：
* 1.转义字符
  # 如HTML元素的编码，JS编码，CSS编码等等
  # 避免拼接HTML：Vue/React技术栈，避免使用v-html/dangerouslySetInnerHTML
* 2.增加攻击难度配置csp,建立白名单，开发者明确告诉浏览器哪些外部资源可以加在和执行，我们只需要配置规则，如何拦截是由浏览器自己实现的
  * 比如： 设置HTTP Header中的 Content-Security-Policy
    * 只允许加在本站资源 
        `Content-Security-Policy: default-src 'self'`
    * 只允许加在HTTPS协议图片
        `Content-Security-Policy: img-src https://`
    * 允许加载任何来源框架
        `Content-Security-Policy: child-src 'none'`
* 3.设置meta标签的方式
    `<meta http-equiv="Content-Securiy-Policy" content="script-src 'self';object-src 'none' style-src cdn.example.org third-party.org; child-src https:">
    `
* 校验信息
  # 比如一些常见的数字、URL、电话号码、邮箱地址等等做校验判断
  # 开启浏览器XSS防御： Http Only cookie,禁止Javascript读取某些敏感Cookie,攻击者完成XSS注入后也无法窃取此Cookie
  # 验证码