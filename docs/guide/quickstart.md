# 快速开始

本节将介绍如何在项目中使用 web-common-store


## 物料库组件开发

> 介绍如何从零开发一个物料库组件

::: warning
所有组件必须包含 `name` 属性，否则会导致组件挂载报错
:::

### 开发一个业务组件


1. 创建一个业务组件目录

```bash
npm run create ${组件名}
```

组件名推荐使用大驼峰命名，如 `npm run create CardList`，该命令会在 `packages/components/` 下生成 `CardList` 文件夹，内部结构如下

```javascript
-┬--------- CardInfo
 ├--┬------ src
 |  ├------ index.js 			// 组件逻辑 
 |  ├------ CardInfo.js			// pc 端页面
 |  └------ CardInfo.mobile.js  // 移动端页面
 ├--------- index.js 			// 组件导出
 └--------- package.json
```

#### 2. 物料库导出业务组件

`packages/web-components-store` 为物料库的总出口，组件开发完成后，需要在该出口中集中导出，需要修改`packages/web-components-store/index.js` 中以下部分

![组件导出](.\images\组件导出.png)

   1. 导入组件
   2. 添加到对应组件列表
   3. 别名导出（别名保持与组件中的 name 属性一致）

#### 3. 运行物料库预览应用

```bash
npm run play
```

该命令会启动 `/app` 下的预览应用，物料库所有组件均以全局注册，在 `/app/src/` 下可以直接使用新增的组件，组件名称为组件中的 name 值，默认为 `Biz${组件名}` 与 `BizMobile${组件名}` 。

#### 4. 组件开发

完成组件的逻辑、样式开发

若需要应用物料库中的公共组件，工具函数，使用以下方式

```javascript
// 引入 utils 库中 flat 方法
import { flat } from '@web-components-store/utils';
import { AnimationSlot } from '@web-components-store/common';
```

#### 5. 组件使用文档

完成组件使用文档编写



### 开发一个公共基础组件

物料库中的业务组件可能通用一些基础组件，这些基础组件放置在 `/packages/common/src ` 下，若需要新增一个基础组件，大概需要进行以下步骤

1. 在 `/packages/common/src` 下新增基础组件目录
2. 在 `/packages/common/src/${新增组件目录}` 下新增 `index.vue`
3. 在 `/packages/common/index.js` 中导入、导出该基础组件
4. 开发基础组件

由于公共基础组件暂时只考虑在物料库中的业务组件使用，不考虑导出给外部其他项目使用。

