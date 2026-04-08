// ============================================
// firebase-config.js
// Firebase SDK Import + Initialization
// ============================================

// ✅ Firebase v10 Modular SDK (latest 2026 CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getDatabase }    from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// ============================================
// 🔑 YOUR FIREBASE CONFIG
// (Replace placeholders with your actual values
//  from Firebase Console → Project Settings → Your Apps)
// ============================================
const firebaseConfig = {
  apiKey:            "AIzaSyDh6UkU21XeHLcx0FD4sb59m0LnybvN34Y",
  authDomain:        "school-management-system-b37f8.firebaseapp.com",
  projectId:         "school-management-system-b37f8",
  storageBucket:     "school-management-system-b37f8.firebasestorage.app",
  messagingSenderId: "511026339360",
  appId:             "1:511026339360:web:1cb1fbb1fbb68524f66645"
};

// ============================================
// 🚀 Firebase Initialize
// ============================================
const app = initializeApp(firebaseConfig);

// ✅ Auth service — Login/Logout ke liye
export const auth = getAuth(app);

// ✅ Firestore — Main database (students, teachers, fees etc.)
export const db = getFirestore(app);

// ✅ Realtime Database — Live features (attendance live, notifications)
export const rtdb = getDatabase(app);

// ✅ Export app bhi (kabhi zarurat pade toh)
export default app;

// ============================================
// 🧪 DEV HELPER: Console mein confirm karo
// ============================================
console.log("✅ Firebase initialized:", app.name);
