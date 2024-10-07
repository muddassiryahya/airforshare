import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, onValue, remove } from "firebase/database";

import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCtXobs-xJkngj14OKyYOlEDdRHs_r6es",
  authDomain: "learning-firebase-a34a3.firebaseapp.com",
  projectId: "learning-firebase-a34a3",
  storageBucket: "learning-firebase-a34a3.appspot.com",
  messagingSenderId: "83218826012",
  appId: "1:83218826012:web:a266d5414cf300736670d9",
  databaseURL: "https://learning-firebase-a34a3-default-rtdb.asia-southeast1.firebasedatabase.app"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase();

const storage = getStorage();

export {
    app,
    db,
    ref,
    set,
    onValue,
    remove,
    storage,
    storageRef,
    uploadBytesResumable, 
    getDownloadURL
}