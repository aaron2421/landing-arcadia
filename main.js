var phoneBtn = document.getElementById("phone-btn");
var ancho = window.innerWidth;

phoneBtn.onclick = () => {
  if (ancho <= 600) {
    alert("lanza app de telefono");
  } else {
    alert("whatsapp web");
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