import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export default async function getProject(id: string) {
  const docRef = doc(db, 'projetos', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  return null;
}
