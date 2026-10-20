import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, /*connectAuthEmulator*/ } from "firebase/auth";
import { getFirestore, /*connectFirestoreEmulator*/  } from "firebase/firestore";
import { getStorage, /*connectStorageEmulator*/ } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6-R04pguKIfZuHvkkVTUbOTcO9zQPYM8",
  authDomain: "tic-tac-toe-v10.firebaseapp.com",
  projectId: "tic-tac-toe-v10",
  storageBucket: "tic-tac-toe-v10.firebasestorage.app",
  messagingSenderId: "752435621486",
  appId: "1:752435621486:web:47349b1381f640b478c07f"
};

const app = initializeApp(firebaseConfig);

// Auth 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

// Only connect to emulators when running locally
/*if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}*/

export { auth, provider };
export  { db };
export { storage };
