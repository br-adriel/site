import {
  getDocs,
  DocumentData,
  Query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import React from 'react';

async function fetchPage(
  query: Query<DocumentData>,
  shouldFetchRef: React.MutableRefObject<boolean>,
  lastFetchedItemRef: React.MutableRefObject<object>
) {
  const data = await getDocs(query);
  if (data.empty) shouldFetchRef.current = false;
  else lastFetchedItemRef.current = data.docs[data.size - 1];
  const fetchedItems = await data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return fetchedItems;
}

export default fetchPage;
