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
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId: "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "PASTE_YOUR_APP_ID_HERE"
};

export default firebaseConfig;
