import { StateCreator } from 'zustand';
import { firestore } from '@services/firebase';

export default function firestoreMiddleware<T>(collection: string, initializer: StateCreator<T>): StateCreator<T> {
  return (set, get, api) => {
    const state = initializer(set, get, api);
    firestore
      .collection(collection)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            set({ ...(get() as any), ...(change.doc.data() as any) });
          }
        });
      });
    return state;
  };
}
