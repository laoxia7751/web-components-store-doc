<style lang="scss" scoped>
    .example:not(.group) {
        /* display: flex; */
        /* gap: 20px; */

        .biz-total-card{
            width: 200px;
            height:72px;

            &[type='totalbg'],
            &[type='totalbg-1'],
            &[type='totalbg-2'] {
                width: 114px;
                height: fit-content;
            }

            &[type='hasIconBg-diy']{
                width: 164px;
                height: 92px;
            }

            &[type='hasIconBg-diy-1']{
                width: 129px;
                height: fit-content;
            }

            &[type='extensions-1']{
                width: 309px;
                height: 82px;
            }
        }

        label{
            display: block;
            margin: 10px 0;
        }
    }
</style>

# TotalCard 统计卡片

## 默认样式风格

> 默认样式风格样式有鼠标划入和点击效果

<div class="example">
    <label>默认样式风格</label>
    <div class="biz-total-card" type="normal">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                 <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>默认样式风格</label>
    <div class="biz-total-card" type="normal">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>    
    <label>鼠标划入效果</label>
    <div class="biz-total-card" type="normal" hover>
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>激活效果</label>
    <div class="biz-total-card active" type="normal" hover>
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>默认样式风格</label>
    <div class="biz-total-card" type="normal">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>默认样式风格</label>
    <div class="biz-total-card" type="normal">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>鼠标划入效果</label>
    <div class="biz-total-card" type="normal" hover>
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>激活效果</label>
    <div class="biz-total-card active" type="normal" hover>
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 200px;
    height: 72px;
}
</style>
```

</details>

## 菱形样式风格

<div class="example">
    <label>菱形样式风格</label>
    <div class="biz-total-card" type="diamond">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>菱形样式风格</label>
    <div class="biz-total-card" type="diamond">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>菱形样式风格</label>
    <div class="biz-total-card" type="diamond">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>菱形样式风格</label>
    <div class="biz-total-card" type="diamond">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 200px;
    height: 72px;
}
</style>
```

</details>

## 科技风扫描网格风格样式

<div class="example">
    <label>科技风扫描网格风格样式</label>
    <div class="biz-total-card" type="scanning">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>科技风扫描网格风格样式</label>
    <div class="biz-total-card" type="scanning">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>科技风扫描网格风格样式</label>
    <div class="biz-total-card" type="scanning">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>科技风扫描网格风格样式</label>
    <div class="biz-total-card" type="scanning">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 200px;
    height: 72px;
}
</style>
```

</details>

## 统计卡片含有复杂背景

<div class="example">
    <label>统计卡片含有复杂背景</label>
    <!-- style="--bg-url: url(图片地址)" -->
    <!-- style="--bg-top: 18px 图片距离上面的间距" -->
    <div class="biz-total-card" type="totalbg">
        <div class="wrapper"> 
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-1">
        <div class="wrapper"> 
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-1">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-2">
        <div class="wrapper"> 
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-2">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>统计卡片含有复杂背景</label>
    <!-- style="--bg-url: url(图片地址)" -->
    <!-- style="--bg-top: 18px 图片距离上面的间距" -->
    <div class="biz-total-card" type="totalbg">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-1">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-1">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-2">
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计卡片含有复杂背景</label>
    <div class="biz-total-card" type="totalbg-2">
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 144px;
    height: 88px;
}
</style>
```

</details>

## 统计数字卡片含有 icon

<div class="example">
    <label>统计数字卡片含有 icon</label>
    <div class="biz-total-card" type="hasIcon">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计数字卡片含有 icon</label>
    <div class="biz-total-card" type="hasIcon">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div>
    <label>统计数字卡片含有 icon</label>
    <div class="biz-total-card" type="hasIcon">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <b class="number">0</b>
                <!-- percentage 表示/后面的数字 -->
                <b class="percentage">/0</b>
            </div>
            <div class="label">
                <span>在线</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>统计数字卡片含有 icon</label>
    <div class="biz-total-card" type="hasIcon">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>物资仓库</span>
            </div>
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
        </div>
    </div>
    <label>统计数字卡片含有 icon</label>
    <div class="biz-total-card" type="hasIcon">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>利润等额同比</span>
            </div>
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
        </div>
    </div>
    <label>统计数字卡片含有 icon</label>
    <div class="biz-total-card" type="hasIcon">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>在线</span>
            </div>
            <div class="value">
                <b class="number">0</b>
                <!-- percentage 表示/后面的数字 -->
                <b class="percentage">/0</b>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 200px;
    height: 72px;
}
</style>
```

</details>

## 统计数字卡片含有 icon 和 background 效果

<div class="example">
    <label>统计数字卡片含有 icon 和 background 效果</label>
    <div class="biz-total-card" type="hasIconBg">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>hover效果</label>
    <div class="biz-total-card" type="hasIconBg" hover>
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div> 
    <label>激活效果</label>
    <div class="biz-total-card active" type="hasIconBg">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <b class="number">0</b>
                <!-- percentage 表示/后面的数字 -->
                <b class="percentage">/0</b>
            </div>
            <div class="label">
                <span>在线</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>统计数字卡片含有 icon 和 background效果</label>
    <div class="biz-total-card" type="hasIconBg">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>物资仓库</span>
            </div>
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
        </div>
    </div>
    <label>hover效果</label>
    <div class="biz-total-card" type="hasIconBg" hover>
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>利润等额同比</span>
            </div>
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
        </div>
    </div>
    <label>激活效果</label>
    <div class="biz-total-card active" type="hasIconBg">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>在线</span>
            </div>
            <div class="value">
                <b class="number">0</b>
                <!-- percentage 表示/后面的数字 -->
                <b class="percentage">/0</b>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 200px;
    height: 72px;
}
</style>
```

