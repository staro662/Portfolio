// language-switcher.js - 简化版语言切换
(() => {
  const STORAGE_KEY = 'portfolio.lang';

  const messages = {
    zh: {
      "nav.about": "关于我",
      "nav.design": "设计项目",
      "nav.research": "研究项目",
      "nav.contact": "联系我",
      "nav.resume": "下载简历",
      "hero.subtitle": "我是一名UX设计师，专注于心理学与交互设计"
    },
    en: {
      "nav.about": "About",
      "nav.design": "Design Projects",
      "nav.research": "Research Projects",
      "nav.contact": "Contact",
      "nav.resume": "Download Resume",
      "hero.subtitle": "I am a UX designer focusing on Psychology & Interaction Design"
    }
  };

  function applyLang(lang) {
    const dict = messages[lang];
    if (!dict) return;
    document.documentElement.lang = lang;

    // 替换所有带 data-i18n 的元素
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // 按钮状态
    document.querySelectorAll(".language-switcher .lang-button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    // 初始化
    const saved = localStorage.getItem(STORAGE_KEY) || "zh";
    applyLang(saved);

    // 绑定按钮
    document.querySelectorAll(".language-switcher .lang-button").forEach(btn => {
      btn.addEventListener("click", () => {
        applyLang(btn.dataset.lang);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
