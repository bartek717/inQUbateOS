// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09wzGEQfR8pZjsimlukCPs16EQ-8FfZo",
  authDomain: "inqubateos.firebaseapp.com",
  projectId: "inqubateos",
  storageBucket: "inqubateos.appspot.com",
  messagingSenderId: "119849759548",
  appId: "1:119849759548:web:6ebad1c15781419462e439",
  measurementId: "G-DKWK4EBQ7K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
