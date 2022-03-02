// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYcCICFtyCLLJUGI_0smMtasWjhmOSXV0",
  authDomain: "labauth-67be4.firebaseapp.com",
  projectId: "labauth-67be4",
  storageBucket: "labauth-67be4.appspot.com",
  messagingSenderId: "622703068458",
  appId: "1:622703068458:web:43f554c12766c30fb88a53",
};

let app;
if (firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app();
}
const auth = firebase.default.auth();

export { auth };
