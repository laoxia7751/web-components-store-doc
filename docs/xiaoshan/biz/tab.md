<style lang="scss" scoped>
  .biz-tab{
    width: 540px;
    height: 30px;
    & + .biz-tab{
      margin:10px 0;
    }
  }
  .biz-btn-tab{
    width: 540px;
    height: 40px;

    & + .biz-btn-tab{
      margin-top:10px;
    }
  }
</style>

# Tab 选项卡
 
## 标签页 

> ⚠:biz-tab-item元素下,需要包含1个任意标签

<div class="example">
  <div class="biz-btn-tab">
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item "><span>选项2</span></div>
    <div class="biz-tab-item "><span>选项3</span></div>
   </div>
   <label>带圆角</label>
    <div class="biz-btn-tab round">
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item "><span>选项2</span></div>
    <div class="biz-tab-item "><span>选项3</span></div>
   </div>
   <div class="biz-btn-tab" round>
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item "><span>选项2</span></div>
    <div class="biz-tab-item "><span>选项3</span></div>
   </div>
</div>


<details open>
<summary>展开查看</summary>

```vue
<template>
  <div class="example">
    <div class="biz-btn-tab">
      <div class="biz-tab-item active"><span>选项1</span></div>
      <div class="biz-tab-item"><span>选项2</span></div>
      <div class="biz-tab-item "><span>选项3</span></div>
    </div>
    <label>圆角Tab</label>
    <div class="biz-btn-tab round">
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item "><span>选项2</span></div>
    <div class="biz-tab-item "><span>选项3</span></div>
   </div>
   <div class="biz-btn-tab" round>
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item "><span>选项2</span></div>
    <div class="biz-tab-item "><span>选项3</span></div>
   </div>
  </div>
</template>


<style>
.biz-btn-tab{
  width: 540px;
  height: 40px;
}
</style>
```

</details>





## Tab按钮组

> ⚠:biz-tab-item元素下,需要包含1个任意标签

<div class="example">
  <div class="biz-tab">
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item"><span>选项2</span></div>
  </div>
      <label>圆角Tab</label>
   <div class="biz-tab round">
    <div class="biz-tab-item active"><span>选项1</span></div>
    <div class="biz-tab-item"><span>选项2</span></div>
  </div>
   <div class="biz-tab" round>
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
    <label>圆角Tab</label>
    <div class="biz-tab round">
      <div class="biz-tab-item active"><span>选项1</span></div>
      <div class="biz-tab-item"><span>选项2</span></div>
    </div>
    <div class="biz-tab" round>
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