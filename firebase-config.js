// ============================================================
//  STEP 1: Go to https://console.firebase.google.com
//  STEP 2: Create a new project → name it "HeartChat"
//  STEP 3: Click "Web" icon </> → Register app → Copy config below
//  STEP 4: Replace ALL values below with YOUR Firebase config
//  STEP 5: In Firebase Console:
//     → Authentication → Sign-in method → Enable "Email/Password"
//     → Firestore Database → Create database (production mode)
//     → Storage → Get started
//  STEP 6: In Firestore Rules, paste this:
//     rules_version = '2';
//     service cloud.firestore {
//       match /databases/{database}/documents {
//         match /{document=**} {
//           allow read, write: if request.auth != null;
//         }
//       }
//     }
//  STEP 7: In Storage Rules, paste this:
//     rules_version = '2';
//     service firebase.storage {
//       match /b/{bucket}/o {
//         match /{allPaths=**} {
//           allow read, write: if request.auth != null;
//         }
//       }
//     }
// ============================================================

 const firebaseConfig = {
    apiKey: "AIzaSyBJrHrjtHl2I5dKZPcE91VUi8hgoS-44ck",
    authDomain: "heartchat-dc348.firebaseapp.com",
    projectId: "heartchat-dc348",
    storageBucket: "heartchat-dc348.appspot.com",
    messagingSenderId: "365939525614",
    appId: "1:365939525614:web:40e2aacf7b1256009e70ff",
    measurementId: "G-7RVG182R3P"
  };

export default firebaseConfig;
