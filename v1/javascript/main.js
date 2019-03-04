let logoText = document.getElementById("logoText");
let nav = document.getElementById("nav");
let logo = document.getElementById("logo");

let contact = document.getElementById("contact");
let about = document.getElementById("about");
let shop = document.getElementById("shop");
let arduino = document.getElementById("arduino");
let print = document.getElementById("print");

let menu0 = document.getElementById("menu0");
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let menu3 = document.getElementById("menu3");
let menu4 = document.getElementById("menu4");
let menubar = document.getElementById("menubar");

let slideshow = document.getElementById("slideshow");
let slideshowImg = document.getElementById("img1");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");

let slideSpan1 = document.getElementById("slideSpan1");
let slideSpan2 = document.getElementById("slideSpan2");
let slideSpan3 = document.getElementById("slideSpan3");
let slideSpan4 = document.getElementById("slideSpan4");
let slideSpan5 = document.getElementById("slideSpan5");
let slideSpan6 = document.getElementById("slideSpan6");

let slideText1 = document.getElementById("slideText1");
let slideText2 = document.getElementById("slideText2");
let slideText3 = document.getElementById("slideText3");
let slideText4 = document.getElementById("slideText4");
let slideText5 = document.getElementById("slideText5");
let slideText6 = document.getElementById("slideText6");

let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");


let numImg = 0;
let width;
let menuopen = false;


function onload() {
  slide(0);
  scrollTo(0,0);
}

function goLogin() {
  if (width >= 780) {
    location.replace("login.html");
  }else{
    if(menuopen == false){
      nav.style.height = "300px";
    }
    menuopen = !menuopen;
  }
}

let run = setInterval(loop, 1);

function loop() {
  width = window.innerWidth;
  setNavHeight();
  var offsetHeight = slideshowImg.offsetHeight;
  let slideshowHeight = offsetHeight + "px";
  slideshow.style.height = slideshowHeight;
}

function slideSide(side) {
  if (side == 0) {
    if (numImg != 0) {
      numImg--;
    }
  } else {
    if (numImg != 5) {
      numImg++;
    }
  }
  slide(numImg);
}

