const languageToggle = document.querySelector(".language-toggle");
const preferredLanguage = localStorage.getItem("site-language") || "zh";

function setLanguage(language) {
  const isEnglish = language === "en";
  document.body.classList.toggle("lang-en", isEnglish);
  document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  languageToggle.textContent = isEnglish ? "中文" : "EN";
  languageToggle.setAttribute("aria-label", isEnglish ? "切换至中文" : "Switch to English");
  localStorage.setItem("site-language", language);
}

setLanguage(preferredLanguage);

languageToggle.addEventListener("click", () => {
  setLanguage(document.body.classList.contains("lang-en") ? "zh" : "en");
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
