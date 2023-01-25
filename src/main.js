//Vue
import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
const app = createApp(App)

//Firebase
import firebaseConfig from './firebase.js'
import {initializeApp} from 'Firebase/app'
import {getFirestore, connectFirestoreEmulator} from 'Firebase/firestore'

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
if (process.env.NODE_ENV === 'development') {
	console.warn('Starting in: ' + process.env.NODE_ENV)
	connectFirestoreEmulator(db, 'localhost', 8080)
}

//Provide globals and mount
app.provide('firebase', db)
app.mount('#app')
