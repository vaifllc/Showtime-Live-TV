import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Replace with your actual Firebase config values
const firebaseConfig = {
  apiKey: 'AIzaSyB3uDpwHAnspQTCe45_vtxYMxxEs3REuRY',

  authDomain: 'showtime-live-tv.firebaseapp.com',

  projectId: 'showtime-live-tv',

  storageBucket: 'showtime-live-tv.firebasestorage.app',

  messagingSenderId: '693734156945',

  appId: '1:693734156945:web:24311e81a5d8ee06056d30',

  measurementId: 'G-KHYZNZW65N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };