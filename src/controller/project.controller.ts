import IProject from '@/interfaces/IProject';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  limit,
  orderBy,
  query,
  updateDoc,
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

  /**
   * Obtém os projetos mais recentes do banco de dados.
   *
   * Os projetos são retornados em ordem decrescente de data de criação,
   * limitados aos 3 projetos mais recentes.
   *
   * @returns {Promise<IProject[]>} Uma Promise que resolve para um array
   * contendo os 3 projetos mais recentes do banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
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

  /**
   * Atualiza um projeto existente no banco de dados.
   *
   * @param {Omit<IProject, 'id'>} project - O objeto do projeto atualizado a
   * ser adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} id - O identificador único do projeto que será atualizado.
   *
   * @returns {Promise<IProject>} Uma Promise que resolve para o objeto do
   * projeto atualizado, incluindo o campo 'id' fornecido como parâmetro.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de atualização
   * no banco de dados.
   */
  static async update(
    project: Omit<IProject, 'id'>,
    id: string
  ): Promise<IProject> {
    const docRef = doc(db, 'projetos', id);
    await updateDoc(docRef, project);
    return { ...project, id };
  }

  /**
   * Remove um projeto do banco de dados.
   *
   * @param {string} id - O identificador único do projeto a ser removido do
   * banco de dados.
   *
   * @returns {Promise<void>} Uma Promise que resolve quando o projeto é
   * removido com sucesso ou é rejeitada, se ocorrer algum erro durante a
   * operação de remoção no banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de remoção no
   * banco de dados.
   */
  static async remove(id: string): Promise<void> {
    const docRef = doc(db, 'projetos', id);
    await deleteDoc(docRef);
  }
}