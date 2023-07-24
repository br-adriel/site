import IEducation from '@/interfaces/IEducation';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { addDoc, collection, orderBy, query } from '@firebase/firestore';

export default class EducationController {
  private static collectionRef = collection(db, 'educacao');

  static async getAll() {
    const q = query(
      EducationController.collectionRef,
      orderBy('anoInicio', 'desc'),
      orderBy('mesInicio', 'desc')
    );
    const fetchedEducation = await getQuery(q);
    return fetchedEducation as IEducation[];
  }

  static async add(education: Omit<IEducation, 'id'>): Promise<IEducation> {
    const docRef = await addDoc(EducationController.collectionRef, education);
    return { ...education, id: docRef.id };
  }
}
