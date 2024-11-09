<style lang="scss">
  .biz-tooltip{
    margin-bottom:10px;
    font-size: var(--h5);
    display:inline-block;
    .words{
      max-width:100%;
      display:inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &.block{
      display:block;
    }
  }
</style>

# Tooltip 文字提示

## 基础用法

> 🚨：html标签添加tooltip属性后，此标签的position将会设置为相对定位，注意不要覆盖影响效果！

<div class="example">
  <div class="biz-tooltip" tooltip="汉水临襄阳，花开大堤暖。佳期大堤下，泪向南云满。春风复无情，吹我梦魂散。不见眼中人，天长音信断。">鼠标移到这里看看👀</div><br/>
  <div class="biz-tooltip" placement="top" tooltip="老兔寒蟾泣天色，云楼半开壁斜白。">在👆显示</div><br/>
  <div class="biz-tooltip" placement="bottom" tooltip="玉轮轧露湿团光，鸾佩相逢桂香陌。">在👇显示</div><br/>
  <div class="biz-tooltip" placement="left" tooltip="黄尘清水三山下，更变千年如走马。">在👈显示</div><br/>
  <div class="biz-tooltip" placement="right" tooltip="遥望齐州九点烟，一泓海水杯中泻。">在👉显示</div><br/>
  <div class="biz-tooltip block" placement="top" tooltip="打工这方面，打工是不可能打工的，这辈子不可能打工的。做生意又不会做，就是偷这种东西，才能维持的了生活这样子，进看守所感觉像回家一样，在看守所里的感觉比家里感觉好多了！里面个个都是人才，说话又好听，我超喜欢里面的！">
    <span class="words">打工这方面，打工是不可能打工的，这辈子不可能打工的。做生意又不会做，就是偷这种东西，才能维持的了生活这样子，进看守所感觉像回家一样，在看守所里的感觉比家里感觉好多了！里面个个都是人才，说话又好听，我超喜欢里面的！</span>
  </div><br/>
  <div class="biz-tooltip" style="--width: 16em" tooltip="青天有月来几时，我今停杯一问之：人攀明月不可得，月行却与人相随？皎如飞镜临丹阙，绿烟灭尽清辉发？但见宵从海上来，宁知晓向云间没？白兔捣药秋复春，嫦娥孤栖与谁邻？今人不见古时月，今月曾经照古人。古人今人若流水，共看明月皆如此。唯愿当歌对酒时，月光长照金樽里。">
    <span class="words">限制Tooltip宽度</span>
  </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
<div class="example">
  <div class="biz-tooltip" tooltip="汉水临襄阳，花开大堤暖。佳期大堤下，泪向南云满。春风复无情，吹我梦魂散。不见眼中人，天长音信断。">鼠标移到这里看看👀</div><br/>
  <div class="biz-tooltip" placement="top" tooltip="老兔寒蟾泣天色，云楼半开壁斜白。">在👆显示</div><br/>
  <div class="biz-tooltip" placement="bottom" tooltip="玉轮轧露湿团光，鸾佩相逢桂香陌。">在👇显示</div><br/>
  <div class="biz-tooltip" placement="left" tooltip="黄尘清水三山下，更变千年如走马。">在👈显示</div><br/>
  <div class="biz-tooltip" placement="right" tooltip="遥望齐州九点烟，一泓海水杯中泻。">在👉显示</div><br/>
  <div class="biz-tooltip block" placement="top" tooltip="打工这方面，打工是不可能打工的，这辈子不可能打工的。做生意又不会做，就是偷这种东西，才能维持的了生活这样子，进看守所感觉像回家一样，在看守所里的感觉比家里感觉好多了！里面个个都是人才，说话又好听，我超喜欢里面的！">
    <span class="words">打工这方面，打工是不可能打工的，这辈子不可能打工的。做生意又不会做，就是偷这种东西，才能维持的了生活这样子，进看守所感觉像回家一样，在看守所里的感觉比家里感觉好多了！里面个个都是人才，说话又好听，我超喜欢里面的！</span>
  </div><br/>
  <div class="biz-tooltip" style="--width: 16em" tooltip="青天有月来几时，我今停杯一问之：人攀明月不可得，月行却与人相随？皎如飞镜临丹阙，绿烟灭尽清辉发？但见宵从海上来，宁知晓向云间没？白兔捣药秋复春，嫦娥孤栖与谁邻？今人不见古时月，今月曾经照古人。古人今人若流水，共看明月皆如此。唯愿当歌对酒时，月光长照金樽里。">
    <span class="words">限制Tooltip宽度</span>
  </div>
</div>

</template>

<style>
.biz-tooltip{
  margin-bottom:10px;
  font-size: var(--h5);
  display:inline-block;
  .words{
    max-width:100%;
    display:inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &.block{
    display:block;
  }
}
</style>
```

</details>


