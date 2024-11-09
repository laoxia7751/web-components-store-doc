<style lang="scss">
    [class^='biz-rank-']{
        display: inline-block;
        margin:10px 20px 10px 0;
        .iconfont{
            font-size: var(--h5);
        }
        &.one{
            --color: 255, 77, 77;
        }
        &.two{
            --color: 32, 237, 89;
        }
        &.three{
            --color: 36, 252, 255;
        }
    }
</style>

# Rank 排名标签

## 基础用法

<div class="example">
    <h5>告警排名</h5>
    <span class="biz-rank-icon top-1"><i class="iconfont icon-num-1"></i></span>
    <span class="biz-rank-icon top-2"><i class="iconfont icon-num-2"></i></span>
    <span class="biz-rank-icon top-3"><i class="iconfont icon-num-3"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-4"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-5"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-6"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-7"></i></span>
    <h5>危险源等级</h5>
    <span class="biz-rank-icon level-1"><i class="iconfont icon-first"></i></span>
    <span class="biz-rank-icon level-2"><i class="iconfont icon-second"></i></span>
    <span class="biz-rank-icon level-3"><i class="iconfont icon-third"></i></span>
    <span class="biz-rank-icon level-4"><i class="iconfont icon-fourth"></i></span>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
<div class="example">
    <h5>告警排名</h5>
    <span class="biz-rank-icon top-1"><i class="iconfont icon-num-1"></i></span>
    <span class="biz-rank-icon top-2"><i class="iconfont icon-num-2"></i></span>
    <span class="biz-rank-icon top-3"><i class="iconfont icon-num-3"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-4"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-5"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-6"></i></span>
    <span class="biz-rank-icon"><i class="iconfont icon-num-7"></i></span>
    <br/>
    <h5>危险源等级</h5>
    <span class="biz-rank-icon level-1"><i class="iconfont icon-first"></i></span>
    <span class="biz-rank-icon level-2"><i class="iconfont icon-second"></i></span>
    <span class="biz-rank-icon level-3"><i class="iconfont icon-third"></i></span>
    <span class="biz-rank-icon level-4"><i class="iconfont icon-fourth"></i></span>
</div>

</template>

<script setup>

</script>

<style lang="scss">
[class^='biz-rank-']{
    display: inline-block;
    margin:10px 20px 10px 0;
    .iconfont{
        font-size: var(--h5);
    }
}
</style>
```

</details>


## 其他自定义颜色

<div class="example">
    <span class="biz-rank-icon one"><i class="iconfont icon-num-1"></i></span>
    <span class="biz-rank-icon two"><i class="iconfont icon-num-2"></i></span>
    <span class="biz-rank-icon three"><i class="iconfont icon-num-3"></i></span>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
<div class="example">
    <span class="biz-rank-icon one"><i class="iconfont icon-num-1"></i></span>
    <span class="biz-rank-icon two"><i class="iconfont icon-num-2"></i></span>
    <span class="biz-rank-icon three"><i class="iconfont icon-num-3"></i></span>
</div>
</template>
<script setup>

</script>

<style lang="scss">
.biz-rank-icon{
    &.one{
        --color: 255, 77, 77;
    }
    &.two{
        --color: 32, 237, 89;
    }
    &.three{
        --color: 36, 252, 255;
    }
}

</style>
```

</details>
