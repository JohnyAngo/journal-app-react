// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();


// console.log(process.env);
// console.log( import.meta.env );


// Dev/Prod
/*const firebaseConfig = {
  apiKey: "AIzaSyAuZl_8gYQva8aYuyUWWWugbO-giWsIHAo",
  authDomain: "react-cursos-4287b.firebaseapp.com",
  projectId: "react-cursos-4287b",
  storageBucket: "react-cursos-4287b.appspot.com",
  messagingSenderId: "108714102670",
  appId: "1:108714102670:web:0dc8904c21dcc94c2f1edf"
};*/

// Testing
/*const firebaseConfig = {
  apiKey: "AIzaSyBGeFR9ZsfyzuhCjpR6n71T4vcCIJgyOJM",
  authDomain: "test-projects-292c2.firebaseapp.com",
  projectId: "test-projects-292c2",
  storageBucket: "test-projects-292c2.appspot.com",
  messagingSenderId: "285239464062",
  appId: "1:285239464062:web:32abdde61322fd328b882f"
};*/

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );