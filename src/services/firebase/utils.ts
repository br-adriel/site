import { DocumentData, Query, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase.config';

export async function getQuery(query: Query<DocumentData>) {
  const data = await getDocs(query);
  const fetchedObjects = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return fetchedObjects;
}

export async function uploadFile(dest: string, file: File) {
  const fileRef = ref(storage, dest);
  const uploaded = await uploadBytes(fileRef, file);
  const url = await getDownloadURL(uploaded.ref);
  return url;
}
