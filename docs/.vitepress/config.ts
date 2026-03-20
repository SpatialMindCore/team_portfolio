import { defineConfig } from 'vitepress'

// Gitee Pages 子路径与仓库名一致（前后须带斜杠）
const BASE = '/siteam/'

// 线上访问：https://<你的用户名>.gitee.io/siteam/
// 仓库：https://gitee.com/ylin97/siteam
export default defineConfig({
  base: BASE,

  title: '空间智能工程团队',
  description:
    '空间智能工程团队技术作品集 - 三维视觉、SLAM、大模型 Agent、系统架构',
  lang: 'zh-CN',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '3DGS, SLAM, AI Agent, 渲染引擎, 数字孪生, 空间智能工程团队'
      }
    ],
    ['link', { rel: 'icon', href: `${BASE}favicon.svg`, type: 'image/svg+xml' }]
  ],

  lastUpdated: true,
  // Gitee Pages 为纯静态托管，无服务端重写 URL，关闭「干净 URL」避免 404
  cleanUrls: false,

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/' }
    ],

    sidebar: {
      '/projects/': [
        {
          text: '项目',
          items: [
            { text: '全部项目', link: '/projects/' },
            { text: '3DGS 渲染引擎', link: '/projects/3dgs-engine' },
            { text: '测量系统 (3DGS)', link: '/projects/measurement-system' },
            { text: 'SLAM + 无人机系统', link: '/projects/slam-system' },
            { text: '大模型 Agent 平台', link: '/projects/agent-platform' },
            { text: '三维重建研究', link: '/projects/reconstruction-research' },
            { text: '桥梁数字孪生 (UE)', link: '/projects/bridge-system' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://gitee.com/ylin97' }],

    footer: {
      message: '空间智能工程团队技术作品集',
      copyright: 'Copyright © 2024 空间智能工程团队'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到结果',
                resetButtonTitle: '重置搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '导航'
                }
              }
            }
          }
        }
      }
    },

    outline: {
      label: '本页内容'
    },

    editLink: {
      pattern:
        'https://gitee.com/ylin97/siteam/edit/master/docs/:path',
      text: '在 Gitee 上编辑此页面'
    }
  }
})
