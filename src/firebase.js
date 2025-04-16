import {initializeApp} from "firebase/app"
import {getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCpoNt2DYRAGITySodS08HslIcIPJvpZ2A",
  authDomain: "gestion-projets-f1190.firebaseapp.com",
  projectId: "gestion-projets-f1190",
  storageBucket: "gestion-projets-f1190.firebasestorage.app",
  messagingSenderId: "22936866277",
  appId: "1:22936866277:web:c20a6c265c02ce0621730c"
};
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
