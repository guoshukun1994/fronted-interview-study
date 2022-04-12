# 问题：说以下CORS的简单请求和复杂请求的区别？
答案： CORS（Cross-origin-Resource-Sharing),跨域资源共享，是一份浏览器技术的规范，用来避开浏览器的同源策略。相关头部设置如下：
* Access-Control-Allow-Origin
提示请求的资源能共享给哪些域
* Access-Control-Allow-Credentials
提示当请求的凭证标记为true时，是否响应该请求。
* Access-Control-Allow-Headers
用在对预请求的响应中，指示实际的请求中可以使用哪些HTTP头
* Access-Control-Allow-Methods
指定对预请求的响应中，哪些HTTP方法允许访问请求的资源
* Access-Control-Expose-Headers
指示哪些HTTP头部的名称能在响应中列出
* Access-Control-Max-Age
指示预请求的结果能被缓存多久
* Access-Control-Request-Headers
用于发起一个预请求，告知服务器正式请求会使用哪些HTTP头
* Access-Control-Request-Method
用于发起一个预请求，告知服务器正式请求会使用哪一种HTTP请求方法
* Origin
指示获取资源的请求是从什么域发起的。

# CORS可以分为两种：简单请求和复杂请求。简单请求是满足以下条件的请求
## HTTP方法是下列之一
* HEAD * GET * POST
## HTTP头信息不超出以下几种字段
* Accept
* Accept-Language
* Content-Language
* Last-Event-ID
* Content-Type,但仅能是下列之一：application/x-www-form-urlencoded   multipart/form-data  text/plain
### 反之就是复杂请求
### 复杂请求表面上看起来和简单请求使用上差不多，但实际上浏览器发送了不止一个请求。其中最先发送的是一种`预请求`，此时作为服务端，也需要返回`预回应`作为响应。
### 预请求实际上是对服务端的一种权限请求，只有当预请求成功返回，实际请求才会开始执行



