<style lang="scss">
    .vp-doc li + li{
        margin-top: 0;
    }
    .vp-doc ul, .vp-doc ol{
        padding-left: 0;
        margin:0;
    }
    .pageListDemo{
        display: flex;
        flex-direction: column;
        align-items: center;
        .biz-card-list{
            width: 100%;
        }
        .page{
            margin-top: 10px;
        }
    }
</style>

<script setup>
const list = [
    {label:'小型灭火器小型灭火器', value: '220个'},
    {label:'防火服',value:'1,220套'},
    {label:'应急灯',value:'2,021个'},
    {label:'破墙锤',value:'120个'},
    {label:'干粉灭火器',value:'22个'},
    {label:'救生衣',value:'1,008套'},
    {label:'防汛车辆',value:'20辆'},
    {label:'救生圈',value:'1,200个'},
    {label:'指挥车',value:'22辆'},
    {label:'雨衣',value:'1,008套'},
    {label:'雨伞',value:'1,220个'},
    {label:'水泵车',value:'120辆'},
]
</script>

# CardList 动态卡片列表

> 此样式用于带滚动条或者分页的卡片列表

## 默认样式

<div class="example" >
  <div class="biz-card-list">
    <div class="item" v-for="item in list" :key="item.label">
        <div class="top">{{ item.label }}</div>
        <div class="down">{{ item.value }}</div>
    </div>
  </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-card-list">
        <div class="item" v-for="item in list" :key="item.label">
            <div class="top">{{ item.label }}</div>
            <div class="down">{{ item.value }}</div>
        </div>
    </div>
</template>

<script setup>
const list = [
    { label: '小型灭火器', value: '220个' },
    { label: '防火服', value: '1,220套' },
    { label: '应急灯', value: '2,021个' },
    { label: '破墙锤', value: '120个' },
    { label: '干粉灭火器', value: '22个' },
    { label: '救生衣', value: '1,008套' },
    { label: '防汛车辆', value: '20辆' },
    { label: '救生圈', value: '1,200个' },
    { label: '指挥车', value: '22辆' },
    { label: '雨衣', value: '1,008套' },
    { label: '雨伞', value: '1,220个' },
    { label: '水泵车', value: '120辆' },
];
</script>

<style></style>
```

</details>

## 调整布局

<div class="example" >
  <div class="biz-card-list" style="--columns: 4; --gap: var(--gap-lg);">
    <div class="item" v-for="item in list.slice(0,8)" :key="item.label">
        <div class="top" >{{ item.label }}</div>
        <div class="down">{{ item.value }}</div>
    </div>
  </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-card-list" style="--columns: 4; --gap: var(--gap-lg);">
        <div class="item" v-for="item in list" :key="item.label">
            <div class="top">{{ item.label }}</div>
            <div class="down">{{ item.value }}</div>
        </div>
    </div>
</template>

<script setup>
const list = [
    { label: '小型灭火器', value: '220个' },
    { label: '防火服', value: '1,220套' },
    { label: '应急灯', value: '2,021个' },
    { label: '破墙锤', value: '120个' },
    { label: '干粉灭火器', value: '22个' },
    { label: '救生衣', value: '1,008套' },
    { label: '防汛车辆', value: '20辆' },
    { label: '救生圈', value: '1,200个' },
];
</script>

<style></style>
```

</details>

## 配合分页器

<div class="example pageListDemo" >
  <div class="biz-card-list" style="--columns: 2;">
    <div class="item" v-for="item in list.slice(0,4)" :key="item.label">
        <div class="top" >{{ item.label }}</div>
        <div class="down">{{ item.value }}</div>
    </div>
  </div>
  <!-- 这个是element3的分页组件，仅在文档环境用，项目使用需做调整 -->
  <el-pagination class="page" layout="prev, pager, next" :total="50" />
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="example pageListDemo">
        <div class="biz-card-list" style="--columns: 2;">
            <div class="item" v-for="item in list" :key="item.label">
                <div class="top">{{ item.label }}</div>
                <div class="down">{{ item.value }}</div>
            </div>
        </div>
        <!-- 这个是element3的分页组件，仅在文档环境用，项目使用需做调整 -->
        <el-pagination class="page" layout="prev, pager, next" :total="50" />
    </div>
</template>

<script setup>
const list = [
    { label: '小型灭火器', value: '220个' },
    { label: '防火服', value: '1,220套' },
    { label: '应急灯', value: '2,021个' },
    { label: '破墙锤', value: '120个' },
];
</script>

<style lang="scss">
.pageListDemo {
    display: flex;
    flex-direction: column;
    align-items: center;
    .biz-card-list {
        width: 100%;
    }
    .page {
        margin-top: 10px;
    }
}
</style>
```

</details>

## 自定义样式参数

| 变量名称 | 描述                                           | 默认值               |
| -------- | ---------------------------------------------- | -------------------- |
| columns  | 控制每行显示列数,等同于`grid-template-columns` | 3                    |
| rows     | 控制要显示的行数,等同于`grid-template-rows`    | 0                    |
| gap      | 间距，等同于`grid-gap`                         | calc(4 \* 1rem / 16) |
