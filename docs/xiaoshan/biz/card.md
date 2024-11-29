<style lang="scss" scoped>
    label{
        display: block;
        margin-bottom: 6px;
    }
    .biz-stripe-card {
        width: 400px;
        height: 200px;

        &.weather{
            width:100px;
            height:150px;
            margin: 10px;
            display: inline-block;
        }

        &.thindog{
            width: 416px;
            height: 72px;
            margin: 10px;
        }
    }

    .projectExample{
        .biz-stripe-card{
            width: 420px;
            height: 108px;

            .title{
                margin-bottom: var(--gap-sm);
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: var(--h4);
                .biz-label{
                    margin-right: var(--gap-md);
                }
                b{
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
                    color: var(--textColor);
                    flex: 1;
                }
            }
        }
    }
</style>

# Card 卡片

## 基础卡片

<div class="example">
    <div class="biz-stripe-card">
        <div class="content"></div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-stripe-card">
        <div class="content"></div>
    </div>
</template>
<script setup></script>

<style>
.biz-stripe-card {
    width: 300px;
    height: 200px;
}
</style>
```

</details>

## 高亮卡片

<div class="example">
    <div class="biz-stripe-card active">
        <div class="content"></div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-stripe-card active">
        <div class="content"></div>
    </div>
</template>
<script setup></script>

<style>
.biz-stripe-card {
    width: 300px;
    height: 200px;
}
</style>
```

</details>

## 完整示例

<div class="projectExample">
    <div class="biz-stripe-card">
        <div class="content">
            <div class="title">
                <span class="biz-label small warning">处置中</span>
                <b>今日东区二路有天然气监测设备发生重大告警，及其周...</b>
            </div>
            <div class="data-item">
                <div class="label">发生时间</div>
                <div class="value">2023/06/08  17:20:56</div>
            </div>
            <div class="data-item">
                <div class="label">告警类型</div>
                <div class="value">大气污染</div>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-stripe-card">
        <div class="content">
            <div class="title">
                <span class="biz-label small warning">处置中</span>
                <b>今日东区二路有天然气监测设备发生重大告警，及其周...</b>
            </div>
            <div class="data-item">
                <div class="label">发生时间</div>
                <div class="value">2023/06/08 17:20:56</div>
            </div>
            <div class="data-item">
                <div class="label">告警类型</div>
                <div class="value">大气污染</div>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-stripe-card {
    width: 420px;
    height: 108px;
    .title {
        margin-bottom: var(--gap-sm);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: var(--h4);
        .biz-label {
            margin-right: var(--gap-md);
        }
        b {
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
            color: var(--textColor);
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

## 细条卡片

<div class="example">
    <div class="biz-stripe-card thindog"></div>
    <div class="biz-stripe-card thindog"></div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="example">
        <div class="biz-stripe-card thindog"></div>
        <div class="biz-stripe-card thindog"></div>
    </div>
</template>
<script setup></script>

<style>
.biz-stripe-card {
    width: 416px;
    height: 72px;
}
</style>
```

</details>
