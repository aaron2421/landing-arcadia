var phoneBtn = document.getElementById("phone-btn");
var contactBtn = document.getElementsByClassName("contact-btn")[0];
var contactBtn2 = document.getElementsByClassName("contact-btn")[1];

var ancho = window.innerWidth;

phoneBtn.onclick = () => {
  if (ancho <= 600) {
    location.href = "tel:+523343579334";
  } else {
    location.href = "https://api.whatsapp.com/send?phone=+523343579334";
  }
};

contactBtn.onclick = () => {
  location.href = "https://calendly.com/arcadia-almacenadoras/30min";
}

contactBtn2.onclick = () => {
  location.href = "https://calendly.com/arcadia-almacenadoras/30min";
}