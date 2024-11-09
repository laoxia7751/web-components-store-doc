<style lang="scss">
  .biz-panel{
    width: 229px;
    height: 246px;
  }
</style>

# Panel 内容面板

## 基础用法

<div class="example">
  <div class="biz-panel">
    <div>内容区域</div>
  </div>
  <br/>
  <div class="biz-panel">
    <div class="title">图例</div>
    <div>带标题的面板</div>
  </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
<div class="example">
  <div class="biz-panel">
    <div>内容区域</div>
  </div>
  <div class="biz-panel">
    <div class="title">图例</div>
    <div>带标题的面板</div>
  </div>
</div>
</template>
<script setup>

</script>

<style>
.biz-panel{
  width: 229px;
  height: 246px;
}
</style>
```

</details>


