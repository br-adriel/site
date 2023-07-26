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
  private static collectionRef = collection(db, 'experiencia');

  /**
   * Retorna todos as experiências do banco de dados
   *
   * @returns {Promise<IExperience[]>} Uma Promise que resolve para um array
   * contendo todos as experiências do banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
  static async getAll() {
    const q = query(
      this.collectionRef,
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
   * @returns {Promise<IExperience>} Uma Promise que resolve para o objeto da
   * experiência adicionada, incluindo o campo 'id' gerado pelo banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados.
   */
  static async add(experience: Omit<IExperience, 'id'>): Promise<IExperience> {
    const docRef = await addDoc(this.collectionRef, experience);
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
   * @returns {Promise<IExperience>} Uma Promise que resolve para o objeto da
   * experiência atualizada, incluindo o campo 'id' fornecido como parâmetro.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de atualização
   * no banco de dados.
   */
  static async update(
    experience: Omit<IExperience, 'id'>,
    id: string
  ): Promise<IExperience> {
    const docRef = doc(db, 'experiencia', id);
    await updateDoc(docRef, experience);
    return { ...experience, id };
  }

  static async remove(id: string): Promise<void> {
    const docRef = doc(db, 'experiencia', id);
    await deleteDoc(docRef);
  }
}
