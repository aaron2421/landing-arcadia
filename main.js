var phoneBtn = document.getElementById("phone-btn");
var ancho = window.innerWidth;
var open = false;

phoneBtn.onclick = () => {
  if (ancho <= 600) {
    location.href = "tel:+523320350386";
  } else {
    location.href = "https://api.whatsapp.com/send?phone=+523320350386";
    // window.open("https://api.whatsapp.com/send?phone=+523320350386");
  }
};

// modal
var modal = document.getElementById("modalForm");

var btn = document.getElementsByClassName("contact-btn")[0];
var btn2 = document.getElementsByClassName("contact-btn")[1];

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// var winfo = document.getElementById("winfo");
// winfo.innerText = window.innerWidth;