import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = Constants.manifest?.extra?.firebase ?? {};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

enableIndexedDbPersistence(firestore).catch(() => {
  // ignore persistence errors
});
