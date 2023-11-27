import IEducation from '@/interfaces/IEducation';
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

export default class EducationController {
  private static collectionName: string = 'educacao';

  /**
   * Retorna todos as educações do banco de dados
   *
   * @returns {Promise<IEducation[]>} Uma Promise que resolve para um array
   * contendo todos as educações do banco de dados.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
  static async getAll(locale?: string) {
    const q = query(
      getCollectionLocaleRef(this.collectionName, db, locale),
      orderBy('anoInicio', 'desc'),
      orderBy('mesInicio', 'desc')
    );
    const fetchedEducation = await getQuery(q);
    return fetchedEducation as IEducation[];
  }

  /**
   * Adiciona uma nova educação ao banco de dados.
   *
   * @param {Omit<IEducacation, 'id'>} educaction - O objeto educação a ser
   * adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {Promise<IEducacation>} Uma Promise que resolve para o objeto da
   * educação adicionada, incluindo o campo 'id' gerado pelo banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados.
   */
  static async add(
    education: Omit<IEducation, 'id'>,
    locale?: string
  ): Promise<IEducation> {
    const docRef = await addDoc(
      getCollectionLocaleRef(this.collectionName, db, locale),
      education
    );
    return { ...education, id: docRef.id };
  }

  /**
   * Atualiza uma educação existente no banco de dados.
   *
   * @param {Omit<IEducation, 'id'>} education - O objeto da educação atualizada
   * a ser adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} id - O identificador único da educação que será atualizada.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {Promise<IEducation>} Uma Promise que resolve para o objeto da
   * educação atualizada, incluindo o campo 'id' fornecido como parâmetro.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de atualização
   * no banco de dados.
   */
  static async update(
    education: Omit<IEducation, 'id'>,
    id: string,
    locale?: string
  ): Promise<IEducation> {
    const docRef = getDocLocaleRef(this.collectionName, db, id, locale);
    await updateDoc(docRef, education);
    return { ...education, id };
  }

  /**
   * Remove uma entrada de educação do banco de dados.
   *
   * Este método estático permite remover uma entrada de educação existente do
   * banco de dados com base em seu identificador único ('id').
   *
   * @param {string} id - O identificador único da entrada de educação a ser
   * removida do banco de dados.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {Promise<void>} Uma Promise que resolve quando a entrada de
   * educação é removida com sucesso ou é rejeitada se ocorrer algum erro
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
