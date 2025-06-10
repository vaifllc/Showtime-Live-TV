import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// These values should be set in environment variables
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || 'your-api-key',
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || 'your-project.firebaseapp.com',
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || 'your-project-id',
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || 'your-project.firebasestorage.app',
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || 'your-sender-id',
  appId: process.env.VUE_APP_FIREBASE_APP_ID || 'your-app-id',
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || 'your-measurement-id',
}

// Validate that required environment variables are set
const requiredEnvVars = [
  'VUE_APP_FIREBASE_API_KEY',
  'VUE_APP_FIREBASE_AUTH_DOMAIN',
  'VUE_APP_FIREBASE_PROJECT_ID',
  'VUE_APP_FIREBASE_STORAGE_BUCKET',
  'VUE_APP_FIREBASE_MESSAGING_SENDER_ID',
  'VUE_APP_FIREBASE_APP_ID'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0 && process.env.NODE_ENV !== 'development') {
  console.warn('Missing required Firebase environment variables:', missingEnvVars);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };