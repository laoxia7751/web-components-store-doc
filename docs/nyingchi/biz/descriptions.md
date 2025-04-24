<style lang="scss" scoped>
.biz-btn {
    padding:0 10px;
    font-size: var(--h6);
    margin-left: var(--gap-sm);
}

.biz-label{
    font-size: var(--h6);
    margin:0 0 0 var(--gap-sm);
}

label {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>

# Descriptions 描述列表

## 基础用法

<div class="example">
    <label>默认布局</label>
    <!-- 默认描述列表样式 -->
    <div class="biz-descriptions">
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>紧凑布局</label>
    <!-- layout="compact" 为紧凑布局 -->
    <div class="biz-descriptions" layout="compact">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>表格类型布局</label>
    <!-- layout="table" 为表格样式布局 -->
    <div class="biz-descriptions" layout="table">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>表格类型布局--仅label带背景色</label>
    <div class="biz-descriptions " layout="table" label>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>默认布局</label>
    <!-- 默认描述列表样式 -->
    <div class="biz-descriptions">
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>紧凑布局</label>
    <!-- layout="compact" 为紧凑布局 -->
    <div class="biz-descriptions" layout="compact">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>表格类型布局</label>
    <!-- layout="table" 为表格样式布局 -->
    <div class="biz-descriptions" layout="table">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>表格类型布局--仅label带背景色</label>
    <div class="biz-descriptions " layout="table" label>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
</template>
```

</details>

## 多列布局

<div class="example">
    <label>默认样式多列布局</label>
    <!-- column为多少表示多少列 -->
    <div class="biz-descriptions" column='3'>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>紧凑样式多列布局</label>
    <!-- column为多少表示多少列 -->
    <div class="biz-descriptions" layout='compact' column='3'>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>表格样式多列布局</label>
    <!-- column为多少表示多少列 -->
    <div class="biz-descriptions" layout='table' column='2'>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>默认样式多列布局</label>
    <!-- column为多少表示多少列 -->
    <div class="biz-descriptions" column="3">
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>紧凑样式多列布局</label>
    <!-- column为多少表示多少列 -->
    <div class="biz-descriptions" layout="compact" column="3">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
    <label>表格样式多列布局</label>
    <!-- column为多少表示多少列 -->
    <div class="biz-descriptions" layout="table" column="2">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这是内容</div>
        </div>
    </div>
</template>
```

</details>

## 内容多样性

<div class="example">
    <label>默认样式</label>
    <div class="biz-descriptions">
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">
                当您面临海量文字测试的挑战时，我们的工具为您提供了高效而可靠的解决方案。无论是检验语法结构、词汇使用还是进行自然语言处理测试，我们的平台都以出色的性能和广泛的应用领域赢得了用户的信任。不仅仅是字数，我们更专注于提供质量和准确性。通过我们强大的算法和深度学习技术，我们的系统能够适应各种文本需求，从而确保您的测试工作更为高效。拥有丰富的语言知识和智能处理能力，我们的平台为您的文字测试提供了全面而可靠的支持。不论您的测试规模有多大，我们都能够确保您获得令人满意的结果，助力您在文字处理的广泛领域中取得成功。
            </div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">
                这是内容和按钮<button class="biz-btn"><span>按钮</span></button>
            </div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容和标签<span class="biz-label small">默认</span></div>
        </div>
    </div>
    <label>紧凑样式多列布局</label>
    <div class="biz-descriptions" layout="compact" column="3">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
    </div>
    <label>表格样式多列布局</label>
    <div class="biz-descriptions" layout="table" column="2">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">
                内容和按钮<button class="biz-btn"><span>按钮</span></button>
            </div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">内容和标签<span class="biz-label small">默认</span></div>
        </div>
    </div>
    <label>默认样式文本溢出</label>
    <!-- text-overflow='n' 表示n行文本溢出省略号 -->
    <div class="biz-descriptions" text-overflow='3'>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">
                当您面临海量文字测试的挑战时，我们的工具为您提供了高效而可靠的解决方案。无论是检验语法结构、词汇使用还是进行自然语言处理测试，我们的平台都以出色的性能和广泛的应用领域赢得了用户的信任。不仅仅是字数，我们更专注于提供质量和准确性。通过我们强大的算法和深度学习技术，我们的系统能够适应各种文本需求，从而确保您的测试工作更为高效。拥有丰富的语言知识和智能处理能力，我们的平台为您的文字测试提供了全面而可靠的支持。不论您的测试规模有多大，我们都能够确保您获得令人满意的结果，助力您在文字处理的广泛领域中取得成功。
            </div>
        </div>
    </div>
    <label>表格样式多列布局文本溢出</label>
    <!-- text-overflow='1' 表示单行文本溢出省略号 -->
    <div class="biz-descriptions" layout="table" column="2" text-overflow='1'>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <label>默认样式</label>
    <div class="biz-descriptions">
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">
                当您面临海量文字测试的挑战时，我们的工具为您提供了高效而可靠的解决方案。无论是检验语法结构、词汇使用还是进行自然语言处理测试，我们的平台都以出色的性能和广泛的应用领域赢得了用户的信任。不仅仅是字数，我们更专注于提供质量和准确性。通过我们强大的算法和深度学习技术，我们的系统能够适应各种文本需求，从而确保您的测试工作更为高效。拥有丰富的语言知识和智能处理能力，我们的平台为您的文字测试提供了全面而可靠的支持。不论您的测试规模有多大，我们都能够确保您获得令人满意的结果，助力您在文字处理的广泛领域中取得成功。
            </div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">
                这是内容和按钮<button class="biz-btn"><span>按钮</span></button>
            </div>
        </div>
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">这是内容和标签<span class="biz-label small">默认</span></div>
        </div>
    </div>
    <label>紧凑样式多列布局</label>
    <div class="biz-descriptions" layout="compact" column="3">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
    </div>
    <label>表格样式多列布局</label>
    <div class="biz-descriptions" layout="table" column="2">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">
                内容和按钮<button class="biz-btn"><span>按钮</span></button>
            </div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">内容和标签<span class="biz-label small">默认</span></div>
        </div>
    </div>
    <label>默认样式文本溢出</label>
    <!-- text-overflow='n' 表示n行文本溢出省略号 -->
    <div class="biz-descriptions" text-overflow="3">
        <div class="descriptions-item">
            <i class="iconfont icon-title"></i>
            <div class="label">标题</div>
            <div class="content">
                当您面临海量文字测试的挑战时，我们的工具为您提供了高效而可靠的解决方案。无论是检验语法结构、词汇使用还是进行自然语言处理测试，我们的平台都以出色的性能和广泛的应用领域赢得了用户的信任。不仅仅是字数，我们更专注于提供质量和准确性。通过我们强大的算法和深度学习技术，我们的系统能够适应各种文本需求，从而确保您的测试工作更为高效。拥有丰富的语言知识和智能处理能力，我们的平台为您的文字测试提供了全面而可靠的支持。不论您的测试规模有多大，我们都能够确保您获得令人满意的结果，助力您在文字处理的广泛领域中取得成功。
            </div>
        </div>
    </div>
    <label>表格样式多列布局文本溢出</label>
    <!-- text-overflow='1' 表示单行文本溢出省略号 -->
    <div class="biz-descriptions" layout="table" column="2" text-overflow="1">
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
        <div class="descriptions-item">
            <div class="label">标题</div>
            <div class="content">这段内容可以帮助测试文字很多的时候的样子</div>
        </div>
    </div>
</template>
```

</details>
