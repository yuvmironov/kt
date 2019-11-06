import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

const firebaseConfig = {
  apiKey: 'AIzaSyCErgUa_wbsP5UMe6o2TngG_sf1fMC3qG8',
  authDomain: 'kttodo-9d9ff.firebaseapp.com',
  databaseURL: 'https://kttodo-9d9ff.firebaseio.com',
  projectId: 'kttodo-9d9ff',
  storageBucket: 'kttodo-9d9ff.appspot.com',
  messagingSenderId: '1090325877428',
  appId: '1:1090325877428:web:e9ea5d09d0b4ec9c2a3de1'
}

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()
