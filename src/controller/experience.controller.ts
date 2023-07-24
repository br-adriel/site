import IExperience from '@/interfaces/IExperience';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { addDoc, collection, orderBy, query } from '@firebase/firestore';

export default class ExperienceController {
  private static collectionRef = collection(db, 'experiencia');

  static async getAll() {
    const q = query(
      ExperienceController.collectionRef,
      orderBy('anoInicio', 'desc'),
      orderBy('mesInicio', 'desc')
    );
    const fetchedExperiences = await getQuery(q);
    return fetchedExperiences as IExperience[];
  }

  static async add(experience: Omit<IExperience, 'id'>): Promise<IExperience> {
    const docRef = await addDoc(ExperienceController.collectionRef, experience);
    return { ...experience, id: docRef.id };
  }
}
