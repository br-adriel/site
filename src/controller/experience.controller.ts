import IExperience from '@/interfaces/IExperience';
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
} from '@firebase/firestore';

export default class ExperienceController {
  private static collectionName: string = 'experiencia';
  private static collectionRef = collection(db, this.collectionName);

  /**
   * Retorna uma referência para a coleção no banco de dados com base no idioma
   * fornecido. Se nenhum idioma for fornecido ou o idioma não for 'pt', a
   * coleção padrão será retornada.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {CollectionReference<IExperience>} Uma referência para a coleção no
   * banco de dados.
   */
  private static getCollectionLocaleRef = (locale?: string) => {
    if (!locale || locale !== 'pt') {
      return collection(db, locale + '-' + this.collectionName);
    }
    return this.collectionRef;
  };

  /**
   * Retorna uma referência para o documento no banco de dados com base no ID e
   * no idioma fornecidos. Se nenhum idioma for fornecido ou o idioma não for
   * 'pt', a referência padrão será retornada.
   *
   * @param {string} id - O ID do documento no banco de dados.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {DocumentReference<IExperience>} Uma referência para o documento
   * no banco de dados.
   */
  private static getDocLocaleRef = (id: string, locale?: string) => {
    if (!locale || locale !== 'pt') {
      return doc(db, `${locale}${this.collectionName}`, id);
    }
    return doc(db, this.collectionName, id);
  };

  /**
   * Retorna todos as experiências do banco de dados
   *
   * @param {string} [locale] - Locale do idioma dos dados
   *
   * @returns {Promise<IExperience[]>} Uma Promise que resolve para um array
   * contendo todos as experiências do banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
  static async getAll(locale?: string) {
    const q = query(
      this.getCollectionLocaleRef(locale),
      orderBy('anoInicio', 'desc'),
      orderBy('mesInicio', 'desc')
    );
    const fetchedExperiences = await getQuery(q);
    return fetchedExperiences as IExperience[];
  }

  /**
   * Adiciona uma nova experiência ao banco de dados.
   *
   * @param {Omit<IExperience, 'id'>} experience - O objeto da experiência a
   * ser adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} [locale] - Locale do idioma dos dados
   *
   * @returns {Promise<IExperience>} Uma Promise que resolve para o objeto da
   * experiência adicionada, incluindo o campo 'id' gerado pelo banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados.
   */
  static async add(
    experience: Omit<IExperience, 'id'>,
    locale?: string
  ): Promise<IExperience> {
    const docRef = await addDoc(
      this.getCollectionLocaleRef(locale),
      experience
    );
    return { ...experience, id: docRef.id };
  }

  /**
   * Atualiza uma experiência existente no banco de dados.
   *
   * @param {Omit<IExperience, 'id'>} experience - O objeto da experiência
   * atualizada a ser adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} id - O identificador único da experiência que será atualizada.
   *
   * @param {string} [locale] - Locale do idioma dos dados
   *
   * @returns {Promise<IExperience>} Uma Promise que resolve para o objeto da
   * experiência atualizada, incluindo o campo 'id' fornecido como parâmetro.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de atualização
   * no banco de dados.
   */
  static async update(
    experience: Omit<IExperience, 'id'>,
    id: string,
    locale?: string
  ): Promise<IExperience> {
    const docRef = this.getDocLocaleRef(id, locale);
    await updateDoc(docRef, experience);
    return { ...experience, id };
  }

  /**
   * Remove uma entrada de experiência do banco de dados.
   *
   * Este método estático permite remover uma entrada de experiência existente
   * do banco de dados com base em seu identificador único ('id').
   *
   * @param {string} id - O identificador único da entrada de experiência a ser
   * removida do banco de dados.
   *
   * @param {string} [locale] - Locale do idioma dos dados
   *
   * @returns {Promise<void>} Uma Promise que resolve quando a entrada de
   * experiência é removida com sucesso ou é rejeitada se ocorrer algum erro
   * durante a operação de remoção no banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de remoção no
   * banco de dados.
   */
  static async remove(id: string, locale?: string): Promise<void> {
    const docRef = this.getDocLocaleRef(id, locale);
    await deleteDoc(docRef);
  }
}
