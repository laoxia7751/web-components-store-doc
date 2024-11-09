<style lang="scss">
    .biz-progress {
        width: 300px;
        margin-bottom: 10px;
        &.custom{
            --color: 255, 149, 133;
        }
    }
</style>

# Progress 进度条

## 基础用法

<div class="example">
    <!-- 默认 -->
    <div class="biz-progress" style="--percent: 20;"></div>
    <!-- 内置颜色 -->
    <div class="biz-progress danger" style="--percent: 50;"></div>
    <div class="biz-progress warning" style="--percent: 70;"></div>
    <div class="biz-progress success" style="--percent: 80;"></div>
    <!-- 自定义颜色 -->
    <div class="biz-progress custom" style="--percent: 100;"></div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
<div class="example">
    <!-- 默认 -->
    <div class="biz-progress" style="--percent: 20;"></div>
    <!-- 内置颜色 -->
    <div class="biz-progress danger" style="--percent: 50;"></div>
    <div class="biz-progress warning" style="--percent: 70;"></div>
    <div class="biz-progress success" style="--percent: 80;"></div>
    <!-- 自定义颜色 -->
    <div class="biz-progress custom" style="--percent: 100;"></div>
</div>
</template>
<script setup>

</script>

<style lang="scss">
.biz-progress {
    width: 300px;
    &.custom{
        --color: 255, 149, 133;
    }
}
</style>
```

</details>
