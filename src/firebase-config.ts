import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID } from './share/const';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: 'graphi-ql.appspot.com',
  messagingSenderId: '689686768200',
  appId: '1:689686768200:web:035fb67fa79b507f49067d',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