function slide(num) {
  scrollTo(0,0);
  if (num == 0) {
    img1.style.marginLeft = "0";
    img2.style.marginLeft = "100%";
    img3.style.marginLeft = "200%";
    img4.style.marginLeft = "300%";
    img5.style.marginLeft = "400%";
    img6.style.marginLeft = "500%";

    slideText1.style.marginLeft = "0";
    slideText2.style.marginLeft = "100%";
    slideText3.style.marginLeft = "200%";
    slideText4.style.marginLeft = "300%";
    slideText5.style.marginLeft = "400%";
    slideText6.style.marginLeft = "500%";

    slideSpan1.style.width = "27px";
    slideSpan2.style.width = "20px";
    slideSpan3.style.width = "20px";
    slideSpan4.style.width = "20px";
    slideSpan5.style.width = "20px";
    slideSpan6.style.width = "20px";

    logoText.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 -2px #fff";
    about.style.textShadow = "none";
    print.style.textShadow = "none";
    arduino.style.textShadow = "none";
    shop.style.textShadow = "none";
    contact.style.textShadow = "none";

    arrowLeft.style.pointerEvents = "none";
    arrowRight.style.pointerEvents = "auto";

    nav.style.backgroundColor = '#00CCB0';
  } else if (num == 1) {
    img1.style.marginLeft = "-100%";
    img2.style.marginLeft = "0";
    img3.style.marginLeft = "100%";
    img4.style.marginLeft = "200%";
    img5.style.marginLeft = "300%";
    img6.style.marginLeft = "400%";

    slideText1.style.marginLeft = "-100%";
    slideText2.style.marginLeft = "0";
    slideText3.style.marginLeft = "100%";
    slideText4.style.marginLeft = "200%";
    slideText5.style.marginLeft = "300%";
    slideText6.style.marginLeft = "400%";

    slideSpan2.style.width = "27px";
    slideSpan1.style.width = "20px";
    slideSpan3.style.width = "20px";
    slideSpan4.style.width = "20px";
    slideSpan5.style.width = "20px";
    slideSpan6.style.width = "20px";

    logoText.style.textShadow = "none";
    about.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 -2px #fff";
    print.style.textShadow = "none";
    arduino.style.textShadow = "none";
    shop.style.textShadow = "none";
    contact.style.textShadow = "none";

    arrowLeft.style.pointerEvents = "auto";
    arrowRight.style.pointerEvents = "auto";

    nav.style.backgroundColor = '#cc27c7';
  } else if (num == 2) {
    img1.style.marginLeft = "-200%";
    img2.style.marginLeft = "-100%";
    img3.style.marginLeft = "0";
    img4.style.marginLeft = "100%";
    img5.style.marginLeft = "200%";
    img6.style.marginLeft = "300%";

    slideText1.style.marginLeft = "-200%";
    slideText2.style.marginLeft = "-100%";
    slideText3.style.marginLeft = "0";
    slideText4.style.marginLeft = "100%";
    slideText5.style.marginLeft = "200%";
    slideText6.style.marginLeft = "300%";

    slideSpan3.style.width = "27px";
    slideSpan2.style.width = "20px";
    slideSpan1.style.width = "20px";
    slideSpan4.style.width = "20px";
    slideSpan5.style.width = "20px";
    slideSpan6.style.width = "20px";

    logoText.style.textShadow = "none";
    about.style.textShadow = "none";
    print.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 -2px #fff";
    arduino.style.textShadow = "none";
    shop.style.textShadow = "none";
    contact.style.textShadow = "none";

    arrowLeft.style.pointerEvents = "auto";
    arrowRight.style.pointerEvents = "auto";

    nav.style.backgroundColor = '#a70b25';
  } else if (num == 3) {
    img1.style.marginLeft = "-300%";
    img2.style.marginLeft = "-200%";
    img3.style.marginLeft = "-100%";
    img4.style.marginLeft = "0";
    img5.style.marginLeft = "100%";
    img6.style.marginLeft = "200%";

    slideText1.style.marginLeft = "-300%";
    slideText2.style.marginLeft = "-200%";
    slideText3.style.marginLeft = "-100%";
    slideText4.style.marginLeft = "0";
    slideText5.style.marginLeft = "100%";
    slideText6.style.marginLeft = "200%";

    slideSpan4.style.width = "27px";
    slideSpan2.style.width = "20px";
    slideSpan3.style.width = "20px";
    slideSpan1.style.width = "20px";
    slideSpan5.style.width = "20px";
    slideSpan6.style.width = "20px";

    logoText.style.textShadow = "none";
    about.style.textShadow = "none";
    print.style.textShadow = "none";
    arduino.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 -2px #fff";
    shop.style.textShadow = "none";
    contact.style.textShadow = "none";

    arrowLeft.style.pointerEvents = "auto";
    arrowRight.style.pointerEvents = "auto";

    nav.style.backgroundColor = '#19b91b';
  } else if (num == 4) {
    img1.style.marginLeft = "-400%";
    img2.style.marginLeft = "-300%";
    img3.style.marginLeft = "-200%";
    img4.style.marginLeft = "-100%";
    img5.style.marginLeft = "0";
    img6.style.marginLeft = "100%";

    slideText1.style.marginLeft = "-400%";
    slideText2.style.marginLeft = "-300%";
    slideText3.style.marginLeft = "-200%";
    slideText4.style.marginLeft = "-100%";
    slideText5.style.marginLeft = "0";
    slideText6.style.marginLeft = "100%";

    slideSpan5.style.width = "27px";
    slideSpan2.style.width = "20px";
    slideSpan3.style.width = "20px";
    slideSpan4.style.width = "20px";
    slideSpan1.style.width = "20px";
    slideSpan6.style.width = "20px";

    logoText.style.textShadow = "none";
    about.style.textShadow = "none";
    print.style.textShadow = "none";
    arduino.style.textShadow = "none";
    shop.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 -2px #fff";
    contact.style.textShadow = "none";

    arrowLeft.style.pointerEvents = "auto";
    arrowRight.style.pointerEvents = "auto";

    nav.style.backgroundColor = '#0fe862';
  } else if (num == 5) {
    img1.style.marginLeft = "-500%";
    img2.style.marginLeft = "-400%";
    img3.style.marginLeft = "-300%";
    img4.style.marginLeft = "-200%";
    img5.style.marginLeft = "-100%";
    img6.style.marginLeft = "0";

    slideText1.style.marginLeft = "-500%";
    slideText2.style.marginLeft = "-400%";
    slideText3.style.marginLeft = "-300%";
    slideText4.style.marginLeft = "-200%";
    slideText5.style.marginLeft = "-100%";
    slideText6.style.marginLeft = "0";

    slideSpan6.style.width = "27px";
    slideSpan2.style.width = "20px";
    slideSpan3.style.width = "20px";
    slideSpan4.style.width = "20px";
    slideSpan5.style.width = "20px";
    slideSpan1.style.width = "20px";

    logoText.style.textShadow = "none";
    about.style.textShadow = "none";
    print.style.textShadow = "none";
    arduino.style.textShadow = "none";
    shop.style.textShadow = "none";
    contact.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 -2px #fff";

    arrowLeft.style.pointerEvents = "auto";
    arrowRight.style.pointerEvents = "none";

    nav.style.backgroundColor = '#e89b17';
  }
  numImg = num;
}
