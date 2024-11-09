import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import locale from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import './scss/common.scss';
let theme = '';
const getTheme = (router) => router?.split('/')?.at(2);
/** 是否开启调试模式（手动切换到单个风格，边改边看） */
const OPEN_DEBUG = false;
// 本地非调试场景
let themeAssets = {
    xiaoshan: ['https://newdev.rdapp.com:10066/store/api/style/css/theme.css'],
    tebian: ['https://newdev.rdapp.com:10066/store/api/style/css/theme-tb.css'],
};

// 部署到github与gitee上会跨域，改走jsdelivr代理
if (!import.meta.env.DEV) {
    themeAssets = {
        xiaoshan: ['../../css/theme.css'],
        tebian: ['../../css/theme-tb.css'],
    };
} else {
    // 调试环境
    if (window.location.pathname.split('/').at(2) === 'tebian') {
        import('./css/theme-tb.css');
        import('./scss/bizExtend-tb.scss');
    } else if (window.location.pathname.split('/').at(2) === 'xiaoshan') {
        import('./css/theme.css');
        import('./scss/bizExtend.scss');
    }
}

/**
 * 添加风格样式
 * @param {String} url 样式链接
 */
const addCssByLink =
    "(url) => { const link = document.querySelector('#componentStoreTheme');if (link) {link.setAttribute('href', url)} else {const oLink = document.createElement('link');oLink.setAttribute('rel', 'stylesheet');oLink.setAttribute('id', 'componentStoreTheme');oLink.setAttribute('type', 'text/css');oLink.setAttribute('href', url);const heads = document.getElementsByTagName('head');if (heads.length) heads[0].appendChild(oLink);else document.documentElement.appendChild(oLink);}}";

export default {
    ...DefaultTheme,
    enhanceApp: async ({ app, router, siteData, isServer }) => {
        // 注册ElementPlus
        app.use(ElementPlus, {
            locale,
        });
        // import('element-plus').then((module) => app.use(module));
        // 生产环境+本地非调试环境
        if (!import.meta.env.SSR && !OPEN_DEBUG) {
            // 计时器获取当前主题（暂时未找到好的监听方式）
            setInterval(() => {
                const currentTheme = getTheme(router.route.path);
                if (currentTheme === theme || !Reflect.has(themeAssets, currentTheme)) return;
                theme = currentTheme;
                eval(addCssByLink)(themeAssets[currentTheme]);
            }, 1000);
        }
    },
};
