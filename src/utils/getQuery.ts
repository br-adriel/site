import { getDocs, Query, DocumentData } from 'firebase/firestore';

export default async function getQuery(query: Query<DocumentData>) {
  const data = await getDocs(query);
  const fetchedObjects = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return fetchedObjects;
}
