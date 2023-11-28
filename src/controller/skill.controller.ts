import ISkill from '@/interfaces/ISkill';
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

export default class SkillController {
  private static collectionName: string = 'habilidades';

  /**
   * Retorna todos as habilidades do banco de dados
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {Promise<ISkill[]>} Uma Promise que resolve para um array
   * contendo todas as habilidaes do banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a consulta ao banco de dados.
   */
  static async getAll(locale?: string) {
    const q = query(
      getCollectionLocaleRef(this.collectionName, db, locale),
      orderBy('ordem', 'asc')
    );
    const fetchedSkills = await getQuery(q);
    return fetchedSkills as ISkill[];
  }

  /**
   * Adiciona uma nova habilidade ao banco de dados.
   *
   * @param {Omit<ISkill, 'id'>} skill - O objeto habilidade a ser
   * adicionado ao banco de dados, excluindo o campo 'id'.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {Promise<ISkill>} Uma Promise que resolve para o objeto da
   * habilidade adicionada, incluindo o campo 'id' gerado pelo banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de inserção no
   * banco de dados.
   */
  static async add(
    skill: Omit<ISkill, 'id'>,
    locale?: string
  ): Promise<ISkill> {
    const docRef = await addDoc(
      getCollectionLocaleRef(this.collectionName, db, locale),
      skill
    );
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
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {Promise<ISkill>} Uma Promise que resolve para o objeto da
   * habilidade atualizada, incluindo o campo 'id' fornecido como parâmetro.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de atualização
   * no banco de dados.
   */
  static async update(
    skill: Omit<ISkill, 'id'>,
    id: string,
    locale?: string
  ): Promise<ISkill> {
    const docRef = getDocLocaleRef(this.collectionName, db, id, locale);
    await updateDoc(docRef, skill);
    return { ...skill, id };
  }

  /**
   * Remove uma habilidade do banco de dados.
   *
   * @param {string} id - O identificador único da habilidade a ser removida do
   * banco de dados.
   *
   * @param {string} [locale] - Locale do idioma dos dados.
   *
   * @returns {Promise<void>} Uma Promise que resolve quando a habilidade é
   * removida com sucesso ou é rejeitada se ocorrer algum erro durante a
   * operação de remoção no banco de dados.
   *
   * @throws {Error} Se ocorrer algum erro durante a operação de remoção no
   * banco de dados.
   */
  static async remove(id: string, locale?: string): Promise<void> {
    const docRef = getDocLocaleRef(this.collectionName, db, id, locale);
    await deleteDoc(docRef);
  }
}
