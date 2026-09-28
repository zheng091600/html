// 渲染项目列表 + 导航高亮
(function () {
  "use strict";

  var list = document.getElementById("project-list");
  if (!list) return;

  var data = window.PROJECTS || [];

  data.forEach(function (project) {
    var item = document.createElement("article");
    item.className = "project" + (project.imagePosition === "right" ? " media-right" : "");

    // 配图
    var media = document.createElement("div");
    media.className = "project-media";
    media.innerHTML = '<img src="' + project.image + '" alt="' + project.title + '" loading="lazy" />';

    // 文字信息
    var info = document.createElement("div");
    info.className = "project-info";

    var category = document.createElement("span");
    category.className = "category";
    category.textContent = project.category;

    var title = document.createElement("h3");
    title.textContent = project.title;

    var desc = document.createElement("p");
    desc.textContent = project.description;

    var stack = document.createElement("div");
    stack.className = "stack";
    (project.stack || []).forEach(function (tech) {
      var t = document.createElement("span");
      t.textContent = tech;
      stack.appendChild(t);
    });

    var meta = document.createElement("div");
    meta.className = "project-meta";
    meta.innerHTML =
      '<span class="category-text">' + project.category + "</span>" +
      '<span class="date">' + project.date + "</span>";

    info.appendChild(category);
    info.appendChild(title);
    info.appendChild(desc);
    info.appendChild(stack);
    info.appendChild(meta);

    // 链接
    if (project.links) {
      var links = document.createElement("div");
      links.className = "project-links";
      if (project.links.demo) {
        var demo = document.createElement("a");
        demo.href = project.links.demo;
        demo.textContent = "查看演示";
        links.appendChild(demo);
      }
      if (project.links.source) {
        var source = document.createElement("a");
        source.href = project.links.source;
        source.textContent = "查看源码";
        links.appendChild(source);
      }
      info.appendChild(links);
    }

    item.appendChild(media);
    item.appendChild(info);
    list.appendChild(item);
  });

  // 导航高亮：滚动时标记当前区块
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("main section[id]");

  function highlight() {
    var scrollPos = window.scrollY;
    var current = sections[0].id;
    sections.forEach(function (s) {
      if (scrollPos >= s.offsetTop - 120) {
        current = s.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current
      );
    });
  }

  window.addEventListener("scroll", highlight, { passive: true });
  highlight();
})();