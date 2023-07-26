import IProject from '@/interfaces/IProject';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { collection, orderBy, query } from '@firebase/firestore';

export default class ProjectController {
  private static collectionRef = collection(db, 'projetos');

  static async getAll() {
    const q = query(this.collectionRef, orderBy('dataCriacao', 'desc'));
    const fetchedProjects = await getQuery(q);
    return fetchedProjects as IProject[];
  }
}
