import {defineConfig} from 'vitepress'
import {MermaidMarkdown, MermaidPlugin} from 'vitepress-plugin-mermaid'

export default defineConfig({
    title: "LR-408",
    lang: "zh-CN",
    description: "LR-408",
    themeConfig: {
        logo: {src: '/art/lr-408.svg', width: 24, height: 24},
        search: {
            provider: 'local'
        },
        nav: [
            {text: '主页', link: '/'},
            {text: '数据结构', link: '/ds'},
            {text: '操作系统', link: '/os'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Yang000131'},
            {icon: 'gitee', link: 'https://gitee.com/yang_311414/lr-408'},
            {icon: 'wechat', link: ''},
            {icon: 'qq', link: 'https://jq.qq.com/?_wv=1027&k=5n0k1fZJ'},
        ],
        sidebar: {
            '/ds/': [
                {
                    text: 'Index',
                    items: [
                        {
                            text: 'Base',
                            collapsed: false,
                            items: [
                                {
                                    text: '线性表',
                                    items: []
                                },
                                {
                                    text: '树',
                                    items: []
                                },
                                {
                                    text: '图',
                                    items: [
                                        {text: '图的定义', link: '/ds/base/graph/GraphDefine'},
                                        {text: '图的遍历', link: '/ds/base/graph/GraphTraversal'},
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'LeetCode',
                        }
                    ]
                }
            ],
            '/os/': [
                {
                    text: '操作系统',
                    items: [
                        {text: '大纲', link: '/os/Index'},
                        {text: '临界区互斥问题', link: '/os/Critical Section Problem'},
                        {
                            text: '经典同步问题',
                            collapsed: true,
                            items: [
                                {text: '生产者-消费者问题', link: '/os/classic_sync/Producer-Consumer Problem'},
                                {text: '橘子-苹果问题', link: '/os/classic_sync/Orange-Apple Problem'},
                                {text: '哲学家进餐问题', link: '/os/classic_sync/Dinning Philosophers Problem'},
                                {text: '读者-写者问题', link: '/os/classic_sync/Reader-Writer Problem'},
                                {text: '理发师问题', link: '/os/classic_sync/Sleeping-Barber Problem'},
                                {text: '吸烟者问题', link: '/os/classic_sync/Smokers Problem'},
                                {text: '实现前驱关系', link: '/os/classic_sync/Precedence Graph'}
                            ]
                        },
                        {
                            text: '操作系统真题答案',
                            collapsed: true,
                            items: [
                                {text: '2019年（哲学家进餐问题）', link: '/os/os_408_answer/answer_2019.md'},
                                {text: '2022年 (实现前驱关系)', link: '/os/os_408_answer/answer_2022.md'},
                                {text: '2024年（单生产者-消费者问题）', link: '/os/os_408_answer/answer_2024.md'},
                                {text: '2025年（多生产者-消费者问题）', link: '/os/os_408_answer/answer_2025.md'}
                            ]
                        },
                        {
                            text: '拓展',
                            collapsed: true,
                            items: [
                                {text: '动态优先数调度算法', link: '/os/Dynamic Priority Scheduling Algorithm'}
                            ]
                        }
                    ]
                }
            ]
        },
        outline: {
            level: [2, 4],
            label: '页面导航'
        },
        editLink: {
            pattern: 'https://gitee.com/yang_311414/lr-408/blob/doc/:path',
            text: '在Gitee编辑本页'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium',
            },
        },
        footer: {
            message: '由一可爱小白兔支持',
            copyright: 'Copyright © 2025-2026 LR-Software.'
        },
        notFound: {
            title: '页面未找到',
            quote:
                '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    },
    locales: {
        root: {label: '简体中文', lang: 'zh-Hans', dir: 'ltr'},
        en: {label: 'English', lang: 'en-US', dir: 'ltr'}
    },
    vite: {
        plugins: [
            MermaidPlugin()
        ],
        optimizeDeps: {
            include: ['mermaid'],
        },
        ssr: {
            noExternal: ['mermaid'],
        },
    },
    markdown: {
        math: true,
        config: (md) => {
            md.use(MermaidMarkdown)
        }
    }
})