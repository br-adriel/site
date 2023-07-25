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

  static async getAll() {
    const q = query(
      this.collectionRef,
      orderBy('anoInicio', 'desc'),
      orderBy('mesInicio', 'desc')
    );
    const fetchedExperiences = await getQuery(q);
    return fetchedExperiences as IExperience[];
  }

  static async add(experience: Omit<IExperience, 'id'>): Promise<IExperience> {
    const docRef = await addDoc(this.collectionRef, experience);
    return { ...experience, id: docRef.id };
  }

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
