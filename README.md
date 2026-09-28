# 郑锐涵 · 个人作品集

一个原生 HTML/CSS/JavaScript 构建的个人作品集网站，用于展示三维场景、实时渲染与交互内容开发方向的项目作品。页面采用左侧介绍栏 + 右侧主内容的布局，兼容桌面端与移动端。

## 功能特性

- **项目作品展示**：以卡片形式纵向展示项目，包含类别标签、技术栈、完成时间与配图
- **深浅色主题切换**：侧边栏右上角按钮一键切换浅色/深色主题，通过 `localStorage` 记住用户上次选择，刷新后自动保持
- **导航高亮**：滚动页面时自动高亮当前所在区块（项目作品 / 关于我 / 联系方式）
- **响应式布局**：桌面端为左右分栏，移动端自动切换为上下单列布局
- **无第三方依赖**：不依赖任何前端框架或 UI 组件库

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 结构 | HTML5 |
| 样式 | 原生 CSS（CSS 变量 + 媒体查询） |
| 脚本 | 原生 JavaScript（无框架） |
| 数据 | 前端静态数据文件（`js/projects-data.js`） |

## 目录结构

```
├── index.html              # 页面结构
├── css/
│   └── style.css           # 全部样式（含深浅色主题变量）
├── js/
│   ├── projects-data.js    # 项目作品数据（新增项目只需在此追加）
│   ├── main.js             # 项目列表渲染 + 导航高亮
│   └── theme.js            # 深浅色主题切换与记忆
├── assets/images/          # 头像与项目配图
└── profile.md              # 个人信息与项目经历
```

## 运行方式

本项目为纯静态网站，无需构建。任选其一：

1. **直接打开**：双击 `index.html` 在浏览器中打开。
2. **本地服务器**（推荐，便于调试）：

```bash
# 在项目根目录下执行
python -m http.server 8080
# 或使用 Node.js
npx serve
```

然后访问 `http://localhost:8080`。

## 主要功能说明

### 项目作品展示

项目数据集中在 `js/projects-data.js` 的 `window.PROJECTS` 数组中。新增项目时，向数组末尾追加一个对象即可，无需修改其它文件：

```js
{
  title: "项目名称",
  description: "项目简介",
  stack: ["UE5", "Unity"],
  date: "2026 年 1 月",
  category: "三维应用",
  image: "assets/images/xxx.svg",
  imagePosition: "left",          // 配图位置：'left' | 'right'
  links: { demo: "", source: "" } // 可选
}
```

### 深浅色主题切换

- 浅色为主题默认样式；深色通过 `html[data-theme="dark"]` 覆盖 CSS 变量实现
- 选择结果保存在 `localStorage`（键名 `portfolio-theme`）
- 如需调整深色配色，修改 `css/style.css` 中的 `html[data-theme="dark"]` 变量块即可

## 浏览器支持

兼容现代浏览器（Chrome、Edge、Firefox、Safari），桌面端与移动端均可正常浏览。
