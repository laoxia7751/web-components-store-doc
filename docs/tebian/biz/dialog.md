<style lang="scss" scoped>
    .biz-map-dialog{
        width: 100%;
        /* 头部按钮 */
        .biz-btn{
            margin-right: var(--gap-xl);
            width: 80px;
            height: 28px;
            span{
                display: block;
                font-size: 14px;
                line-height: 24px;
            }
        }
        .contain{
            height: 200px;
        }
        /* 底部按钮 */
        .biz-dialog-btn{
            width: 98px;
            height: 32px;
        }
    }
    
    .biz-point-dialog{
        width: 400px;
        .contain{
            height: 200px;
        }
        /* 底部按钮 */
        .biz-dialog-btn{
            width: 98px;
            height: 32px;
        }
    }
</style>

# Dialog 弹窗

## 功能弹窗

<div class="example">
    <div class="biz-map-dialog">
        <div class="header">
            <div class="header-left">弹窗标题</div>
            <div class="header-right">
                <button class="biz-btn"><span>周边监控</span></button>
                <i class="iconfont icon-close"></i>
            </div>
        </div>
        <div class="contain">
            内容区域
        </div>
        <div class="footer">
             <button class="biz-dialog-btn"><span>重置</span></button>
             <button class="biz-dialog-btn" light><span>确定</span></button>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
    <div class="example">
        <div class="biz-map-dialog">
            <div class="header">
                <div class="header-left">弹窗标题</div>
                <div class="header-right">
                    <button class="biz-btn"><span>周边监控</span></button>
                    <i class="iconfont icon-close"></i>
                </div>
            </div>
            <div class="contain">
                内容区域
            </div>
            <div class="footer">
                <button class="biz-dialog-btn"><span>重置</span></button>
                <button class="biz-dialog-btn" light><span>确定</span></button>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="scss">
.biz-map-dialog{
    width: 100%;
    /* 头部按钮 */
    .biz-btn{
        margin-right: var(--gap-xl);
        width: 80px;
        height: 28px;
        span{
            display: block;
            font-size: 14px;
            line-height: 24px;
        }
    }
    .contain{
        height: 200px;
    }
    /* 底部按钮 */
    .biz-dialog-btn{
        width: 98px;
        height: 32px;
    }
}
</style>
```

</details>


## 点位弹窗

<div class="example">
    <div class="biz-point-dialog">
        <div class="header">
            <div class="header-left">弹窗标题</div>
            <div class="header-right">
                <i class="iconfont icon-close"></i>
            </div>
        </div>
        <div class="contain">
            内容区域
        </div>
        <div class="footer">
             <button class="biz-dialog-btn"><span>重置</span></button>
             <button class="biz-dialog-btn" light><span>确定</span></button>
        </div>
    </div>
</div>

<details open>
<summary>展开查看</summary>

```vue
<template>
<div class="example">
    <div class="biz-point-dialog">
        <div class="header">
            <div class="header-left">弹窗标题</div>
            <div class="header-right">
                <i class="iconfont icon-close"></i>
            </div>
        </div>
        <div class="contain">
            内容区域
        </div>
        <div class="footer">
             <button class="biz-dialog-btn"><span>重置</span></button>
             <button class="biz-dialog-btn" light><span>确定</span></button>
        </div>
    </div>
</div>
</template>
<script setup></script>

<style lang="scss">
.biz-point-dialog{
    width: 400px;
    .contain{
        height: 200px;
    }
    /* 底部按钮 */
    .biz-dialog-btn{
        width: 98px;
        height: 32px;
    }
}
</style>
```

</details>