

# 如何使用物料库组件

> 使用物料库中的业务组件，默认 pc 端组件需要前缀 `Biz` ，移动端组件需要前缀 `BizMobile` ;

## 全局注册

```javascript
// 引入 web-components-store
import ComponentsStore from 'web-components-store';

// 注册组件
Vue.use(ComponentsStore)
```

物料库包含所有组件，全量注册可能导致包体积过大，可能只需要引入部分组件，所以针对单个项目，通过接口获取其业务组件列表，注册该项目适配的有权限的部分组件。

```javascript
// 引入 web-components-store
import ComponentsStore from 'web-components-store';

getComponentList().then((res) => {
        Vue.use(ComponentsStore, {
            componentList: res.componentList
        })
})
```

对于开发环境，也可以通过 `type` 参数选择仅注册 pc 或 移动端组件

``` javascript
// 引入 web-components-store
import ComponentsStore from 'web-components-store';

Vue.use(ComponentsStore, {
    type: 0 // 默认为 0 [0-注册全部 | 1-仅 pc 组件 | 2-仅移动端组件]
})
```

完成组件注册后，即可在项目中使用注册的组件了

```vue
<template>
	<BizEchartsCmp></BizEchartsCmp>
	<BizMobileEchartsCmp></BizMobileEchartsCmp>
</template>
```



## 按需加载

使用方式即正常的组件注册方式

```javascript
import { BizEchartsCmp } from 'web-components-store';

export default {
    ...
	components: {
        BizEchartsCmp
    },
    ...
}
```

可导入组件详见 [组件列表](.\组件列表.md)