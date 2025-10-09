// ✅ script.js (fixed)

document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark Mode Toggle
  const toggleBtn = document.getElementById("themeToggle");
  const searchInput = document.getElementById("searchInput");
  const gameLinks = document.querySelectorAll(".game-link");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  });

  // 🔍 Search Filter
  searchInput.addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase();
    gameLinks.forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(search)
        ? ""
        : "none";
    });
  });
});
