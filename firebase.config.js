// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAm_7VuruxIuuBAjucxWIc8j8fy5YLX0kc',
	authDomain: 'comparator-app-b211d.firebaseapp.com',
	projectId: 'comparator-app-b211d',
	storageBucket: 'comparator-app-b211d.appspot.com',
	messagingSenderId: '7215465335',
	appId: '1:7215465335:web:6ad7ef353a88f282721772'
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
