# 空间智能工程团队作品集网站

面向三维视觉与智能系统工程的专业技术团队展示平台，展示我们在 3D 渲染、SLAM、AI 工程与系统架构领域的技术能力。

![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![VitePress](https://img.shields.io/badge/VitePress-1.x-purple)

---

## 📌 项目与部署地址

- 仓库（SSH）：**`git@github.com:SpatialMindCore/team_portfolio.git`**
- GitHub Pages：**`https://spatialmindcore.github.io/team_portfolio/`**
- 部署说明：[deploy-github.md](./docs/deploy-github.md)

---

## 🚀 快速开始

### 1. 环境要求

- Node.js >= 18

---

### 2. 拉取项目

```bash
git clone git@github.com:SpatialMindCore/team_portfolio.git
cd team_portfolio
```

------

### 3. 安装依赖

```bash
npm install
```

------

## 🏗️ 构建项目

```bash
npm run build
```

构建输出目录：

```text
docs/.vitepress/dist/
```

------

## 👀 本地预览

### 开发模式（热更新）

```bash
npm run dev
```

### 生产预览（接近部署效果）

```bash
npm run preview
```

------

## 📂 项目结构

```text
team_portfolio/
├── docs/
│   ├── .vitepress/
│   │   └── config.ts                   # VitePress 配置（必须设置 base）
│   ├── index.md                        # 首页
│   ├── deploy-github.md                # GitHub Pages 部署说明
│   ├── projects/
│   │   ├── index.md
│   │   ├── 3dgs-engine.md
│   │   ├── measurement-system.md
│   │   ├── slam-system.md
│   │   ├── agent-platform.md
│   │   ├── reconstruction-research.md
│   │   └── bridge-system.md
│   ├── assets/                         # 文档内资源
│   └── public/                         # 静态资源（favicon、LOGO 等）
├── package.json
└── tsconfig.json
```

> ⚠️ `docs/.vitepress/` 是 VitePress 默认配置目录
> 根目录 `.vitepress/` 非必须，如未使用可删除

------

## ⚙️ 关键配置（GitHub Pages 必看）

如果部署到：

```text
https://spatialmindcore.github.io/team_portfolio/
```

必须在配置中设置：

```ts
// docs/.vitepress/config.ts
export default defineConfig({
  base: '/team_portfolio/',
})
```

> ⚠️ 否则静态资源（JS / CSS）会加载失败

------

## ✨ 功能特性

- 响应式设计（桌面 / 平板 / 手机）
- 深色模式支持
- 中文全文搜索
- 代码语法高亮
- Mermaid 图表支持
- SEO 优化（Meta / 结构化数据）
- 项目画廊展示

------

## ➕ 添加新项目

1）创建新文件：在 `docs/projects/` 目录下创建 `your-project.md`

2）添加 frontmatter（文件开头）：

```
---
title: 你的项目名称
description: 一句话描述项目
---
```

3）编写项目内容：按照模板编写正文

4）更新项目列表：编辑 `docs/projects/index.md`，在 `<script setup>` 的 projects 数组中添加新项目的元数据

5）更新侧边栏：编辑 `.vitepress/config.ts`，在侧边栏配置中添加新项目链接

------

## 🎨 自定义

### 主题颜色

编辑：

```text
docs/.vitepress/theme/styles/custom.css
:root {
  --vp-c-brand: #3eaf7c;
  --vp-c-brand-light: #5bc98f;
  --vp-c-brand-dark: #2d8f63;
}
```

------

### 站点信息

```ts
export default defineConfig({
  title: '你的团队名称',
  description: '你的描述',
})
```

------

## 🖼️ 图片与资源规范

### 推荐存放路径

```text
docs/public/assets/projects/<project-name>/
```

------

### 引用方式（重要）

```markdown
![示例](/assets/projects/project-name/image.png)
```

> ✅ 使用 `/` 开头路径
> ✅ VitePress 会自动处理 `base`
> ❌ 不需要写 `/team_portfolio/...`

------

## 🖼️ 画廊示例

```markdown
## 画廊

<div class="gallery-grid">

<div class="gallery-item">
  <div class="gallery-image-wrapper">
    <img src="/assets/projects/project-name/image.png" class="gallery-image" />
  </div>
  <div class="gallery-info">
    <h4>标题</h4>
    <p>描述</p>
  </div>
</div>

</div>
```

------

## 🚀 部署

### 方案一：GitHub Pages（推荐）

#### 1. 安装工具

```bash
npm i -D gh-pages
```

------

#### 2. 构建 + 部署

```bash
npm run build
npx gh-pages -d docs/.vitepress/dist -b gh-pages -m "deploy: 本次部署说明"
```

> ⚠️ 注意：该命令会覆盖 `gh-pages` 分支内容

------

#### 3. 启用 Pages

- Settings → Pages
- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/`

------

### 方案二：Vercel

- Build Command: `npm run build`
- Output Directory: `docs/.vitepress/dist`

------

### 方案三：Netlify

- Build Command: `npm run build`
- Publish Directory: `docs/.vitepress/dist`

------

## 🧑‍💻 开发指南

### 项目页面建议结构

- 项目背景
- 系统架构
- 核心技术
- 项目成果
- 演示
- 画廊

------

### 代码示例

~~~markdown
```cpp
class MyClass {};
```

```python
def func():
    pass
```
~~~

------

## 🧰 技术栈

- VitePress 1.x
- Vue 3
- TypeScript 5
- CSS Variables

------

## 📄 许可证

MIT

------

## 🤝 贡献

1. Fork 仓库
2. 创建分支
3. 提交修改
4. 推送代码
5. 发起 PR
