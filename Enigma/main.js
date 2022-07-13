// parte do menu
  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      console.log("Fechar")
    } else
    menuMobile.classList.add('open');
      console.log("Abrir")
  }
//fim menu
