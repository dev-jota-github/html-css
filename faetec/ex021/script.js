function menushow() {
  let menumobile = document.querySelector(".")
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