import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfQ6f1HUD47tg-g4bNI2CrOZueT7dAUwE",
  authDomain: "lp-game-app.firebaseapp.com",
  projectId: "lp-game-app",
  storageBucket: "lp-game-app.firebasestorage.app",
  messagingSenderId: "843911818514",
  appId: "1:843911818514:web:3c7315975e61996cfd97cb",
  measurementId: "G-WX4S1B5EGG"
};

const app = initializeApp(firebaseConfig);

export default app;