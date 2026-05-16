const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const copyEmail = document.querySelector("#copyEmail");
const year = document.querySelector("#year");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

copyEmail?.addEventListener("click", async () => {
  const email = copyEmail.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    copyEmail.textContent = "Copied";
    window.setTimeout(() => {
      copyEmail.textContent = "Copy email";
    }, 1500);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

if (year) {
  year.textContent = new Date().getFullYear();
}
