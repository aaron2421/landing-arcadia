window.onload = () => {
  var phoneBtn = document.getElementById("phone-btn");
  var contactBtns = document.getElementsByClassName("contact-btn");
  var ancho = window.innerWidth;

  phoneBtn.onclick = () => {
    if (ancho <= 600) {
      location.href = "tel:+523343579334";
    } else {
      location.href = "https://api.whatsapp.com/send?phone=+523343579334";
    }
  };

  for(var i = 0; i<contactBtns.length; i++) {
    contactBtns[i].onclick = () => {
      location.href = "https://calendly.com/arcadia-almacenadoras/30min";
    }
  }
}