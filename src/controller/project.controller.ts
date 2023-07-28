import IProject from '@/interfaces/IProject';
import { db, storage } from '@/services/firebase/firebase.config';
import {
  getQuery,
  joinDocDataAndId,
  uploadFile,
} from '@/services/firebase/utils';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  limit,
  orderBy,
  query,
  updateDoc,
} from '@firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

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
   * @param {File} image - O arquivo de imagem associado ao projeto.
   *
   * @returns {Promise<IProject>} Uma Promise que resolve para o objeto do
   * projeto adicionado, incluindo o campo 'id' gerado pelo banco de dados e o
   * campo 'imagem' que contém a URL da imagem armazenada.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados ou no upload da imagem.
   */
  static async add(
    project: Omit<Omit<IProject, 'id'>, 'imagem'>,
    image: File
  ): Promise<IProject> {
    const docRef = await addDoc(this.collectionRef, {
      ...project,
    });

    const imageUrl = await uploadFile(
      `projetos/${docRef.id}.${image.name.split('.').pop()}`,
      image
    );
    updateDoc(docRef, { imagem: imageUrl });

    return { ...project, id: docRef.id, imagem: imageUrl };
  }

  /**
   * Atualiza um projeto existente no banco de dados.
   *
   * @param {Omit<IProject, 'id'>} project - O objeto do projeto atualizado a
   * ser adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} id - O identificador único do projeto que será atualizado.
   *
   * @param {File} [image] - O arquivo de imagem a ser atualizado no projeto
   * (opcional).
   *
   * @returns {Promise<IProject>} Uma Promise que resolve para o objeto do
   * projeto atualizado, incluindo o campo 'id' fornecido como parâmetro.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de atualização
   * no banco de dados ou no upload da imagem.
   */
  static async update(
    project: Omit<IProject, 'id'>,
    id: string,
    image?: File
  ): Promise<IProject> {
    if (image) {
      const imageUrl = await uploadFile(
        `projetos/${id}.${image.name.split('.').pop()}`,
        image
      );
      project.imagem = imageUrl;
    }

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
    const project = joinDocDataAndId(await getDoc(docRef)) as IProject;

    const imgRef = ref(
      storage,
      `projetos/${docRef.id}.${project.imagem
        .split('.')
        .pop()
        ?.substring(0, 3)}`
    );

    await deleteObject(imgRef);
    await deleteDoc(docRef);
  }
}
