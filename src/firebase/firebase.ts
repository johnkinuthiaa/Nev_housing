
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyCbksvPYKFWPH1JP29NHHWbMJhNgAEEMr0",
    authDomain: "nevani.firebaseapp.com",
    projectId: "nevani",
    storageBucket: "nevani.firebasestorage.app",
    messagingSenderId: "92360793696",
    appId: "1:92360793696:web:9c23b1b8c6f79fdcc66d05"
};


const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
export const provider =new GoogleAuthProvider()