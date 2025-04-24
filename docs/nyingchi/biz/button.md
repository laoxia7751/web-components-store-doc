<style lang="scss" scoped>
    .biz-btn {
        padding:5px 30px;
        font-size: 18px;
    }
    .biz-dialog-btn{
      /* width: 98px;
      height: 32px; */
      margin: var(--gap-sm);
    }
    label{
      display:block;
    }
    .biz-nav-btn{
      width: 110px;
      height: 40px;
      margin: var(--gap-sm);
    }
    .biz-business-btn{
      width:72px;
      height:64px;
    }
    .biz-tab{
      width: 540px;
      height: 30px;
    }
    .biz-btn-group{
      width: 400px;
      height: 64px;
    }
</style>

# Button 按钮

## 基础按钮

<div class="example">
  <button class="biz-btn"><span>按钮</span></button>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <!-- 需要嵌套一层，内部放任何元素都可以 -->
    <button class="biz-btn"><span>按钮</span></button>
  </div>
</template>
<script setup>

</script>

<style>
.biz-btn {
    padding:5px 20px;
    font-size: 18px;
}
</style>
```

</details>

## 弹窗按钮

### 按钮类型
<div class="example">
  <p>
    <label>默认按钮</label>
    <button class="biz-dialog-btn"><span>主要按钮</span></button>
    <button class="biz-dialog-btn" type="secondary"><span>次要按钮</span></button>
    <button class="biz-dialog-btn" type="frameless"><span>无框按钮</span></button>
    <label>选中按钮</label>
    <button class="biz-dialog-btn active"><span>主要按钮</span></button>
    <button class="biz-dialog-btn active" type="secondary"><span>次要按钮</span></button>
    <button class="biz-dialog-btn active" type="frameless"><span>无框按钮</span></button>
    <label>禁用按钮</label>
    <button class="biz-dialog-btn disabled"><span>主要按钮</span></button>
    <button class="biz-dialog-btn disabled" type="secondary"><span>次要按钮</span></button>
    <button class="biz-dialog-btn disabled" type="frameless"><span>无框按钮</span></button>
  </p>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div>
      <label>默认按钮</label>
      <button class="biz-dialog-btn"><span>主要按钮</span></button>
      <button class="biz-dialog-btn" type="secondary"><span>次要按钮</span></button>
      <button class="biz-dialog-btn" type="frameless"><span>无框按钮</span></button>
      <label>选中按钮</label>
      <button class="biz-dialog-btn active"><span>主要按钮</span></button>
      <button class="biz-dialog-btn active" type="secondary"><span>次要按钮</span></button>
      <button class="biz-dialog-btn active" type="frameless"><span>无框按钮</span></button>
      <label>禁用按钮</label>
      <button class="biz-dialog-btn disabled"><span>主要按钮</span></button>
      <button class="biz-dialog-btn disabled" type="secondary"><span>次要按钮</span></button>
      <button class="biz-dialog-btn disabled" type="frameless"><span>无框按钮</span></button>
    </div>
</template>
<script setup></script>

<style>
.biz-dialog-btn {
    margin: var(--gap-sm);
}
</style>
```

</details>

### 不同尺寸按钮

<div class="example">
  <p>
    <button class="biz-dialog-btn" size="spacious"><span>宽松按钮</span></button>
    <button class="biz-dialog-btn"><span>默认按钮</span></button>
    <button class="biz-dialog-btn" size="small"><span>紧凑按钮</span></button>
  </p>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div>
      <label>按钮尺寸</label>
      <button class="biz-dialog-btn" size="spacious"><span>宽松按钮</span></button>
      <button class="biz-dialog-btn"><span>默认按钮</span></button>
      <button class="biz-dialog-btn" size="small"><span>紧凑按钮</span></button>
    </div>
</template>
<script setup></script>

<style>
.biz-dialog-btn {
    margin: var(--gap-sm);
}
</style>
```

</details>


### 高亮按钮
<div class="example">
  <p>
    <label>高亮按钮</label>
    <button class="biz-dialog-btn" light><span>按钮</span></button>
    <label>高亮禁用按钮</label>
    <button class="biz-dialog-btn" disabled light><span>按钮</span></button>&nbsp;
    <button class="biz-dialog-btn disabled" light><span>按钮</span></button>
  </p>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div>
        <label>高亮按钮</label>
        <button class="biz-dialog-btn" light><span>按钮</span></button>

        <label>高亮禁用按钮</label>
        <button class="biz-dialog-btn" disabled light><span>按钮</span></button>
        <button class="biz-dialog-btn disabled" light><span>按钮</span></button>
    </div>
</template>
<script setup></script>

<style>
.biz-dialog-btn {
    margin: var(--gap-sm);
}
</style>
```

</details>


## 功能按钮

<div class="example">
  <p>
    <label>基础按钮</label>
    <button class="biz-business-btn"><span>功能<br/>按钮</span></button>
    <label>选中按钮</label>
    <button class="biz-business-btn active"><span>功能<br/>按钮</span></button>
  </p>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
      <label>基础按钮</label>
      <button class="biz-business-btn">
        <span>功能<br/>按钮</span>
      </button>
      
      <label>选中按钮</label>
      <button class="biz-business-btn active">
        <span>功能<br/>按钮</span>
      </button>
  </div>
</template>
<script setup>

</script>

<style>
.biz-business-btn{
  width:72px;
  height:64px;
}
</style>
```

</details>

## 导航按钮

<div class="example">
  <label>基础</label>
  <button class="biz-nav-btn"><span>按钮</span></button>
  <label>选中</label>
  <button class="biz-nav-btn active"><span>按钮</span></button>
</div>


<details open>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <label>基础</label>
    <button class="biz-nav-btn"><span>按钮</span></button>
    <label>选中</label>
    <button class="biz-nav-btn active"><span>按钮</span></button>
  </div>
</template>

<script setup>

</script>

<style>
.biz-nav-btn{
  width: 110px;
  height: 40px;
  margin: var(--gap-sm);
}
</style>
```

</details>

## 按钮组

<div class="example">
  <div class="biz-btn-group">
    <div class="biz-btn-item active"><span>48小时</span></div>
    <div class="biz-btn-item"><span>24小时</span></div>
    <div class="biz-btn-item"><span>12小时</span></div>
    <div class="biz-btn-item"><span>1小时</span></div>
    <div class="biz-btn-item"><span>当前</span></div>
  </div>
</div>

```vue
<template>
  <div class="example">
    <div class="biz-btn-group">
      <div class="biz-btn-item active"><span>48小时</span></div>
      <div class="biz-btn-item"><span>24小时</span></div>
      <div class="biz-btn-item"><span>12小时</span></div>
      <div class="biz-btn-item"><span>1小时</span></div>
      <div class="biz-btn-item"><span>当前</span></div>
    </div>
  </div>
</template>


<style>
.biz-btn-group{
  width: 400px;
  height: 64px;
}
</style>
```

## Tab按钮组

> ⚠:biz-tab-item元素下,需要包含1个任意标签

<div class="example">
  <div class="biz-tab">
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item"><span>选项2</span></div>
  </div>
</div>


<details open>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div class="biz-tab">
      <div class="biz-tab-item active"><span>选项1</span></div>
      <div class="biz-tab-item"><span>选项2</span></div>
    </div>
  </div>
</template>


<style>
.biz-tab{
  width: 540px;
  height: 30px;
}
</style>
```

</details>