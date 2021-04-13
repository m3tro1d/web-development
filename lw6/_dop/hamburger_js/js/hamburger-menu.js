function toggleHamburgerMenu() {
  let menu = document.getElementById("hamburger-menu");
  if (menu.style.display === "flex")
    menu.style.display = "none";
  else
    menu.style.display = "flex";
}
