import { createApp } from "vue";
import App from "./App.vue";
import firebaseConfig from "./firebase.js";

import "./assets/main.css";

createApp(App).mount("#app");

import { initializeApp } from "Firebase/app";
import { getFirestore, collection, getDocs } from "Firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "tasks");
getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
    let tasks = [];
    snapshot.docs.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id });
    });
    console.log(tasks);
  })
  .catch((err) => {
    console.log(err);
  });
