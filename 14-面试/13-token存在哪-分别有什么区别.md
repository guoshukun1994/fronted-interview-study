# Token一般是存放在哪？Token放在cookie和放在localStorage\sessionStorage中有什么不同？

答案：
# Token 其实就是访问资源的凭证。
* 一般是用户通过用户名和密码登录成功之后，服务器将登陆凭证做数字签名，加密之后得到的字符串作为token.

# 它在用户登录成功之后会返回给客户端，客户端主要有这么几种存储方式：
1.存储在localStorage中，每次调用接口的时候都把他当成一个字段传给后台
2.存储在cookie中，让它自动发送，不过缺点就是不能跨域
3.拿到之后存储在localStorage中，每次调用接口的时候放在HTTP请求头的Authorization字段里
## 所以token在客户端一般存放于localStorage,cookie,或sessionStorage中。

# 将token放在webStorage中，可以通过同域的js来访问。这样会导致很容易受到xss攻击，特别是项目中引入很多第三方js库的情况下。
# 如果js脚本被盗用，攻击者就可以轻易访问你的网站，webStorage作为一种存储机制，在传输过程中不会执行任何安全标准。
`XSS攻击：cross-site Scripting (跨站脚本攻击) 是一种注入代码攻击。 恶意攻击者在目标网站上注入script代码，当访问者浏览网站的时候通过执行注入的script代码达到窃取用户信息，盗用用户身份等`

# 将token放在cookie中可以指定httponly,来防止别javascript读取，也可以指定secure,来保证token只在HTTPS下传输。缺点是不符合Restful最佳实践，容易受到CSRF攻击
`CSRF跨站点请求伪造`(Cross-Site Request Forgery),跟XSS攻击一样，存在巨大的危害性。简单来说就是恶意攻击者盗用已经认证过的用户信息，以用户信息名义进行一些操作（如发邮件、转账、购买商品等等）。由于身份已经认证过，所以目标网站会认为操作都是真正的用户操作的。CSRF并不能拿到用户信息，它只是盗用用户的凭证去进行操作


