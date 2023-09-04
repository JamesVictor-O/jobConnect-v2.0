import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBtpsdFwFILgUxzVKq385dEL2GKXB9wcUI",
    authDomain: "jobconnect-c5307.firebaseapp.com",
    projectId: "jobconnect-c5307",
    storageBucket: "jobconnect-c5307.appspot.com",
    messagingSenderId: "927382324971",
    appId: "1:927382324971:web:be84aa00cee519234b20ae"
  };

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app) 