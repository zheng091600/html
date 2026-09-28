// 项目作品数据
// 新增项目时，只需向数组末尾追加一个对象即可，无需修改其它文件。
// 字段说明：
//   title       项目名称
//   description 项目简介
//   stack       技术栈（数组）
//   date        完成时间
//   category    类别
//   image       项目配图
//   links       项目链接（可选）{ demo， source }
//   imagePosition 配图位置：'left' | 'right'（相对于文字区）
window.PROJECTS = [
  {
    title: "虚拟校园场景漫游",
    description:
      "基于 UE5 制作的校园三维复刻项目，还原校园建筑与环境景观，支持第一人称自由漫游浏览，搭配光照渲染与环境氛围效果，实现沉浸式校园虚拟参观体验。",
    stack: ["UE5", "Blender"],
    date: "2025 年 11 月",
    category: "三维应用",
    image: "assets/images/project-campus.svg",
    imagePosition: "left",
  },
  {
    title: "2D互动解谜小游戏",
    description:
      "一款 2D 点击式互动解谜游戏。使用 Unity 引擎搭建场景，编写 C# 交互脚本，设计关卡谜题与角色动画，玩家通过点击场景内物品触发剧情，完成关卡解谜。",
    stack: ["Unity", "C#"],
    date: "2026 年 3 月",
    category: "游戏应用",
    image: "assets/images/project-game.svg",
    imagePosition: "right",
  },
];