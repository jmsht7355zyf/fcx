# <center>Axios入门</center>

## 安装与配置

```shell
npm install axios
```

## 基本使用

使用说明请点击[axios中文文档](http://www.axios-js.com/zh-cn/docs/)

### 简单案例

```javascript
axios({
    //请求类型 get post put delete
    method: 'get',
    url: 'http://locahost:3000/post',
    //设置请求体
    data: {
        title: 'hello word',
        name: 'axios',
    }
}).then(response =>{
    console.loge(response);
});
```

 