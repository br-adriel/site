import IProject from '@/interfaces/IProject';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  updateDoc,
  limit,
} from '@firebase/firestore';

export default class ProjectController {
  private static collectionRef = collection(db, 'projetos');

  /**
   * Retorna todos os projetos do banco de dados
   *
   * @returns {Promise<IProject[]>} Uma Promise que resolve para um array
   * contendo todos os projetos do banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
  static async getAll() {
    const q = query(this.collectionRef, orderBy('dataCriacao', 'desc'));
    const fetchedProjects = await getQuery(q);
    return fetchedProjects as IProject[];
  }

  static async getLatest() {
    const q = query(
      this.collectionRef,
      orderBy('dataCriacao', 'desc'),
      limit(3)
    );
    const fetchedProjects = await getQuery(q);
    return fetchedProjects as IProject[];
  }

  /**
   * Adiciona um novo projeto ao banco de dados.
   *
   * @param {Omit<IProject, 'id'>} project - O objeto projeto a ser
   * adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @returns {Promise<IProject>} Uma Promise que resolve para o objeto do
   * projeto adicionado, incluindo o campo 'id' gerado pelo banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados.
   */
  static async add(project: Omit<IProject, 'id'>): Promise<IProject> {
    const docRef = await addDoc(this.collectionRef, project);
    return { ...project, id: docRef.id };
  }

  static async update(
    project: Omit<IProject, 'id'>,
    id: string
  ): Promise<IProject> {
    const docRef = doc(db, 'projetos', id);
    await updateDoc(docRef, project);
    return { ...project, id };
  }

  static async remove(id: string): Promise<void> {
    const docRef = doc(db, 'projetos', id);
    await deleteDoc(docRef);
  }
}
