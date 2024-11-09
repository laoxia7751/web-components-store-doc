/** 风格集合 */
const themes = [
    { text: '萧山(政务蓝)风格', link: '/xiaoshan/base/' },
    { text: '特变(企业蓝)风格', link: '/tebian/base/' },
];
/** 根据风格生成路由 */
const themeChildRoute = (theme) => {
    return {
        [`/${theme}/`]: [
            {
                text: '基础样式',
                link: `/${theme}/base/`,
                items: [
                    {
                        text: '说明',
                        link: `/${theme}/base/index`,
                    },
                    {
                        text: '配置项',
                        link: `/${theme}/base/variable`,
                    },
                ],
            },
            {
                text: '业务组件',
                link: `/${theme}/biz/`,
                items: [
                    {
                        text: 'Button按钮',
                        link: `/${theme}/biz/button`,
                    },
                    {
                        text: 'Label标签',
                        link: `/${theme}/biz/label`,
                    },
                    {
                        text: 'Rank排名标签',
                        link: `/${theme}/biz/rank`,
                    },
                    {
                        text: 'Progress进度条',
                        link: `/${theme}/biz/progress`,
                    },
                    {
                        text: 'Card卡片',
                        link: `/${theme}/biz/card`,
                    },
                    {
                        text: 'CardList卡片列表',
                        link: `/${theme}/biz/cardList`,
                    },
                    {
                        text: 'TotalCard统计卡片',
                        link: `/${theme}/biz/totalCard`,
                    },
                    {
                        text: 'Dialog弹窗',
                        link: `/${theme}/biz/dialog`,
                    },
                    {
                        text: 'Tooltip文字提示',
                        link: `/${theme}/biz/tooltip`,
                    },
                    {
                        text: 'Panel面板',
                        link: `/${theme}/biz/panel`,
                    },
                    {
                        text: 'PointButton图层点位按钮',
                        link: `/${theme}/biz/pointButton`,
                    },
                    {
                        text: 'Descriptions描述列表',
                        link: `/${theme}/biz/descriptions`,
                    },
                    {
                        text: 'Table表格',
                        link: `/${theme}/biz/table`,
                    },
                    {
                        text: 'Flip翻牌',
                        link: `/${theme}/biz/flip`,
                    },
                    {
                        text: 'Tab选项卡',
                        link: `/${theme}/biz/tab`,
                    },
                ],
            },
        ],
    };
};
export default {
    ignoreDeadLinks: true,
    appearance: 'dark',
    base: '/web-components-store-doc/',
    outDir: '../../../web-components-store-biz-style-dlc/docs',
    themeConfig: {
        siteTitle: false,
        logo: '/avatar.png',
        nav: [
            { text: '指南', link: '/guide/' },
            {
                text: '风格组件',
                items: themes,
            },
        ],
        socialLinks: [{ icon: 'github', link: 'http://git.rdapp.com/visulization/web-components-store' }],
        sidebar: {
            '/guide/': [
                {
                    items: [
                        {
                            text: '说明',
                            link: '/guide/',
                        },
                        {
                            text: '安装',
                            link: '/guide/installation',
                        },
                        {
                            text: '使用',
                            link: '/guide/use',
                        },
                        {
                            text: '快速开始',
                            link: '/guide/quickstart',
                        },
                        {
                            text: '开发计划',
                            link: '/guide/Todo',
                        },
                    ],
                },
                {
                    text: '进阶',
                    items: [
                        {
                            text: 'xx',
                            link: '/xx',
                        },
                    ],
                },
            ],
            ...themeChildRoute('xiaoshan'),
            ...themeChildRoute('tebian'),
        },
    },
};
