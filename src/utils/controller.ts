import { availableLocales, defaultLocale } from '@/middleware';
import {
  CollectionReference,
  Firestore,
  collection,
  doc,
} from 'firebase/firestore';

/**
 * Retorna uma referência de coleção da Firestore com base no nome da coleção e
 * locale.
 *
 * @param {string} collectionName - Nome da coleção.
 * @param {Firestore} db - Instância da Firestore.
 * @param {string} [locale] - Opcional. Se válido, a refernência a coleção
 * específica do idioma é retornada
 *
 * @returns {CollectionReference}
 */
export const getCollectionLocaleRef = (
  collectionName: string,
  db: Firestore,
  locale?: string
): CollectionReference => {
  if (locale && locale === 'pt') return collection(db, collectionName);
  if (locale && availableLocales.includes(locale)) {
    return collection(db, locale + '-' + collectionName);
  }
  return collection(db, defaultLocale + '-' + collectionName);
};

/**
 * Obtém uma referência de documento Firestore com base no nome da coleção,
 * instância do Firestore, ID do documento e, opcionalmente, no locale.
 *
 * @param {string} collectionName - O nome da coleção.
 * @param {Firestore} db - A instância do Firestore.
 * @param {string} id - O ID do documento.
 * @param {string} [locale] - Opcional. O código de localidade. Se fornecido e
 * válido, o documento com a localidade especificada será retornado.
 *
 * @returns {DocumentReference} A referência de documento Firestore.
 */
export const getDocLocaleRef = (
  collectionName: string,
  db: Firestore,
  id: string,
  locale?: string
) => {
  if (locale && locale === 'pt') return doc(db, collectionName);
  if (locale && availableLocales.includes(locale)) {
    return doc(db, locale + '-' + collectionName, id);
  }
  return doc(db, defaultLocale + '-' + collectionName, id);
};