</details>

## 统计数字卡片含有 icon 和 background - 自定义效果

<div class="example">
    <label>统计数字卡片含有 icon 和 background - 自定义效果</label>
    <!-- --bg-url: url(背景地址) 传入需要的背景图 -->
    <!-- 设置对应的padding来达到效果 -->
    <div class="biz-total-card" type="hasIconBg-diy">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
    <label>统计数字卡片含有 icon 和 background - 自定义效果</label>
    <div class="biz-total-card" type="hasIconBg-diy">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
            <div class="label">
                <span>利润等额同比</span>
            </div>
        </div>
    </div> 
    <label>统计数字卡片含有 icon 和 background - 自定义效果</label>
    <div class="biz-total-card" type="hasIconBg-diy">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="value">
                <b class="number">0</b>
                <!-- percentage 表示/后面的数字 -->
                <b class="percentage">/0</b>
            </div>
            <div class="label">
                <span>在线</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>统计数字卡片含有 icon 和 background - 自定义效果</label>
    <!-- --bg-url: url(背景地址) 传入需要的背景图 -->
    <!-- 设置对应的padding来达到效果 -->
    <div class="biz-total-card" type="hasIconBg-diy">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>物资仓库</span>
            </div>
            <div class="value">
                <b class="number">120</b>
                <span>个</span>
            </div>
        </div>
    </div>
    <label>统计数字卡片含有 icon 和 background - 自定义效果</label>
    <div class="biz-total-card" type="hasIconBg-diy">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>利润等额同比</span>
            </div>
            <div class="value">
                <span>增长</span>
                <b class="number">11.6</b>
                <span>%</span>
            </div>
        </div>
    </div>
    <label>统计数字卡片含有 icon 和 background - 自定义效果</label>
    <div class="biz-total-card" type="hasIconBg-diy">
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>在线</span>
            </div>
            <div class="value">
                <b class="number">0</b>
                <!-- percentage 表示/后面的数字 -->
                <b class="percentage">/0</b>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 164px;
    height: 92px;
}
</style>
```

</details>

## 统计数字卡片含有 icon 和 background - 自定义效果 - 1

<div class="example">
    <label>统计数字卡片含有 icon 和 background - 自定义效果 - 1</label>
    <div class="biz-total-card" type="hasIconBg-diy-1">
        <div class="wrapper">
            <div class="value">
                <b class="number">2</b>
                <span>起</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>统计数字卡片含有 icon 和 background - 自定义效果 - 1</label>
    <div class="biz-total-card" type="hasIconBg-diy-1">
        <div class="wrapper">
            <div class="value">
                <b class="number">2</b>
                <span>起</span>
            </div>
            <div class="label">
                <span>物资仓库</span>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 129px;
}
</style>
```

</details>

## 统计卡片扩展样式 - 1

