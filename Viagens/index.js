function showMobileMenu() {
  const icon = document.getElementById('icon-menu');
  const mobilemenu = document.getElementById('mobilemenu');
  icon.style.display = "none";
  mobilemenu.style.display = "block";
}

function hideMobileMenu() {
  const mobilemenu = document.getElementById('mobilemenu');
  const icon = document.getElementById('icon-menu');
  mobilemenu.style.display = "none";
  icon.style.display = "block";

}