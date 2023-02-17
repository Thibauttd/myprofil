// On récupère les éléments HTML dont nous avons besoin
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// On initialise le menu à l'état fermé
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // Si le menu est fermé, on l'affiche
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // On passe l'état du menu à ouvert
    showMenu = true;
  } else {
    // Si le menu est ouvert, on le cache
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // On passe l'état du menu à fermé
    showMenu = false;
  }
}

// On ajoute un écouteur d'événement au formulaire de connexion
const form = document.querySelector("#login form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const password = e.target.querySelector('input[type="password"]').value;

  // Vérification du mot de passe
  if (password === "Licence2023") {
    // Si le mot de passe est correct, on redirige vers la page d'accueil
    window.location.href = "index.html";
  } else {
    // Si le mot de passe est incorrect, on affiche un message d'erreur
    const errorMsg = document.querySelector("#login .error");
    errorMsg.style.display = "block";
  }
});
