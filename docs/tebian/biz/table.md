<style lang="scss" scoped>
label {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}

.biz-native-table{
   width:100%;
   height:350px;
}

.scrollX {
    th,
    tr {
        width: 150px; /* 必须设置宽度 */
    }
}

.wth{
    width: 200px;
}

.table{
    table-layout: fixed;
}

.fixedTR{
    position: sticky;
    top: 48px; /* 内容第二行固定在标题下 */
    z-index: 2;
}

.fixedTd,.fixedTh{
    position: sticky;
    left: 0; /* 第二列固定在左 */
    z-index: 1;
}
.fixedTh{
    z-index: 3 !important;
}
</style>

# Table表格

## 基础用法

> ⚠:td元素下,如需单行文本省略，添加类名 ellipsis，默认max-width: pxToRem(200)


<div class="example">
    <label>默认布局</label>
    <div class="biz-native-table">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
            </tr>
            <tr>
                <td>第一行内容内容内容</td>
                <td>content_内容12</td>
                <td>content_内容13</td>
            </tr>
            <tr>
                <td class="ellipsis" style="--max-width:200">单行文本内容省略单行文本内容省略单行</td>
                <td>content_内容</td>
                <td>content_内容</td>
            </tr>
            <tr>
                <td>content_内容</td>
                <td>content_内容</td>
                <td>content_内容</td>
            </tr>
            <tr>
                <td>content_内容</td>
                <td>content_内容</td>
                <td>content_内容</td>
            </tr>
        </table>
    </div>
    <label>边框表格</label>
    <div class="biz-native-table border" style="--border-color:rgba(0, 156, 255, 0.3)">
        <table>
            <tr>
                <th>标题</th>
                <th>title_2</th>
                <th>title_3</th>
            </tr>
            <tr v-for="i in 4" :key='i'>
                <td>第一行内容内容内容</td>
                <td>content_1</td>
                <td>$content_1</td>
            </tr>
        </table>
    </div>
    <label>斑马纹表格</label>
    <div class="biz-native-table stripe">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
                <th>title_4</th>
            </tr>
            <tr v-for="i in 5" :key='i'>
                <td>第一行内容内容内容</td>
                <td>content_1</td>
                <td>$content_1</td>
                <td>$content_1</td>
            </tr>
        </table>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>默认布局</label>
    <div class="biz-native-table">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
            </tr>
            <tr>
                <td>第一行内容内容内容</td>
                <td>content_内容12</td>
                <td>content_内容13</td>
            </tr>
            <tr>
                <td class="ellipsis">单行文本内容省略单行文本内容省略单行</td>
                <td>content_内容</td>
                <td>content_内容</td>
            </tr>
            <tr>
                <td>content_内容</td>
                <td>content_内容</td>
                <td>content_内容</td>
            </tr>
            <tr>
                <td>content_内容</td>
                <td>content_内容</td>
                <td>content_内容</td>
            </tr>
        </table>
    </div>
    <label>边框表格</label>
    <div class="biz-native-table border" style="--border-color:rgba(0, 156, 255, 0.3)">
        <table>
            <tr>
                <th>标题</th>
                <th>title_2</th>
                <th>title_3</th>
            </tr>
            <tr v-for="i in 4" :key='i'>
                <td>第一行内容内容内容</td>
                <td>content_1</td>
                <td>$content_1</td>
            </tr>
        </table>
    </div>
    <label>斑马纹表格</label>
    <div class="biz-native-table stripe">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
                <th>title_4</th>
            </tr>
            <tr v-for="i in 5" :key='i'>
                <td>第一行内容内容内容</td>
                <td>content_1</td>
                <td>$content_1</td>
                <td>$content_1</td>
            </tr>
        </table>
    </div>
</div>
</template>

