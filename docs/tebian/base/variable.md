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

# 企业蓝风格css配置

<details open>
<summary>展开查看</summary>

```css
:root {
    /* 全局配置 */
    /* 主题色rgb值#4C98FF */
    --color: 76, 152, 255;
    /* 辅色 rgb(76, 244, 255) */
    --lightColor: 76, 244, 255;
    /* 主题色#4C98FF */
    --primaryColor: rgba(var(--color), 1);
    /* 透明色 */
    --opacityColor: rgba(var(--color), 0);
    /* 辅助色/纯色/1 */
    --primaryColor-1: rgba(var(--color), 0.5);
    /* 辅助色/纯色/2 */
    --primaryColor-2: rgba(var(--color), 0.3);
    /* 辅助色/纯色/3 */
    --primaryColor-3: rgba(var(--color), 0.2);
    /* 辅助色/纯色/4 */
    --primaryColor-4: rgba(var(--color), 0.1);
    /* 文本色/0 */
    --textColor: #ffffff;
    /* 文本色/主要 */
    --textColor-1: #ffffff;
    /* 文本色/次要 */
    --textColor-2: #aac3e6;
    /* 文本色/正文 */
    --textColor-3: #d7e4f5;
    /* 背景色##0A1228 */
    --bgColor: rgba(10, 18, 40, 1);
    /* 前景色 */
    --fgColor: 2, 24, 59;

    /* 背景色-点位弹窗 */
    --dialogBgColor: rgba(0, 12, 26, 0.8);
    /* 阴影-1 */
    --shadow-1: 0 calc(8 * 1rem / 16) calc(20 * 1rem / 16) rgba(var(--fgColor), 0.5);
    /* 内阴影-1 */
    --insetShadow-1: inset 0 0 calc(12 * 1rem / 16) var(--primaryColor);
    /* 阴影-2 */
    --shadow-2: 0 0 calc(50 * 1rem / 16) rgba(var(--fgColor), 1);
    /* 内阴影-2 */
    --insetShadow-2: inset 0 0 calc(20 * 1rem / 16) var(--primaryColor);
    /* 内阴影-3 */
    --insetShadow-3: inset 0 0 calc(20 * 1rem / 16) rgb(var(--lightColor));
    /* h1 仅用于顶部大标题中的特殊文字 */
    --h1: calc(34 * 1rem / 16);
    /* h2 标题 - 大 */
    --h2: calc(20 * 1rem / 16);
    /* h3 标题 - 中 */
    --h3: calc(18 * 1rem / 16);
    /* h4 标题 - 小 */
    --h4: calc(16 * 1rem / 16);
    /* h5 正文 */
    --h5: calc(16 * 1rem / 16);
    /* h6 (前端预留) */
    --h6: calc(12 * 1rem / 16);
    /* n1 数字 - 大 */
    --n1: calc(36 * 1rem / 16);
    /* n2 数字 - 中 */
    --n2: calc(24 * 1rem / 16);
    /* n3 数字 - 小 */
    --n3: calc(16 * 1rem / 16);
    /* 辅助色/渐变/1 */
    --linearBg1: linear-gradient(135deg, var(--textColor) -3.33%, var(--opacityColor) 103.33%);
    /* 辅助色/渐变/2 */
    --linearBg2: linear-gradient(228.27deg, var(--opacityColor) 0.01%, var(--primaryColor) 54.17%, var(--opacityColor) 100%);
    /* 辅助色/渐变/3 */
    --linearBg3: linear-gradient(227.29deg, var(--opacityColor) 0%, rgb(var(--lightColor)) 51.52%, var(--opacityColor) 103.05%);
    /* 辅助色/渐变/4 */
    --linearBg4: linear-gradient(180deg, var(--primaryColor-2) 0%, var(--primaryColor-4) 100%);
    /* 【业务交互组件】图标渐变 */
    --iconLinearBg: linear-gradient(135deg, var(--textColor) -3.33%, var(--primaryColor) 103.33%);
    /* 小间距,用于同组内容的间距 */
    --gap-xs: calc(4 * 1rem / 16);
    --gap-sm: calc(8 * 1rem / 16);
    --gap-md: calc(12 * 1rem / 16);
    --gap-lg: calc(16 * 1rem / 16);
    --gap-xl: calc(20 * 1rem / 16);
    /* 大间距,用于不同组内容的间距 */
    --group-gap-sm: calc(24 * 1rem / 16);
    --group-gap-md: calc(32 * 1rem / 16);
    --group-gap-lg: calc(40 * 1rem / 16);
    /*小圆角,用于数据展示和数据输入等常规组件的圆角*/
    --radius-sm: calc(4 * 1rem / 16);
    /*中圆角,用于图例、弹窗、卡片列表等定制化内容的圆角*/
    --radius-md: calc(10 * 1rem / 16);
    /*大圆角,用于业务组件板的圆角*/
    --radius-lg: calc(20 * 1rem / 16);
    /*全圆角,用于专题导航、弹窗操作按钮和时间切换等组件中，保证的边角始终为圆角*/
    --radius-xl: 50%;

    /* 布局配置 */
    /* 大屏宽度（用于固定宽度的布局） */
    --main-width: 3200px;
    /* 头部组件高度 */
    --header-height: calc(80 * 1rem / 16);
    /* 主体内容区域与头部的边距 */
    --main-margin-top: calc(12 * 1rem / 16);
    /* 主体内容区域的底部内边距 */
    --main-padding-bottom: calc(24 * 1rem / 16);
    /* 主体内容区域高度 */
    --main-height: calc(100vh - var(--header-height) - var(--main-margin-top));
     /* 地图左右侧组件与两侧组件之间的间距*/
    --map-components-padding: calc(20 * 1rem / 16);

    /* 业务组件配置 */
    /* 两侧业务组件之间的行间距 */
    --biz-component-row-gap: calc(20 * 1rem / 16);
    /* 两侧业务组件列之间的间距 */
    --biz-component-column-gap: calc(30 * 1rem / 16);
    /* 两侧业务组件列的内部边距 */
    --biz-component-padding: calc(20 * 1rem / 16);
    /* 两侧业务组件标题高度 */
    --biz-title-height: calc(32 * 1rem / 16);
    /* 两侧业务组件标题颜色 */
    --biz-title-color: var(--textColor-1);
    /* 两侧业务组件标题字体尺寸 */
    --biz-title-font-size: var(--h2);
    /* 两侧业务组件筛选项表单组件高度 */
    --biz-filter-height: calc(28 * 1rem / 16);
    /* 两侧业务组件筛选项文字默认颜色 */
    --biz-filter-color: var(--textColor-2);
    /* 两侧业务组件筛选项文字高亮颜色 */
    --biz-filter-color-active: var(--textColor-1);
    /* 两侧业务组件筛选项文字尺寸 */
    --biz-filter-font-size: calc(14 * 1rem / 16);
    /* 两侧业务组件内容区和标题之间的上下间隔*/
    --biz-content-padding: calc(12 * 1rem / 16);
    /* 页面列宽 */
    --view-column-width: calc(580 * 1rem / 16);
    
    /* 两侧业务组件背景色-渐变模式  moduleType='2'*/
    --moduleBgColor: 10, 18, 40;
    /* 两侧业务组件渐变模式的左侧宽度  moduleType='2'*/
    --biz-module-left-width: calc(var(--view-column-width) + var(--biz-component-column-gap) * 2 + 140 * 1rem / 16);
    /* 两侧业务组件渐变模式的右侧宽度  moduleType='2'*/
    --biz-module-right-width: calc(var(--view-column-width) + var(--biz-component-column-gap) * 2 + 140 * 1rem / 16);
    /* 两侧业务组件渐变模式的高度  moduleType='2'*/
    --biz-module-height: calc(100vh + var(--header-height) + var(--main-margin-top));

    /** PC端配置移动端组件可视化 */
    /* 移动端背景色 #06101B */
    --mobileColor: rgb(6, 16, 27);
    /** 头部插槽高度 */
    --mobile-header-height: calc(120 * 1rem / 16);
    /** 底部插槽高度 */
    --mobile-footer-height: calc(88 * 1rem / 16);
    /** 移动端适配最大宽度 */
    /* prettier-ignore */
    --screenMaxWidth: 1366PX;
}

.mobileScreen {
    /** 字号/h1 */
    --h1: calc(40 * 1rem / 28.125);
    /** 字号/h2 */
    --h2: calc(32 * 1rem / 28.125);
    /** 字号/h3 */
    --h3: calc(28 * 1rem / 28.125);
    /** 字号/h4 */
    --h4: calc(24 * 1rem / 28.125);
    /** 字号/h5 */
    --h5: calc(24 * 1rem / 28.125);
    /** 字号/h6 */
    --h6: calc(24 * 1rem / 28.125);
    /* 小间距,用于同组内容的间距 */
    --gap-xs: calc(4 * 1rem / 28.125);
    --gap-sm: calc(8 * 1rem / 28.125);
    --gap-md: calc(12 * 1rem / 28.125);
    --gap-lg: calc(16 * 1rem / 28.125);
    --gap-xl: calc(20 * 1rem / 28.125);
    /* 大间距,用于不同组内容的间距 */
    --group-gap-sm: calc(24 * 1rem / 28.125);
    --group-gap-md: calc(32 * 1rem / 28.125);
    --group-gap-lg: calc(40 * 1rem / 28.125);
    /*小圆角,用于数据展示和数据输入等常规组件的圆角*/
    --radius-sm: calc(4 * 1rem / 28.125);
    /*中圆角,用于图例、弹窗、卡片列表等定制化内容的圆角*/
    --radius-md: calc(8 * 1rem / 28.125);
    /*大圆角,用于业务组件板的圆角*/
    --radius-lg: calc(16 * 1rem / 28.125);
    /* 移动端背景色 #06101B */
    --mobileColor: rgb(6, 16, 27);

    /** 移动端业务样式配置 */
    /** 头部插槽高度 */
    --mobile-header-height: calc(120 * 1rem / 28.125);
    /** 底部插槽高度 */
    --mobile-footer-height: calc(88 * 1rem / 28.125);
   /** 移动端适配最大宽度 */
    /* prettier-ignore */
    --screenMaxWidth: 1366PX;
    /** 业务组件标题字体 */
    --biz-title-font-size: var(--h2);
    /** 业务组件之间的行间距 */
    --biz-component-row-gap: calc(32 * 1rem / 28.125);
    /* 业务组件列的内部边距 */
    --biz-component-padding: calc(32 * 1rem / 28.125);
}
```

</details>
