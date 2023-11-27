import IExperience from '@/interfaces/IExperience';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { getCollectionLocaleRef, getDocLocaleRef } from '@/utils/controller';
import {
  addDoc,
  deleteDoc,
  orderBy,
  query,
  updateDoc,
} from '@firebase/firestore';

export default class ExperienceController {
  private static collectionName: string = 'experiencia';

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
      getCollectionLocaleRef(this.collectionName, db, locale),
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
      getCollectionLocaleRef(this.collectionName, db, locale),
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
    const docRef = getDocLocaleRef(this.collectionName, db, id, locale);
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
    const docRef = getDocLocaleRef(this.collectionName, db, id, locale);
    await deleteDoc(docRef);
  }
}
