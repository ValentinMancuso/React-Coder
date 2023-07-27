import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf7HzbcSdcKroO76EKStkSawCYfNy01qU",
  authDomain: "ecomerce-valentinm.firebaseapp.com",
  projectId: "ecomerce-valentinm",
  storageBucket: "ecomerce-valentinm.appspot.com",
  messagingSenderId: "308184690002",
  appId: "1:308184690002:web:151cb5baa17caa041f9e8b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
