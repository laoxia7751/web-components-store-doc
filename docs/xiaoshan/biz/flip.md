<style lang="scss" scoped>
 .example{
   label{
        display: block;
        margin: 10px 0;
    } 

 }
</style>

# Flip 翻牌

## 基础翻牌
<div class="example">
        <label>静态翻牌</label>
        <div class="biz-flip">
            <div class="flip" v-for="i in 3" :key="i">
                <div class="digital front" >
                    <div class="before" data-number="0"></div>
                    <div class="after" data-number="0"></div>
                </div>
                <div class="digital back" >
                    <div class="before" data-number="1"></div>
                    <div class="after" data-number="1"></div>
                </div>
            </div>
        </div>
        <label>动画翻牌</label>
        <div class="biz-flip">
            <div class="flip go" v-for="i in 3" :key="i">
            <div class="digital front" >
                <div class="before" data-number="0"></div>
                <div class="after" data-number="0"></div>
            </div>
            <div class="digital back" >
                <div class="before" data-number="1"></div>
                <div class="after" data-number="1"></div>
            </div>
        </div>
    </div>
</div>
<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-flip">
        <div class="flip">
            <div class="digital front" >
                <div class="before" data-number="0"></div>
                <div class="after" data-number="0"></div>
            </div>
            <div class="digital back" >
                <div class="before" data-number="1"></div>
                <div class="after" data-number="1"></div>
            </div>
        </div>
    </div>
    <div class="biz-flip">
        <!-- 有动画，添加类名“go” -->
        <div class="flip go">
            <div class="digital front" >
                <div class="before" data-number="0"></div>
                <div class="after" data-number="0"></div>
            </div>
            <div class="digital back" >
                <div class="before" data-number="1"></div>
                <div class="after" data-number="1"></div>
            </div>
        </div>
    </div>
</template>
```
</details>
