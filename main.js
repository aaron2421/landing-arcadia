var phoneBtn = document.getElementById("phone-btn");
var ancho = window.innerWidth;
var open = false;

var winfo = document.getElementById("winfo");

winfo.innerText = window.innerWidth;

phoneBtn.onclick = () => {
  if (ancho <= 600) {
    location.href = "tel:+523320350386";
  } else {
    location.href = "https://api.whatsapp.com/send?phone=+523320350386";
    // window.open("https://api.whatsapp.com/send?phone=+523320350386");
  }
};

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

var moreServiceInfo = document.getElementsByClassName("moreInfo")[0];
var serviceInfoContainer = document.getElementsByClassName("service-info")[0];
moreServiceInfo.onclick = () => {
  if (open == false) {
    open = true;
    serviceInfoContainer.style.display = "flex";
    serviceInfoContainer.style.flexDirection = "column";
    serviceInfoContainer.style.alignItems = "stretch";
    serviceInfoContainer.style.height = "auto";
    info1.style.display = "block";
  } else {
    open = false;
    serviceInfoContainer.style.display = "flex";
    serviceInfoContainer.style.flexDirection = "row";
    serviceInfoContainer.style.alignItems = "center";
    serviceInfoContainer.style.height = "unset";
    info1.style.display = "none";
  }
};

var moreServiceInfo1 = document.getElementsByClassName("moreInfo")[1];
var serviceInfoContainer1 = document.getElementsByClassName("service-info")[1];
moreServiceInfo1.onclick = () => {
  if (open == false) {
    open = true;
    serviceInfoContainer1.style.display = "flex";
    serviceInfoContainer1.style.flexDirection = "column";
    serviceInfoContainer1.style.alignItems = "stretch";
    serviceInfoContainer1.style.height = "auto";
    info2.style.display = "block";
  } else {
    open = false;
    serviceInfoContainer1.style.display = "flex";
    serviceInfoContainer1.style.flexDirection = "row";
    serviceInfoContainer1.style.alignItems = "center";
    serviceInfoContainer1.style.height = "unset";
    info2.style.display = "none";
  }
};

var moreServiceInfo2 = document.getElementsByClassName("moreInfo")[2];
var serviceInfoContainer2 = document.getElementsByClassName("service-info")[2];
moreServiceInfo2.onclick = () => {
  if (open == false) {
    open = true;
    serviceInfoContainer2.style.display = "flex";
    serviceInfoContainer2.style.flexDirection = "column";
    serviceInfoContainer2.style.alignItems = "stretch";
    serviceInfoContainer2.style.height = "auto";
    info3.style.display = "block";
  } else {
    open = false;
    serviceInfoContainer2.style.display = "flex";
    serviceInfoContainer2.style.flexDirection = "row";
    serviceInfoContainer2.style.alignItems = "center";
    serviceInfoContainer2.style.height = "unset";
    info3.style.display = "none";
  }
}

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