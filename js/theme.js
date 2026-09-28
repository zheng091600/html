// 深浅色主题切换：读取 localStorage 记住选择，点击按钮切换
(function () {
  "use strict";

  var THEME_KEY = "portfolio-theme";
  var html = document.documentElement;

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
  }

  // 页面加载时立即应用上次选择（默认浅色），避免深色用户看到白屏闪烁
  var saved = "light";
  try {
    saved = localStorage.getItem(THEME_KEY) || "light";
  } catch (e) {
    // localStorage 不可用时忽略，保持默认浅色
  }
  applyTheme(saved === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        // 忽略存储失败
      }
    });
  });
})();
