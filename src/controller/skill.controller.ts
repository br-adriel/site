import ISkill from '@/interfaces/ISkill';
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

export default class SkillController {
  private static collectionRef = collection(db, 'habilidades');

  /**
   * Retorna todos as habilidades do banco de dados
   *
   * @returns {Promise<ISkill[]>} Uma Promise que resolve para um array
   * contendo todas as habilidaes do banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
  static async getAll() {
    const q = query(this.collectionRef, orderBy('ordem', 'asc'));
    const fetchedSkills = await getQuery(q);
    return fetchedSkills as ISkill[];
  }

  /**
   * Adiciona uma nova habilidade ao banco de dados.
   *
   * @param {Omit<ISkill, 'id'>} skill - O objeto habilidade a ser
   * adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @returns {Promise<ISkill>} Uma Promise que resolve para o objeto da
   * habilidade adicionada, incluindo o campo 'id' gerado pelo banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados.
   */
  static async add(skill: Omit<ISkill, 'id'>): Promise<ISkill> {
    const docRef = await addDoc(this.collectionRef, skill);
    return { ...skill, id: docRef.id };
  }

  /**
   * Atualiza uma habilidade existente no banco de dados.
   *
   * @param {Omit<ISkill, 'id'>} skill - O objeto da habilidade atualizada a
   * ser adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} id - O identificador único da habilidade que será atualizada.
   *
   * @returns {Promise<ISkill>} Uma Promise que resolve para o objeto da
   * habilidade atualizada, incluindo o campo 'id' fornecido como parâmetro.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de atualização
   * no banco de dados.
   */
  static async update(skill: Omit<ISkill, 'id'>, id: string): Promise<ISkill> {
    const docRef = doc(db, 'habilidades', id);
    await updateDoc(docRef, skill);
    return { ...skill, id };
  }

  static async remove(id: string): Promise<void> {
    const docRef = doc(db, 'habilidades', id);
    await deleteDoc(docRef);
  }
}
