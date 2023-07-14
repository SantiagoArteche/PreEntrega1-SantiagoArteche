import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0S0Vs3GG1wpTpO2jae0ENLj4ct2aMegk",
  authDomain: "coderhousereactarteche.firebaseapp.com",
  projectId: "coderhousereactarteche",
  storageBucket: "coderhousereactarteche.appspot.com",
  messagingSenderId: "955085587201",
  appId: "1:955085587201:web:c334a987c3f3c0c075d100"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)