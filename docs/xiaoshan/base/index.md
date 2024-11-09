<style lang="scss">
.biz-box{
   height: 50px;
   padding: 0 20px;
   line-height: 50px;
   display: inline-block;
   background-color: rgb(var(--color));
   border-radius: 10px;
   &+.biz-box{
    margin-left: 10px;
   }
}
label{
    display:block;
    margin: 6px 0;
    font-size: 14px;
}
</style>

# 说明

## 语义颜色

> 语义颜色仅在有`biz-`前缀类名的元素下生效

<div class="example">
    <h4>告警、失败、异常、正常、成功、在线、离线常规状态色</h4>
    <label>失败、告警、故障</label>
    <div class="biz-box fail">fail</div>
    <div class="biz-box danger">danger</div>
    <label>异常、差</label>
    <div class="biz-box warning">warning</div>
    <div class="biz-box bad">bad</div>
    <label>正常、在线、良好</label>
    <div class="biz-box normal">normal</div>
    <div class="biz-box online">online</div>
    <div class="biz-box good">good</div>
    <label>成功、优秀</label>
    <div class="biz-box success">success</div>
    <div class="biz-box excellent">excellent</div>
    <label>离线</label>
    <div class="biz-box leave">leave</div>
    <h4>事件/危险源/隐患等级颜色</h4>
    <label>等级1</label>
    <div class="biz-box level1">level1</div>
    <label>等级2</label>
    <div class="biz-box level2">level2</div>
    <label>等级3</label>
    <div class="biz-box level3">level3</div>
    <label>等级4</label>
    <div class="biz-box level4">level4</div>
    <label>未定级颜色(带level类名前缀即生效)</label>
    <div class="biz-box level1415926">levelx</div>
    <h4>排行榜颜色</h4>
    <label>第1</label>
    <div class="biz-box rank1">rank1</div>
    <label>第2</label>
    <div class="biz-box rank2">rank2</div>
    <label>第3</label>
    <div class="biz-box rank3">rank3</div>
    <label>第4</label>
    <div class="biz-box rankxxxx">rankx</div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="example">
        <h4>告警、失败、异常、正常、成功、在线、离线常规状态色</h4>
        <label>失败、告警、故障</label>
        <div class="biz-box fail">fail</div>
        <div class="biz-box danger">danger</div>
        <label>异常、差</label>
        <div class="biz-box warning">warning</div>
        <div class="biz-box bad">bad</div>
        <label>正常、在线、良好</label>
        <div class="biz-box normal">normal</div>
        <div class="biz-box online">online</div>
        <div class="biz-box good">good</div>
        <label>成功、优秀</label>
        <div class="biz-box success">success</div>
        <div class="biz-box excellent">excellent</div>
        <label>离线</label>
        <div class="biz-box leave">leave</div>
        <h4>事件/危险源/隐患等级颜色</h4>
        <label>等级1</label>
        <div class="biz-box level1">level1</div>
        <label>等级2</label>
        <div class="biz-box level2">level2</div>
        <label>等级3</label>
        <div class="biz-box level3">level3</div>
        <label>等级4</label>
        <div class="biz-box level4">level4</div>
        <label>未定级颜色(带level类名前缀即生效)</label>
        <div class="biz-box level1415926">levelx</div>
        <h4>排行榜颜色</h4>
        <label>第1</label>
        <div class="biz-box rank1">rank1</div>
        <label>第2</label>
        <div class="biz-box rank2">rank2</div>
        <label>第3</label>
        <div class="biz-box rank3">rank3</div>
        <label>第4</label>
        <div class="biz-box rankxxxx">rankx</div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-box {
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    display: inline-block;
    background-color: rgb(var(--color));
    border-radius: 10px;
    & + .biz-box {
        margin-left: 10px;
    }
}
label {
    display: block;
    margin: 6px 0;
    font-size: 14px;
}
</style>
```

</details>