<style>
.biz-native-table{
   width:100%;
   height:350px; /* 固定高度 */
}
</style>
```

</details>

## 支持滚动

<div class="example">
    <label>表格-x轴滚动</label>
    <div class="biz-native-table scrollX">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
                <th>title_4</th>
                <th>title_5</th>
                <th>title_6</th>
                <th>title_7</th>
            </tr>
            <tr v-for="i in 5" :key='i'>
                <td>第{{i}}行内容</td>
                <td>content_1</td>
                <td>content_1</td>
                <td>content_1</td>
                <td>content_1</td>
                <td>content_6</td>
                <td>content_内容内容内容</td>
            </tr>
        </table>
    </div>
    <label>表格-Y轴滚动(头部悬浮添加类名fixed)</label>
    <div class="biz-native-table  scrollY fixed">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
                <th>title_4</th>
                <th>title_5</th>
            </tr>
            <tr v-for="i in 10" :key="i">
                <td>第{{i}}行内容内容</td>
                <td>content{{i}}</td>
                <td>content{{i}}</td>
                <td>content{{i}}</td>
                <td>content{{i}}</td>
            </tr>
        </table>
    </div>
       <label>表格-XY轴滚动，固定标题(加类名fixed)</label>
    <label>固定行列--由样式实现</label>
    <div class="biz-native-table scrollXY stripe fixed">
        <table class="table">
            <tr style="z-index:5;">
                <th class="wth">title_1</th>
                <th class="wth fixedTh">title_2</th>
                <th class="wth">title_3</th>
                <th class="wth">title_4</th>
                <th class="wth">title_5</th>
                <th class="wth">title_6</th>
            </tr>
            <tr v-for="i in 9" :key='i' :class="i === 2 ? 'fixedTR' : ''">
                <td class="wth ellipsis">第{{i}}行内容内容内容单行文本省略</td>
                <td class="wth fixedTd">content_{{i}}</td>
                <td class="wth">内容content_{{i}}</td>
                <td class="wth">内容content_{{i}}</td>
                <td class="wth">内容content_{{i}}</td>
                <td class="wth">内容内容content</td>
            </tr>
        </table>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
     <label>表格-x轴滚动</label>
    <div class="biz-native-table scrollX">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
                <th>title_4</th>
                <th>title_5</th>
                <th>title_6</th>
                <th>title_7</th>
            </tr>
            <tr v-for="i in 5" :key='i'>
                <td>第{{i}}行内容</td>
                <td>content_1</td>
                <td>content_1</td>
                <td>content_1</td>
                <td>content_1</td>
                <td>content_6</td>
                <td>content_内容内容内容</td>
            </tr>
        </table>
    </div>
    <label>表格-Y轴滚动(头部悬浮添加类名fixed)</label>
    <div class="biz-native-table  scrollY fixed">
        <table>
            <tr>
                <th>title_1</th>
                <th>title_2</th>
                <th>title_3</th>
                <th>title_4</th>
                <th>title_5</th>
            </tr>
            <tr v-for="i in 10" :key="i">
                <td>第{{i}}行内容内容</td>
                <td>content{{i}}</td>
                <td>content{{i}}</td>
                <td>content{{i}}</td>
                <td>content{{i}}</td>
            </tr>
        </table>
    </div>
    <label>表格-XY轴滚动，固定标题(加类名fixed)</label>
    <label>固定行列--由样式实现</label>
    <div class="biz-native-table scrollXY stripe fixed">
        <table>
            <tr style="z-index:1">
                <th class="wth">title_1</th>
                <th class="wth fixedR fixedC fixedTh">title_2</th>
                <th class="wth">title_3</th>
                <th class="wth">title_4</th>
                <th class="wth">title_5</th>
                <th class="wth">title_6</th>
            </tr>
            <tr v-for="i in 9" :key='i' :class="i === 2 ? 'fixedTR' : ''" class="ellipsis">
                <td class="wth ellipsis">第{{i}}行内容内容内容单行文本省略</td>
                <td class="wth fixedC fixedTd">content_{{i}}</td>
                <td class="wth">内容content_{{i}}</td>
                <td class="wth">内容content_{{i}}</td>
                <td class="wth">内容content_{{i}}</td>
                <td class="wth">内容内容content</td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss">
.biz-native-table{
   width:100%;
   height:350px;

    &.scrollX {
        th,
        tr {
            width: 150px; /* 必须设置宽度 */
        }
    }
    &.scrollXY{
        table {
            tr:nth-child(4) {
                position: sticky;
                top: pxToRem(48); /* 内容第二行固定在标题下 */
                z-index: 2;
            }

            td:nth-child(2),
            th:nth-child(2) {
                position: sticky;
                left: 0; /* 第二列固定在左 */
                z-index: 1;
            }

            th:nth-child(2) {
                z-index: 3;
            }
        }
    }   
}     
</style>
```

</details>

