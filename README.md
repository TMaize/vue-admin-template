# vue-admin-templet

view 与 route 一一对应，负责组件拼装，事件处理

框架组件不做太多的逻辑处理，通过`this.$emit('action', name, data)`发送到 view 层中,因为参数不固定，中间层可以通过 arguments 再次向上传递

```js
sendAction () {
  this.$emit('action', ...arguments)
}
```

不同业务的 Vuex 数据通过 module 划分`namespaced`一定要设置为`true`

`components/admin` 框架相关的组件

`components/basic` 可复用的公共组件，不处理业务

`components/business` 业务组件
