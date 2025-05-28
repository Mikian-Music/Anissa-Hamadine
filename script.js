const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
  document.querySelectorAll(".fr").forEach(el => el.style.display = el.style.display === "none" ? "" : "none");
  document.querySelectorAll(".en").forEach(el => el.style.display = el.style.display === "none" ? "" : "none");
});

function checkSecret() {
  const pass = document.getElementById("secret-pass").value;
  if (pass === "licorne") {
    window.location.href = "secret.html";
  } else {
    alert(" Ton mot de passe est incorrect et remplie de paillette !");
  }
}
