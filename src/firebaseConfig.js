// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ← Esto faltaba

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBv455yyYC_nOHFxpETu1k88ICDnJXvRIw",
  authDomain: "practica6iniciosesionfirebase.firebaseapp.com",
  projectId: "practica6iniciosesionfirebase",
  storageBucket: "practica6iniciosesionfirebase.firebasestorage.app",
  messagingSenderId: "583692919060",
  appId: "1:583692919060:web:32e2645632bf7d70bfe201",
  measurementId: "G-ZNCDCF4GG5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Agrega esta línea para inicializar Firestore
const db = getFirestore(app);

// ✅ Exporta la instancia de Firestore
export { db };
