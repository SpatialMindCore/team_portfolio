# 部署到 Gitee Pages

站点地址：**`https://ylin97.gitee.io/siteam/`**（用户名以你 Gitee 账号为准）

本仓库已配置 `base: '/siteam/'`，与仓库名 `siteam` 一致。

## 1. 本地构建

在项目根目录执行：

```bash
npm install
npm run build
```

构建结果目录：**`docs/.vitepress/dist/`**

## 2. 推送到 Gitee 仓库

若尚未关联远程：

```bash
git remote add origin https://gitee.com/ylin97/siteam.git
git branch -M master
git push -u origin master
```

（若默认分支是 `main`，请将下文 `master` 换成 `main`，并同步修改 `docs/.vitepress/config.ts` 里 `editLink` 的链接分支名。）

## 3. 启用 Gitee Pages

1. 打开仓库：<https://gitee.com/ylin97/siteam>
2. **服务** → **Gitee Pages**（需完成实名认证）
3. 部署方式任选其一：

### 方式 A：单独分支只放静态文件（推荐）

1. 本地执行 `npm run build`
2. 将 `docs/.vitepress/dist/` **目录内的所有文件**（不是 dist 文件夹本身）推送到一个分支的根目录，例如分支名 `gitee-pages`：

   ```bash
   cd docs/.vitepress/dist
   git init
   git checkout -b gitee-pages
   git add .
   git commit -m "deploy: gitee pages"
   git remote add origin https://gitee.com/ylin97/siteam.git
   git push -u origin gitee-pages --force
   cd ../../..
   ```

   若该分支已存在，可在原仓库里 `git checkout gitee-pages` 后把 `dist` 内容覆盖提交再推送。

3. 在 Gitee Pages 设置中选择：**分支 `gitee-pages`，目录 `/`**。

### 方式 B：使用 Gitee Go / 流水线

在流水线中执行 `npm ci`、`npm run build`，将 `docs/.vitepress/dist` 的产物发布到 Pages 指定分支或目录（以 Gitee 当前文档为准）。

## 4. 更新网站

每次改完文档后：

```bash
npm run build
```

再按方式 A 更新 `gitee-pages` 分支中的文件并推送。Pages 更新可能有数分钟延迟。

## 5. 常见问题

| 现象 | 处理 |
|------|------|
| 白屏、静态资源 404 | 确认仓库名仍为 `siteam`，且 `docs/.vitepress/config.ts` 中 `base` 为 `'/siteam/'` |
| 子页面 404 | 已设置 `cleanUrls: false`，链接会带 `.html`，适合纯静态托管 |
| 编辑链接打不开 | 将 `editLink` 里的分支名改成与你仓库默认分支一致（`master` 或 `main`） |
