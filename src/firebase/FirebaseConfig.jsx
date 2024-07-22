import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getDownloadURL function // Import getDownloadURL function
const API_KEY= import.meta.env.VITE_Firebase_API_KEY;


const firebaseConfig = {
  apiKey:  API_KEY,
  authDomain: "home-renting-website.firebaseapp.com",
  projectId: "home-renting-website",
  storageBucket: "home-renting-website.appspot.com",
  messagingSenderId: "528225971415",
  appId: "1:528225971415:web:c07bcdef15fd16c0a1d492",
  measurementId: "G-DEPSYF19R7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDb = getFirestore(app);
const storage = getStorage();

export { app, auth, fireDb, storage };

