window.onload = () => {
  var phoneBtn = document.getElementById("phone-btn");
  var contactBtns = document.getElementsByClassName("contact-btn");
  var ancho = window.innerWidth;

  // phoneBtn.onclick = () => {
  //   if (ancho <= 600) {
  //     location.href = "tel:+523343530703";
  //   } else {
  //     var numeroTelefono = "+523343530703"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
  //     var mensaje = "¡Hola!"; // Reemplaza con el mensaje que deseas enviar

  //     var url =
  //       "https://wa.me/" +
  //       numeroTelefono +
  //       "?text=" +
  //       encodeURIComponent(mensaje);
  //     window.open(url);
  //   }
  // };

  for (var i = 0; i < contactBtns.length; i++) {
    contactBtns[i].onclick = () => {
      location.href = "https://calendly.com/arcadia-almacenadoras/30min";
    };
  }
};
