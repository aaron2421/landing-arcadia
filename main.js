var phoneBtn = document.getElementById('phone-btn');
var ancho = window.innerWidth;

phoneBtn.onclick = () => {
    if (ancho <= 600) {
        alert("lanza app de telefono");
    } else {
        alert("whatsapp web");
    }
}