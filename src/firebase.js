import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyD8S9gjFIW8tf6RmVHqiW0T8LAF4w8ivZQ",

    authDomain: "tech-4565e.firebaseapp.com",

    projectId: "tech-4565e",

    storageBucket: "tech-4565e.appspot.com",

    messagingSenderId: "74747794867",

    appId: "1:74747794867:web:adbe21218b6c7c4be5a7c6"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
