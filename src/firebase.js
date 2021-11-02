import firebase from "firebase";
import Swal from "sweetalert2";

const firebaseConfig = {
  apiKey: "AIzaSyAlwKsg4-W1ygjff9nad7ea4P_P9Kl1-Qo",
  authDomain: "nayef-432fd.firebaseapp.com",
  databaseURL: "https://nayef-432fd-default-rtdb.firebaseio.com",
  projectId: "nayef-432fd",
  storageBucket: "nayef-432fd.appspot.com",
  messagingSenderId: "203699411680",
  appId: "1:203699411680:web:a1bde85a790022b00f0e85",
  measurementId: "G-Z6NBNPWQ5Q"
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

const signInWithEmailAndPassword = async (email, password) => {
  if(!email || !password){
    return;
  }
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: err,
      icon: '',
      confirmButtonText: 'ok'
    })

   
  }
};



const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithEmailAndPassword,
  
  logout,
};
