import firebase from "firebase";
import Swal from "sweetalert2";

const firebaseConfig = {
  // apiKey: "AIzaSyD_FPk1s0Li56iVVLd9b8RkHUaIdqPoPgk",
  // authDomain: "moussa-1c528.firebaseapp.com",
  // databaseURL: "https://moussa-1c528-default-rtdb.firebaseio.com",
  // projectId: "moussa-1c528",
  // storageBucket: "moussa-1c528.appspot.com",
  // messagingSenderId: "611309830797",
  // appId: "1:611309830797:web:c2a9f8a234dbcf282ad8c4",
  apiKey: "AIzaSyDrw2jXLbZuN7vNfqdN_BkSuMudzPtlScI",
  authDomain: "omar-lb.firebaseapp.com",
  projectId: "omar-lb",
  storageBucket: "omar-lb.appspot.com",
  messagingSenderId: "636818919929",
  appId: "1:636818919929:web:148a1ee3fbfbc920372d28",
  measurementId: "G-DV7E7C1BF0",
  databaseURL: "https://omar-lb-default-rtdb.firebaseio.com/",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (e, email, password) => {
  e.preventDefault();
  if (!email || !password) {
    return;
  }
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: err,
      icon: "",
      confirmButtonText: "ok",
    });
  }
};

const logout = () => {
  auth.signOut();
};

export { auth, db, signInWithEmailAndPassword, logout };
