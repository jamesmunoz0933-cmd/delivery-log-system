// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDGALpIC8hVVBtlIXI1rJQvwTBHpP203IE",
  authDomain: "delivery-log-system.firebaseapp.com",
  databaseURL: "https://delivery-log-system-default-rtdb.firebaseio.com",
  projectId: "delivery-log-system",
  storageBucket: "delivery-log-system.firebasestorage.app",
  messagingSenderId: "351121185884",
  appId: "1:351121185884:web:b70de20aec0d83f9725a99",
  measurementId: "G-9PH89BXQNB"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export { ref, push };
