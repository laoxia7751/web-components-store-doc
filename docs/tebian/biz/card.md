<style lang="scss" scoped>
    label{
        display: block;
        margin-bottom: 6px;
    }
    .biz-stripe-card {
        width: 400px;
        height: 300px;
        &:not(.square){
            margin-bottom: 10px;
            width: 548px;
            height: 108px;
        }
        &.weather{
            width:100px;
            height:150px;
            margin: 10px;
            display: inline-block;
        }
        &.custom{
            // 主题色rgb
            --color: 32, 237, 89;
            // 对应背景条纹图片
            --stripeImg: url(../images/tb-stripe-card-bg-green.png);
        }
    }

    .projectExample{
        .biz-stripe-card{
            width: 548px;
            height: 108px;
            .title{
                margin-bottom: var(--gap-sm);
                .biz-label{
                    margin-right: var(--gap-lg)
                }
                b{
                    font-size: var(--h3);
                    color: var(--textColor);
                }
            }
            .data-item{
                font-size: var(--h5);
                display: flex;
                .label{
                    color: var(--textColor-3);
                    margin-right: var(--gap-md);
                    flex-shrink: 0;
                }
                .value{
                    color: var(--textColor-2);
                    flex: 1;
                }
            }
        }
    }
</style>

# Card 卡片

## 上下双条纹卡片

> 上下双条纹卡片的条纹不支持换色，需要通过样式优先级强制替换掉

<div class="example">
    <div class="biz-stripe-card square"></div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <!--和单条纹相比，只需要单个div,但是需要两个类名👇-->
    <div class="biz-stripe-card square"></div>
</template>
<script setup></script>

<style>
.biz-stripe-card {
    width: 300px;
    height: 300px;
}
</style>
```

</details>

## 单条纹卡片

<div class="example">
    <div class="biz-stripe-card red"><div class="content"></div></div>
    <div class="biz-stripe-card pink"><div class="content"></div></div>
    <div class="biz-stripe-card orange"><div class="content"></div></div>
    <div class="biz-stripe-card light-orange"><div class="content"></div></div>
    <div class="biz-stripe-card yellow"><div class="content"></div></div>
    <div class="biz-stripe-card green"><div class="content"></div></div>
    <div class="biz-stripe-card cyan"><div class="content"></div></div>
    <label>告警颜色</label>
    <div class="biz-stripe-card level1"><div class="content"></div></div>
    <div class="biz-stripe-card level2"><div class="content"></div></div>
    <div class="biz-stripe-card level3"><div class="content"></div></div>
    <div class="biz-stripe-card level4"><div class="content"></div></div>
    <label>自定义颜色</label>
    <div class="biz-stripe-card custom"><div class="content"></div></div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="example">
        <div class="biz-stripe-card red"><div class="content"></div></div>
        <div class="biz-stripe-card pink"><div class="content"></div></div>
        <div class="biz-stripe-card orange"><div class="content"></div></div>
        <div class="biz-stripe-card light-orange"><div class="content"></div></div>
        <div class="biz-stripe-card yellow"><div class="content"></div></div>
        <div class="biz-stripe-card green"><div class="content"></div></div>
        <div class="biz-stripe-card cyan"><div class="content"></div></div>
        <label>告警颜色</label>
        <div class="biz-stripe-card level1"><div class="content"></div></div>
        <div class="biz-stripe-card level2"><div class="content"></div></div>
        <div class="biz-stripe-card level3"><div class="content"></div></div>
        <div class="biz-stripe-card level4"><div class="content"></div></div>
        <label>自定义颜色</label>
        <div class="biz-stripe-card custom"><div class="content"></div></div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-stripe-card {
    margin-bottom: 10px;
    width: 548px;
    height: 108px;
    &.custom {
        // 主题色rgb
        --color: 32, 237, 89;
        // 对应背景条纹图片
        --stripeImg: url(../images/tb-stripe-card-bg-green.png);
    }
}
</style>
```

</details>

## 完整示例

<div class="projectExample">
    <div class="biz-stripe-card green">
        <div class="content">
            <div class="title">
                <span class="biz-label">有毒气体</span>
                <b>{title}</b>
            </div>
            <div class="data-item">
                <div class="label">位置</div>
                <div class="value">{location}</div>
            </div>
            <div class="data-item">
                <div class="label">告警时间</div>
                <div class="value">09/07 17:20:00</div>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-stripe-card green">
        <div class="content">
            <div class="title">
                <span class="biz-label">有毒气体</span>
                <b>{title}</b>
            </div>
            <div class="data-item">
                <div class="label">位置</div>
                <div class="value">{location}</div>
            </div>
            <div class="data-item">
                <div class="label">告警时间</div>
                <div class="value">09/07 17:20:00</div>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-stripe-card {
    width: 548px;
    height: 108px;
    .title {
        margin-bottom: var(--gap-sm);
        .biz-label {
            margin-right: var(--gap-lg);
        }
        b {
            font-size: var(--h3);
            color: var(--textColor);
        }
    }
    .data-item {
        font-size: var(--h5);
        display: flex;
        .label {
            color: var(--textColor-3);
            margin-right: var(--gap-md);
            flex-shrink: 0;
        }
        .value {
            color: var(--textColor-2);
            flex: 1;
        }
    }
}
</style>
```

</details>


## 天气卡片

<div class="example">
    <div class="biz-stripe-card weather"></div>
    <div class="biz-stripe-card weather today"></div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-stripe-card weather"></div>
    <div class="biz-stripe-card weather today"></div>
</template>
<script setup></script>

<style>
.biz-stripe-card {
    width: 100px;
    height: 150px;
}
</style>
```
</details>