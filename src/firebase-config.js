import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCRR0Rn5udu1aoGRkKekbogCJRmd9dR1_E",
    authDomain: "swd-apartment-development.firebaseapp.com",
    projectId: "swd-apartment-development",
    storageBucket: "swd-apartment-development.appspot.com",
    messagingSenderId: "904764682729",
    appId: "1:904764682729:web:4fade5fa4d6aeeb7795b78"
}

const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)