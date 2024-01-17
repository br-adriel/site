import IProject from '@/interfaces/IProject';
import { db, storage } from '@/services/firebase/firebase.config';
import {
  getQuery,
  joinDocDataAndId,
  uploadFile,
} from '@/services/firebase/utils';
import {
  getCollectionLocaleName,
  getCollectionLocaleRef,
} from '@/utils/controller';
import {
  Query,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
  where,
} from '@firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

export default class ProjectController {
  private static collectionName: string = 'projetos';

  /**
   * Obtém todos os projetos da coleção, ordenados por data de criação, de
   * acordo com a localidade especificada, se fornecida.
   *
   * @param {string} [locale] - Opcional. O código de localidade. Se fornecido e
   * válido, a consulta será ajustada para a localidade especificada.
   *
   * @returns {Promise<IProject[]>} Uma Promise que resolve para uma matriz de
   * projetos, ordenados por data de criação decrescente.
   */
  static async getAll(locale?: string) {
    const q = query(
      getCollectionLocaleRef(this.collectionName, db, locale),
      orderBy('dataCriacao', 'desc')
    );
    const fetchedProjects = await getQuery(q);
    return fetchedProjects as IProject[];
  }

  /**
   * Obtém todos os projetos da coleção que contêm a tecnologia especificada,
   * ordenados por data de criação, de acordo com a localidade especificada, se
   * fornecida.
   *
   * @param {string} technology - A tecnologia pela qual os projetos serão
   * filtrados.
   * @param {string} [locale] - Opcional. O código de localidade. Se fornecido e
   * válido, a consulta será ajustada para a localidade especificada.
   *
   * @returns {Promise<IProject[]>} Uma Promise que resolve para uma matriz de
   * projetos que contêm a tecnologia especificada, ordenados por data de
   * criação decrescente.
   */
  static async getAllByTechnology(technology: string, locale?: string) {
    const q = query(
      getCollectionLocaleRef(this.collectionName, db, locale),
      where('tecnologias', 'array-contains', technology),
      orderBy('dataCriacao', 'desc')
    );
    const projects = await getQuery(q);
    return projects as IProject[];
  }

  /**
   * Obtém um projeto específico da coleção com base no ID, de acordo com a
   * localidade especificada, se fornecida.
   *
   * @param {string} id - O ID do projeto desejado.
   * @param {string} [locale] - Opcional. O código de localidade. Se fornecido
   * e válido, o nome da coleção será ajustado para incluir a localidade.
   *
   * @returns {Promise<IProject>} Uma Promise que resolve para o projeto com o
   * ID fornecido.
   */
  static async getById(id: string, locale?: string) {
    const docCollectionName = getCollectionLocaleName(
      this.collectionName,
      locale
    );
    const docRef = doc(db, docCollectionName, id);
    const project = await getDoc(docRef);
    return joinDocDataAndId(project) as IProject;
  }

  /**
   * Obtém uma lista paginada de projetos da coleção, ordenados por data de
   * criação.
   *
   * @param {QueryDocumentSnapshot} [lastVisible] - Opcional. O último snapshot
   * de documento visível da página anterior, usado para paginação.
   * @param {string} [locale] - Opcional. O código de localidade.
   *
   * @returns {Promise<{
   * projects: IProject[],
   * lastProjectDoc: QueryDocumentSnapshot }>} Uma Promise que resolve para um
   * objeto contendo uma matriz de projetos e o snapshot do último projeto na
   * página.
   */
  static async getPage(lastVisible?: QueryDocumentSnapshot, locale?: string) {
    let q: Query;
    if (lastVisible) {
      q = query(
        getCollectionLocaleRef(this.collectionName, db, locale),
        orderBy('dataCriacao', 'desc'),
        limit(10),
        startAfter(lastVisible)
      );
    } else {
      q = query(
        getCollectionLocaleRef(this.collectionName, db, locale),
        orderBy('dataCriacao', 'desc'),
        limit(10)
      );
    }

    const result = await getDocs(q);
    const projects = result.docs.map((doc) =>
      joinDocDataAndId(doc)
    ) as IProject[];
    const lastProjectDoc = result.docs[result.docs.length - 1];

    return { projects, lastProjectDoc };
  }