<div class="example">
    <label>统计卡片扩展样式 - 1</label>
    <div class="biz-total-card" type="extensions-1">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
    <label>统计卡片扩展样式 - 1 含有鼠标划入效果</label>
    <div class="biz-total-card" type="extensions-1" hover>
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
    <label>统计卡片扩展样式 - 1 激活状态</label>
    <div class="biz-total-card active" type="extensions-1">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
    <label>统计卡片扩展样式 - 1 翻转</label>
    <div class="biz-total-card reverse" type="extensions-1">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>统计卡片扩展样式 - 1</label>
    <div class="biz-total-card" type="extensions-1">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
    <label>统计卡片扩展样式 - 1 含有鼠标划入效果</label>
    <div class="biz-total-card" type="extensions-1" hover>
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
    <label>统计卡片扩展样式 - 1 激活状态</label>
    <div class="biz-total-card active" type="extensions-1">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
    <label>统计卡片扩展样式 - 1 翻转</label>
    <div class="biz-total-card reverse" type="extensions-1">
        <!-- --icon-url: url(icon地址); -->
        <div class="icon"></div>
        <div class="wrapper">
            <div class="label">
                <span>园区风险等级</span>
            </div>
            <div class="value">
                <b class="number">C</b>
                <span>级</span>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-total-card {
    width: 309px;
    height: 82px;
}
</style>
```

</details>

## 卡片组

自动布局，需要容器`biz-total-card-list`具有宽高属性，默认按一行两列展示。

<div class="example group">
    <p>默认展示</p>
    <!-- style="width: 100%; height: 300px;" 只是举例子，实际不用写到行内样式 -->
    <div class="biz-total-card-list" columns='2' rows='3' style="width: 100%; height: 300px; --gap: 1rem;"> 
        <div class='content'>
            <div class="biz-total-card" type='normal' hover v-for="i in 6" :key="i">
                <div class="wrapper">
                    <div class="value">
                        <b class="number">12{{i}}</b> 
                        <span>个</span>
                    </div>
                    <div class="label">
                        <span>物资仓库</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p>异形布局</p>
    <div class="biz-total-card-list" columns='2' rows='2' style="width: 100%; height: 300px; --gap: 1rem;">
        <div class='content'>
            <div class="biz-total-card" type='normal' hover v-for="i in 4" :key="i" :style="`--merge-y: ${(i===1)?2:1}`">
                <div class="wrapper">
                    <div class="value">
                        <b class="number">12{{i}}</b> 
                        <span>个</span>
                    </div>
                    <div class="label">
                        <span>物资仓库</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p>异形布局</p>
    <div class="biz-total-card-list" columns='3' rows='3' style="width: 100%; height: 300px; --gap: 1rem;">
        <div class='content'>
            <div class="biz-total-card" type='normal' hover v-for="i in 6" :key="i" :style="`--merge-y: ${(i===1)?3:(i===2)?2:1}`">
                <div class="wrapper">
                    <div class="value">
                        <b class="number">12{{i}}</b> 
                        <span>个</span>
                    </div>
                   <div class="label">
                    <span>物资仓库</span>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="biz-total-card-list">
    <p>默认展示</p>
    <!-- style="width: 100%; height: 300px;" 只是举例子，实际不用写到行内样式 -->
    <div class="biz-total-card-list" columns='2' rows='3' style="width: 100%; height: 300px; --gap: 1rem;">
        <div class='content'>
            <div class="biz-total-card" type='normal' hover v-for="i in 6" :key="i">
                <div class="wrapper">
                    <div class="value">
                        <b class="number">12{{i}}</b>
                        <span>个</span>
                    </div>
                    <div class="label">
                        <span>物资仓库</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p>异形布局</p>
    <div class="biz-total-card-list" columns='2' rows='2' style="width: 100%; height: 300px; --gap: 1rem;">
        <div class='content'>
            <div class="biz-total-card" type='normal' hover v-for="i in 4" :key="i" :style="`--merge-y: ${(i===1)?2:1}`">
                <div class="wrapper">
                    <div class="value">
                        <b class="number">12{{i}}</b>
                        <span>个</span>
                    </div>
                    <div class="label">
                        <span>物资仓库</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p>异形布局</p>
    <div class="biz-total-card-list" columns='3' rows='3' style="width: 100%; height: 300px; --gap: 1rem;">
        <div class='content'>
            <div class="biz-total-card" type='normal' hover v-for="i in 6" :key="i" :style="`--merge-y: ${(i===1)?3:(i===2)?2:1}`">
                <div class="wrapper">
                    <div class="value">
                        <b class="number">12{{i}}</b>
                        <span>个</span>
                    </div>
                    <div class="label">
                        <span>物资仓库</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss"></style>
```

</details>

## 卡片组自定义样式参数

| 变量名称 | 描述             | 默认值               |
| -------- | ---------------- | -------------------- |
| columns  | 控制每行显示列数 | 无，必填项           |
| rows     | 控制要显示的行数 | 无，必填项           |
| --gap    | 间距             | calc(4 \* 1rem / 16) |

## 卡片组内卡片自定义样式参数

| 变量名称  | 描述                                                       | 默认值    |
| --------- | ---------------------------------------------------------- | --------- |
| --merge-x | 需要合并的数量，比如 2 行 2 列，需要某一个元素占 2 行 1 列 | 1，不合并 |
| --merge-y | 需要合并的数量，比如 2 行 2 列，需要某一个元素占 1 行 2 列 | 1，不合并 |
