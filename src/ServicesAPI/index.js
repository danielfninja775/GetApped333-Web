import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAEqvYPegptKLE4jGWUOWV76H52pUHTcsE",
  authDomain: "getapped333-database.firebaseapp.com",
  projectId: "getapped333-database",
  storageBucket: "getapped333-database.appspot.com",
  messagingSenderId: "132983203352",
  appId: "1:132983203352:web:6c38a3c3986e8f40dc856d",
  measurementId: "G-J4J3JMFN7B"
};

 const firebaseApp = initializeApp(firebaseConfig);

 const db = getFirestore(firebaseApp);

 export { db };