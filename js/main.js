document.getElementById('menu-icon').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links')
  const menuIcon = document.getElementById('menu-icon')

  navLinks.classList.toggle('active')

  menuIcon.classList.toggle('fa-bars')
  menuIcon.classList.toggle('fa-times')
})