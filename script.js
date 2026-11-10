function toggleTheme() {
  document.body.classList.toggle("dark");
}

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", function () {
  toggleTheem();
});

async function loadProjects() {
  const list = document.getElementById("project-list");
  try {
    const response = await fetch("projects.json");
    const projects = await response.json();
    for (const project of projects) {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = "<h3>" + project.title + "</h3><p>" + project.description + "</p>";
      list.appendChild(card);
    }
  } catch (error) {
    list.textContent = "تعذر تحميل الأعمال";
  }
}

loadProjects();
