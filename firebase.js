// FIREBASE CONFIG & CLOUD SYNC FOR NA GRELHA
// Integração em tempo real com o Google Cloud Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAmbDKqsbQg79fXu5qASheBhATX7z7M31k",
  authDomain: "na-grelha.firebaseapp.com",
  projectId: "na-grelha",
  storageBucket: "na-grelha.firebasestorage.app",
  messagingSenderId: "984128837988",
  appId: "1:984128837988:web:282b68e640fbed06ef0271"
};

// Inicializa o Firebase
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

const firestoreDb = (typeof firebase !== 'undefined' && firebase.firestore) ? firebase.firestore() : null;
window.firestoreDb = firestoreDb;
