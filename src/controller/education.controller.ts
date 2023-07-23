import IEducation from '@/interfaces/IEducation';
import { db } from '@/services/firebase/firebase.config';
import { getQuery } from '@/services/firebase/utils';
import { collection, orderBy, query } from '@firebase/firestore';

export default class EducationController {
  static async getAll() {
    const educationCollectionRef = collection(db, 'educacao');
    const q = query(
      educationCollectionRef,
      orderBy('anoInicio', 'desc'),
      orderBy('mesInicio', 'desc')
    );
    const fetchedEducation = await getQuery(q);
    return fetchedEducation as IEducation[];
  }
}
