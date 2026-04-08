// ============================================
// app.js — Main Application Entry Point
// ============================================

// Firebase services import (from our config file)
import { auth, db, rtdb } from "./firebase-config.js";

// Firebase Auth observer import
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// ============================================
// 🔍 DOM Elements
// ============================================
const firebaseStatusEl = document.getElementById("firebase-status");
const authStatusEl     = document.getElementById("auth-status");

// ============================================
// ✅ Step 1: Firebase Connection Check
// (Agar firebase-config.js load ho gaya, yeh chalega)
// ============================================
function checkFirebaseConnection() {
  try {
    // auth aur db exist karte hain matlab Firebase init hua
    if (auth && db && rtdb) {
      // ✅ Success
      firebaseStatusEl.textContent = "✅ Firebase Connected Successfully!";
      firebaseStatusEl.className = 
        "text-sm font-semibold px-4 py-2 rounded-lg bg-green-100 text-green-700";
      
      console.log("✅ Auth service ready:", auth);
      console.log("✅ Firestore ready:", db);
      console.log("✅ Realtime DB ready:", rtdb);
    }
  } catch (error) {
    // ❌ Error
    firebaseStatusEl.textContent = "❌ Firebase Error: " + error.message;
    firebaseStatusEl.className = 
      "text-sm font-semibold px-4 py-2 rounded-lg bg-red-100 text-red-700";
    
    console.error("❌ Firebase init failed:", error);
  }
}

// ============================================
// 👤 Step 2: Auth State Observer
// (User logged in hai ya nahi — real-time check)
// ============================================
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User logged in hai
    authStatusEl.innerHTML = `
      <span class="flex items-center gap-2">
        <span class="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
        ${user.email}
      </span>
    `;
    console.log("👤 Logged in user:", user.email);
  } else {
    // User logged out hai
    authStatusEl.innerHTML = `
      <span class="flex items-center gap-2">
        <span class="w-2 h-2 bg-gray-400 rounded-full inline-block"></span>
        Not Logged In
      </span>
    `;
    console.log("👤 No user logged in.");
  }
});

// ============================================
// 🚀 App Initialization
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 School Management System starting...");
  checkFirebaseConnection();
});
