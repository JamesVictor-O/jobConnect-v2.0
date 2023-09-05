import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDocs, getDoc, setDoc, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBtpsdFwFILgUxzVKq385dEL2GKXB9wcUI",
    authDomain: "jobconnect-c5307.firebaseapp.com",
    projectId: "jobconnect-c5307",
    storageBucket: "jobconnect-c5307.appspot.com",
    messagingSenderId: "927382324971",
    appId: "1:927382324971:web:be84aa00cee519234b20ae"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const firestore=getFirestore(app)

export const createUserDataBase = async (userAuth, additionalDatas) => {
  if(!userAuth) return
  const userRef = doc(firestore, "users", userAuth.uid)
  
  const snapShot = await getDoc(userRef)
  const { displayName, email } = userAuth
  const createdAt=new Date()
  if (!snapShot.exists()) {
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalDatas
        })
    } catch (error) {
      console.log(error)
      }
  }
 
  return userRef
}


