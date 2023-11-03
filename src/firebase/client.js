import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzmEmH9Da7aSK0lH4kWZGUxj0VIUtwKig",
    authDomain: "hiit-training-79d80.firebaseapp.com",
    projectId: "hiit-training-79d80",
    storageBucket: "hiit-training-79d80.appspot.com",
    messagingSenderId: "447944958237",
    appId: "1:447944958237:web:a82a77e32fb01668dd41f4",
    measurementId: "G-24W16G5FSR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);