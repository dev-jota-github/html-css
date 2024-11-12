function menushow() {
  let menumobile = document.querySelector(".menu-mobile-list");
  if (menumobile.classList.contains('open')){
    menumobile.classList.remove('open');
    document.querySelector('.icon').src="https://img.icons8.com/ios-filled/50/menu--v1.png"
  } else {
    menumobile.classList.add('open');
    document.querySelector('.icon').src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
  }
}


b = 0;
      function slideshow() {
        const foto = document.getElementById("foto");
        switch (b) {
          case 0:
            foto.src = "imagens/banner1.jpg";
            break;
          case 1:
            foto.src = "imagens/banner2.jpg";
            break;
          case 2:
            foto.src = "imagens/banner3.jpg";
            b = -1;
        }
        b++;
      }
      setInterval(slideshow, 3000);