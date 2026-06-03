import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// optional: analytics (مش ضروري في frontend apps)
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6qXusVMmsO_hXkR843WI6IW74d_3GFlg",
  authDomain: "store-bd55f.firebaseapp.com",
  projectId: "store-bd55f",
  storageBucket: "store-bd55f.firebasestorage.app",
  messagingSenderId: "598887077316",
  appId: "1:598887077316:web:dddd004d23e701b3f70091",
  measurementId: "G-1VQGM5KHMP",
};

// Init app
const app = initializeApp(firebaseConfig);

// Auth (IMPORTANT)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Analytics (اختياري)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };