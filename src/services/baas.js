import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCU357k6DXDuXa2GtFJG2s-NE6e2c-0b7A",
    authDomain: "lardosom-4ccba.firebaseapp.com",
    projectId: "lardosom-4ccba",
    storageBucket: "lardosom-4ccba.firebasestorage.app",
    messagingSenderId: "271603345713",
    appId: "1:271603345713:web:cceeb2d0ec1b33edc8a810",
    measurementId: "G-JPPKF5P061"
  };

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Inicializar o Storage
const storage = getStorage(app);

// Inicializar o Authentication
const auth = getAuth(app);

export { storage, auth, db };