import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig= {
  apiKey: "AIzaSyAbGf_RF5Hj2pZCyVLibg6CzPXY4x4gz7g",
  authDomain: "depordev-coderhouse.firebaseapp.com",
  projectId: "depordev-coderhouse",
  storageBucket: "depordev-coderhouse.appspot.com",
  messagingSenderId: "920514512055",
  appId: "1:920514512055:web:648e61c61334a9169f7932"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}