function showMobileMenu() {
  const icon = document.getElementById('icon-menu');
  const mobilemenu = document.getElementById('mobilemenu');
  const closemenu = document.getElementById('closemenu');
  closemenu.style.display = "block";
  icon.style = "display: none !important";
  mobilemenu.style.display = "block";
}

function hideMobileMenu() {
  const mobilemenu = document.getElementById('mobilemenu');
  const icon = document.getElementById('icon-menu');
  mobilemenu.style.display = "none";
  icon.style = "display: block !important";

}
