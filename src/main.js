//Vue
import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
const app = createApp(App)

//Firebase
import firebaseConfig from './firebase.js'
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js'
import {getFirestore} from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js'

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()

//Provide globals and mount
app.provide('firebase', db)
app.mount('#app')
