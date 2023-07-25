import ISkill from '@/interfaces/ISkill';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import {
  addDoc,
  collection,
  doc,
  orderBy,
  query,
  updateDoc,
} from '@firebase/firestore';

export default class SkillController {
  private static collectionRef = collection(db, 'habilidades');

  static async getAll() {
    const q = query(this.collectionRef, orderBy('ordem', 'asc'));
    const fetchedSkills = await getQuery(q);
    return fetchedSkills as ISkill[];
  }

  static async add(skill: Omit<ISkill, 'id'>): Promise<ISkill> {
    const docRef = await addDoc(this.collectionRef, skill);
    return { ...skill, id: docRef.id };
  }

  static async update(skill: Omit<ISkill, 'id'>, id: string): Promise<ISkill> {
    const docRef = doc(db, 'habilidades', id);
    await updateDoc(docRef, skill);
    return { ...skill, id };
  }
}
