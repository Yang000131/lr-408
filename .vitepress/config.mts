import {defineConfig} from 'vitepress'
import {MermaidMarkdown, MermaidPlugin} from 'vitepress-plugin-mermaid'

export default defineConfig({
    title: "LR-408",
    themeConfig: {
        logo: {src: '/art/lr-408.svg', width: 24, height: 24},
        search: {
            provider: 'local'
        },
        nav: [
            {text: 'Home', link: '/'},
            {text: 'DS', link: '/ds'},
            {text: 'OS', link: '/os'},
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
                    text: '大纲', link: '/os/Index',
                    items: [
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
        socialLinks: [
            {icon: 'gitee', link: 'https://gitee.com/yang_311414/lr-408'}
        ],
        editLink: {
            pattern: 'https://gitee.com/yang_311414/lr-408/blob/doc/:path',
            text: 'Edit this page on Gitee'
        },
        footer: {
            message: '由一可爱小白兔支持',
            copyright: 'Copyright © 2025-2026 LR-Software.'
        }
    },
    lastUpdated: true,
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