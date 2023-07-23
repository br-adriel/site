import ISkill from '@/interfaces/ISkill';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { collection, orderBy, query } from '@firebase/firestore';

export default class SkillController {
  static async getAll() {
    const skillsCollectionRef = collection(db, 'habilidades');
    const q = query(skillsCollectionRef, orderBy('ordem', 'asc'));
    const fetchedSkills = await getQuery(q);
    return fetchedSkills as ISkill[];
  }
}
