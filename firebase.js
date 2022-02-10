// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzDiYpDP3TVxT4s2fq8MlvOP1FnuI2oJo",
  authDomain: "arcadia-landing.firebaseapp.com",
  projectId: "arcadia-landing",
  storageBucket: "arcadia-landing.appspot.com",
  messagingSenderId: "651660980426",
  appId: "1:651660980426:web:e1f7da96ce93a5e6620433",
  measurementId: "G-GX1WC4VES6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore();

//------------------------------------------------
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const empresa = document.getElementById("empresa");
const arcForm = document.getElementById("arc-form");

arcForm.addEventListener("submit", addUser);

// post user
function addUser(event) {
  event.preventDefault();

  const userDocument = doc(firestore, `usuarios/${nombre.value + " - " + empresa.value}`);
  const docData = {
    nombre: `${nombre.value}`,
    correo: `${correo.value}`,
    telefono: `${telefono.value}`,
    empresa: `${empresa.value}`,
  };

  setDoc(userDocument, docData);
  console.log(docData);
  console.log(nombre.value, correo.value, telefono.value, empresa.value);

  nombre.value = "";
  correo.value = "";
  telefono.value = "";
  empresa.value = "";

  window.scrollTo(0, 0);

  alert("información enviada.");
}

// get user
async function getUser() {
  const user = await getDoc(userDocument);
  if (user.exists()) {
    const docData = user.data();
    console.log(docData);
  }
}

// get all users
async function getUsers() {
  const uQuery = query(collection(firestore, "usuarios"));

  const querySnap = await getDocs(uQuery);
  const allDocs = querySnap.forEach((snap) => {
    console.log(
      snap.data().nombre,
      snap.data().correo,
      snap.data().telefono,
      snap.data().empresa
    );
  });
}

//-------------------------------------------------

// addUser();
// getUser();
// getUsers();
