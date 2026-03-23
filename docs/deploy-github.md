# 部署到 GitHub Pages

本项目已在 `docs/.vitepress/config.ts` 设置：
- `base: '/team_portfolio/'`
- `cleanUrls: true`（GitHub Pages 支持目录型访问，不需要 `.html` 后缀）

站点地址（通常）：**`https://spatialmindcore.github.io/team_portfolio/`**

## 1. 本地构建

```bash
npm install
npm run build
```

构建结果目录：**`docs/.vitepress/dist/`**

## 2. 部署（推荐：只用 GitHub Pages 分支）

### 方式 A：手动把 `dist` 推到 `gh-pages` 分支

```bash
cd docs/.vitepress/dist
git init
git checkout -b gh-pages
git add .
git commit -m "deploy: github pages"
git remote add origin git@github.com:Ylin97/team_portfolio.git
git push -u origin gh-pages --force
cd ../../..
```

如果 `gh-pages` 分支已存在，可以先在根仓库里切过去再覆盖提交；核心要求是：**`dist` 目录内的文件**要直接位于该分支的根目录。

### 方式 B：使用 `gh-pages` 工具（不想手动 git 时）

安装：
```bash
npm i -D gh-pages
```

部署：
```bash
npx gh-pages -d docs/.vitepress/dist -b gh-pages -m "deploy: switch homepage gallery to public"
```

**参数说明：**

| 参数                                             | 含义         | 说明                                                         |
| ------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| `npx gh-pages`                                   | 执行部署工具 | 使用 npx 临时运行 gh-pages 工具（无需全局安装），用于发布静态文件到 GitHub Pages |
| `-d docs/.vitepress/dist`                        | 指定发布目录 | 要部署的静态文件目录，一般为 VitePress 构建输出目录          |
| `-b gh-pages`                                    | 指定目标分支 | 将内容推送到 `gh-pages` 分支，GitHub Pages 默认从该分支提供网站服务 |
| `-m "deploy: switch homepage gallery to public"` | 提交信息     | 本次部署的 Git commit message，仅用于说明本次更新内容        |

## 3. GitHub 上开启 Pages

GitHub 仓库 → **Settings** → **Pages**：
- Source 选择：`Deploy from a branch`
- Branch 选择：`gh-pages`
- Folder 选择：`/`

## 4. 更新网站

每次改完文档后重复：
1. `npm run build`
2. 用上面的方式 A/B 推送新的 `dist`。

## 5. 常见问题

| 现象 | 处理 |
|------|------|
| 样式/图片加载 404 | 检查 `docs/.vitepress/config.ts` 的 `base` 是否为 `'/team_portfolio/'` |
| 子页面 404 | 保证 `cleanUrls: true`，并且首页脚本中站内链接不带 `.html` 后缀 |
