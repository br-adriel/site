import IExperience from '@/interfaces/IExperience';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { collection, orderBy, query } from '@firebase/firestore';

export default class ExperienceController {
  static async getAll() {
    const experiencesCollectionRef = collection(db, 'experiencia');
    const q = query(
      experiencesCollectionRef,
      orderBy('ano_inicio', 'desc'),
      orderBy('mes_inicio', 'desc')
    );
    const fetchedSkills = await getQuery(q);
    return fetchedSkills as IExperience[];
  }
}
