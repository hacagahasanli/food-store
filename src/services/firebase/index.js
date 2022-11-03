import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAFKUWBZ3GN9-AJqUVuhKQY5VvrDi3U_Y",
  authDomain: "feature-images.firebaseapp.com",
  databaseURL: "https://feature-images-default-rtdb.firebaseio.com",
  projectId: "feature-images",
  storageBucket: "feature-images.appspot.com",
  messagingSenderId: "902496483852",
  appId: "1:902496483852:web:ae93bf07833a1422970c29"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);