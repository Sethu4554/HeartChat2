# 💕 HeartChat — Setup Guide

## Step 1: Create Firebase Project (FREE)

1. Go to https://console.firebase.google.com
2. Click **"Add project"** → Name it **"HeartChat"** → Continue
3. Disable Google Analytics (optional) → **Create project**

---

## Step 2: Enable Authentication

1. In Firebase Console → **Authentication** → **Get started**
2. Click **Sign-in method** tab
3. Click **Email/Password** → Enable it → Save

---

## Step 3: Create Firestore Database

1. In Firebase Console → **Firestore Database** → **Create database**
2. Choose **"Start in production mode"** → Next → Select a region → Done
3. Go to **Rules** tab → Replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
4. Click **Publish**

---

## Step 4: Create Storage

1. In Firebase Console → **Storage** → **Get started**
2. Click through the setup → Done
3. Go to **Rules** tab → Replace with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
4. Click **Publish**

---

## Step 5: Get Your Config Keys

1. In Firebase Console → Click the ⚙️ gear icon → **Project settings**
2. Scroll down to **"Your apps"** → Click **"</>"** (Web) icon
3. Register app name as **"HeartChat"** → Continue
4. Copy the `firebaseConfig` object

---

## Step 6: Paste Config into index.html

Open `index.html` in any text editor (Notepad, VS Code etc.)

Find this section near the top:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN_HERE",
  ...
```

Replace each `"PASTE_YOUR_..._HERE"` with your actual values from Firebase.

---

## Step 7: Deploy to GitHub Pages (FREE live link!)

1. Go to https://github.com → Sign up / Log in
2. Click **"New repository"** → Name: `heartchat` → Public → Create
3. Click **"uploading an existing file"**
4. Upload ALL 4 files: `index.html`, `manifest.json`, `sw.js`, `README.md`
5. Click **Commit changes**
6. Go to **Settings** → **Pages** → Source: **"Deploy from branch"** → Branch: **main** → Save
7. Wait 1-2 minutes → Your link appears: `https://YOUR-USERNAME.github.io/heartchat`

---

## Step 8: Install on Android 📱

1. Open your GitHub Pages link in **Chrome** on Android
2. Chrome shows **"Add HeartChat to Home screen"** banner at the bottom
3. Tap **Add** → Done! ✅

Opens full screen like a real app, works offline too!

---

## Login Credentials

| User | Email | Password |
|------|-------|----------|
| Abu | abarabarna781@gmail.com | 20091999 |
| Sethu | sethubala8412@gmail.com | 30052000 |

**First login:** Each user sets up their name, mobile number (+91), and profile photo.
**After that:** Real-time chat, voice notes, image sharing, emoji & stickers — all live! 💕

---

## Features

- ✅ Real-time messaging via Firebase Firestore
- ✅ Online/offline presence indicator
- ✅ Typing indicator ("Sethu is typing...")
- ✅ Read receipts (blue ticks ✓✓)
- ✅ Image sharing via Firebase Storage
- ✅ Voice notes (records + uploads)
- ✅ Emoji & stickers (6 categories, 180+ items)
- ✅ Profile picture upload
- ✅ Mobile number (+91 India) in profile
- ✅ 4 themes: Default, Pastel, Earth, Dark
- ✅ PWA — installs on Android home screen
- ✅ Works offline (cached)
