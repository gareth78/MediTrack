import { firestore } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export async function addItem(collectionName: string, data: any) {
  await addDoc(collection(firestore, collectionName), data);
}

export async function getItems(collectionName: string) {
  const snap = await getDocs(collection(firestore, collectionName));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
