function setNavHeight() {
  if (window.pageYOffset < 1) {
    if (menuopen == false) {
      if (width > 650) {
        nav.style.height = "70px";
        nav.style.transform = "translateY(-10px)";
        logo.style.transform = "scale(1)";
      } else {
        nav.style.height = "65px";
        nav.style.transform = "translateY(-18px)";
        logo.style.transform = "scale(0.8)";
      }
    }
    if (width > 850) {
      nav.style.height = "80px";
      nav.style.transform = "translateY(0px)";
    } else if (width > 780) {
      nav.style.height = "75px";
      nav.style.transform = "translateY(-5px)";
      menuopen = false;
    }
  }else{
    if (menuopen == false) {
      nav.style.height = "60px";
      nav.style.transform = "translateY(-20px)";
      logo.style.transform = "scale(0.8)";
    }
  }
}
