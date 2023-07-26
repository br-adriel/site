import IEducation from '@/interfaces/IEducation';
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

export default class EducationController {
  private static collectionRef = collection(db, 'educacao');

  /**
   * Retorna todos as educações do banco de dados
   *
   * @returns {Promise<IEducation[]>} Uma Promise que resolve para um array
   * contendo todos as educações do banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
  static async getAll() {
    const q = query(
      this.collectionRef,
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
   * @returns {Promise<IEducacation>} Uma Promise que resolve para o objeto da
   * educação adicionada, incluindo o campo 'id' gerado pelo banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados.
   */
  static async add(education: Omit<IEducation, 'id'>): Promise<IEducation> {
    const docRef = await addDoc(this.collectionRef, education);
    return { ...education, id: docRef.id };
  }

  static async update(
    education: Omit<IEducation, 'id'>,
    id: string
  ): Promise<IEducation> {
    const docRef = doc(db, 'educacao', id);
    await updateDoc(docRef, education);
    return { ...education, id };
  }

  static async remove(id: string): Promise<void> {
    const docRef = doc(db, 'educacao', id);
    await deleteDoc(docRef);
  }
}
