// Dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Clickable email function
function openEmail(sender, subject) {
  alert(`📬 Email from: ${sender}\nSubject: ${subject}`);
}