  /**
   * Obtém os 3 projetos mais recentes da coleção, ordenados por data de
   * criação de acordo com a localidade especificada, se fornecida.
   *
   * @param {string} [locale] - Opcional. O código de localidade. Se fornecido e
   * válido, o nome da coleção será ajustado para incluir a localidade.
   *
   * @returns {Promise<IProject[]>} Uma Promise que resolve para uma matriz dos
   * projetos mais recentes, ordenados por data de criação decrescente.
   */
  static async getLatest(locale?: string) {
    const q = query(
      getCollectionLocaleRef(this.collectionName, db, locale),
      orderBy('dataCriacao', 'desc'),
      limit(3)
    );
    const fetchedProjects = await getQuery(q);
    return fetchedProjects as IProject[];
  }

  /**
   * Adiciona um novo projeto à coleção, juntamente com uma imagem associada, e
   * retorna o projeto adicionado.
   *
   * @param {Omit<Omit<IProject, 'id'>, 'imagem'>} project - Os detalhes do
   * projeto, excluindo o ID e a URL da imagem.
   * @param {File} image - A imagem associada ao projeto.
   * @param {string} [locale] - Opcional. O código de localidade.
   *
   * @returns {Promise<IProject>} Uma Promise que resolve para o projeto
   * adicionado, incluindo o ID e a URL da imagem.
   */
  static async add(
    project: Omit<Omit<IProject, 'id'>, 'imagem'>,
    image: File,
    locale?: string
  ): Promise<IProject> {
    const docRef = await addDoc(
      getCollectionLocaleRef(this.collectionName, db, locale),
      {
        ...project,
      }
    );

    const imageUrl = await uploadFile(
      `projetos/${docRef.id}.${image.name.split('.').pop()}`,
      image
    );
    updateDoc(docRef, { imagem: imageUrl });

    return { ...project, id: docRef.id, imagem: imageUrl };
  }

  /**
   * Atualiza as informações de um projeto existente na coleção, incluindo a
   * possibilidade de atualizar a imagem associada.
   *
   * @param {Omit<IProject, 'id'>} project - Os detalhes atualizados do projeto,
   * excluindo o ID.
   * @param {string} id - O ID do projeto a ser atualizado.
   * @param {File} [image] - Opcional. A nova imagem associada ao projeto.
   * @param {string} [locale] - Opcional. O código de localidade.
   *
   * @returns {Promise<IProject>} Uma Promise que resolve para o projeto
   * atualizado, incluindo o ID e a URL da imagem, se aplicável.
   */
  static async update(
    project: Omit<IProject, 'id'>,
    id: string,
    image?: File,
    locale?: string
  ): Promise<IProject> {
    if (image) {
      const imageUrl = await uploadFile(
        `projetos/${id}.${image.name.split('.').pop()}`,
        image
      );
      project.imagem = imageUrl;
    }

    const docCollectionName = getCollectionLocaleName(
      this.collectionName,
      locale
    );
    const docRef = doc(db, docCollectionName, id);
    await updateDoc(docRef, project);
    return { ...project, id };
  }

  /**
   * Remove um projeto da coleção, incluindo a exclusão da imagem associada.
   *
   * @param {string} id - O ID do projeto a ser removido.
   * @param {string} [locale] - Opcional. O código de localidade.
   *
   * @returns {Promise<void>} Uma Promise que resolve quando a remoção do
   * projeto e sua imagem associada (se existente) forem concluídas.
   */
  static async remove(id: string, locale?: string): Promise<void> {
    const docCollectionName = getCollectionLocaleName(
      this.collectionName,
      locale
    );
    const docRef = doc(db, docCollectionName, id);
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
