import IProject from '@/interfaces/IProject';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { addDoc, collection, orderBy, query } from '@firebase/firestore';

export default class ProjectController {
  private static collectionRef = collection(db, 'projetos');

  static async getAll() {
    const q = query(this.collectionRef, orderBy('dataCriacao', 'desc'));
    const fetchedProjects = await getQuery(q);
    return fetchedProjects as IProject[];
  }

  static async add(project: Omit<IProject, 'id'>): Promise<IProject> {
    const docRef = await addDoc(this.collectionRef, project);
    return { ...project, id: docRef.id };
  }
}
