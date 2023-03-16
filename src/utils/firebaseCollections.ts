import { db } from '@/firebase-config';
import { IEducationItem, IProject, ISkill } from '@/global/types';
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  orderBy,
  query,
  Query,
} from 'firebase/firestore';

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
  lastFetchedItemRef: React.MutableRefObject<object>
) {
  const data = await getDocs(query);
  if (!data.empty) lastFetchedItemRef.current = data.docs[data.size - 1];
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

export async function getHabilidades() {
  const skillsCollectionRef = collection(db, 'habilidades');
  const q = query(skillsCollectionRef, orderBy('ordem', 'asc'));
  const fetchedSkills = await getQuery(q);
  return fetchedSkills as ISkill[];
}

export async function getEducacao() {
  const educationCollectionRef = collection(db, 'educacao');
  const data = await getDocs(educationCollectionRef);
  const fetchedEducation = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return fetchedEducation as IEducationItem[];
}
