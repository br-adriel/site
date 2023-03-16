import { db } from '@/firebase-config';
import { IProject } from '@/global/types';
import { doc, DocumentData, getDoc, getDocs, Query } from 'firebase/firestore';

export async function getQuery(query: Query<DocumentData>) {
  const data = await getDocs(query);
  const fetchedObjects = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return fetchedObjects;
}

export async function fetchPage(
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

export function joinProjectsArrays(
  projectsArr: IProject[] = [],
  fetchedArr: IProject[] = []
) {
  if (!projectsArr.length) return fetchedArr;
  if (!fetchedArr.length) return projectsArr;

  // verifica se está realizando a mesma query que a anterior
  for (let i = 1; i <= 10; i++) {
    let index = projectsArr.length - i;
    if (index >= 0) {
      if (projectsArr[index].id === fetchedArr[0].id) {
        return projectsArr;
      }
    }
  }

  // verifica se já foram buscados todos os projetos
  const notRepeated = [];
  for (let i = 0; i < fetchedArr.length; i++) {
    if (projectsArr[0].id === fetchedArr[i].id) break;
    notRepeated.push(fetchedArr[i]);
  }
  return [...projectsArr, ...notRepeated];
}

export async function getProject(id: string) {
  const docRef = doc(db, 'projetos', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  return null;
}

export function serializeProjectsArray(projects: IProject[]): IProject[] {
  return projects.map((proj) => {
    return {
      ...proj,
      criado_em: proj.criado_em.toString(),
    };
  });
}
