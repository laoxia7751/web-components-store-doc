<style lang="scss">
    .biz-label{
        margin: 0 0 10px 10px;
        font-size: var(--h5);
        display: inline-block;
    }
</style>

# Label 标签

## 基础用法

<div class="example">
  <span class="biz-label">默认</span>
  <span class="biz-label danger">火灾告警</span>
  <span class="biz-label warning">可燃气体</span>
  <span class="biz-label success">有毒气体</span> 
  <!-- 自定义颜色👇 -->
  <span class="biz-label" style="--color:255, 149, 133;">顶板告警</span>
  <span class="biz-label" style="--color:255, 196, 120;">瓦斯告警</span><br/>
  <span class="biz-label" style="--color:255, 255, 30;">通风告警</span>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <span class="biz-label">默认</span>
    <span class="biz-label danger">火灾告警</span>
    <span class="biz-label warning">可燃气体</span>
    <span class="biz-label success">有毒气体</span> 
    <!-- 自定义颜色 -->
    <span class="biz-label" style="--color:255, 149, 133;">顶板告警</span>
    <span class="biz-label" style="--color:255, 196, 120;">瓦斯告警</span><br/>
    <span class="biz-label" style="--color:255, 255, 30;">通风告警</span>
    </div>
</template>
<script setup>

</script>

<style>
.biz-label{
    margin: 0 0 10px 10px;
    font-size: var(--h5);
    display: inline-block;
}
</style>
```

</details>


## 其他尺寸

可以增加`small`类名或者标签属性来实现更小尺寸的标签样式；

<div class="example">
  <span class="biz-label small">默认</span>
  <span class="biz-label danger" small>火灾告警</span>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="example">
        <span class="biz-label small">默认</span>
        <span class="biz-label danger" small>火灾告警</span>
    </div>
</template>
<script setup>

</script>

<style>
.biz-label{
    margin: 0 0 10px 10px;
    font-size: var(--h6);
    display: inline-block;
}
</style>
```

</details>
