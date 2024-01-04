// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHTiMunNplWkac7yU8ln-GHFCvup2MO9w",
  authDomain: "note-project-2254b.firebaseapp.com",
  databaseURL: "https://note-project-2254b-default-rtdb.firebaseio.com/",
  projectId: "note-project-2254b",
  storageBucket: "note-project-2254b.appspot.com",
  messagingSenderId: "768239753644",
  appId: "1:768239753644:web:52594e75419e409c340209",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
