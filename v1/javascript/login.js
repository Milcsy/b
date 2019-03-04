let input0 = document.getElementById("input0");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let inputName = document.getElementById("inputULName");
let inputEmail = document.getElementById("inputULEmail");
let inputPass = document.getElementById("inputULPass");
let inputPass2 = document.getElementById("inputULPass2");

let errorName = document.getElementById("nameError");
let errorEmail = document.getElementById("emailError");
let errorPass = document.getElementById("passError");
let errorPass2 = document.getElementById("pass1Error");

let run = setInterval(loop,1);

function backToMenu() {
  location.replace("index.html");
}

function loop() {
  passwordTest();
  emailTest();
}

function underline(a){
  if (a == 0) {
    inputName.style.width = "73.3%";
  } if (a == 1) {
    inputEmail.style.width = "73.3%";
  } if (a == 2) {
    inputPass.style.width = "73.3%";
  } if (a == 3) {
    inputPass2.style.width = "73.3%";
  }
  if (a == 4) {
    inputName.style.width = "0";
  } if (a == 5) {
    inputEmail.style.width = "0";
  } if (a == 6) {
    inputPass.style.width = "0";
  } if (a == 7) {
    inputPass2.style.width = "0";
  }
}
function passwordTest() {
  if (input2.value !== "" && input2.value.length < 6) {
    errorPass.style.display = "block";
    inputPass.style.backgroundColor = "#cc0000";
    underline(2);
  }
  else{
    errorPass.style.display = "none";
    underline(6);
  }

  if (input3.value !== "" && input3.value !== input2.value) {
    errorPass2.style.display = "block";
    inputPass2.style.backgroundColor = "#cc0000";
    underline(3);
  }
  else{
    errorPass2.style.display = "none";
    underline(7);
  }
}

function emailTest() {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input1.value).toLowerCase())) {
    errorEmail.style.display = "none";
    underline(5);
  }
  else if (input1.value != ""){
    errorEmail.style.display = "block";
    inputEmail.style.backgroundColor = "#cc0000";
    underline(1);
  }else {
    errorEmail.style.display = "none";
    underline(5);
  }
}
