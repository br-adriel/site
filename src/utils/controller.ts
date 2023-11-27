import {
  CollectionReference,
  Firestore,
  collection,
  doc,
} from 'firebase/firestore';

/**
 * Retorna uma referência para a coleção no banco de dados com base no idioma
 * fornecido. Se nenhum idioma for fornecido ou o idioma não for 'pt', a
 * coleção padrão será retornada.
 *
 * @param {string} collectionName - Nome da coleção no banco de dados.
 *
 * @param {Firestore} db - Instância do Firestore.
 *
 * @param {string} [locale] - Opcional. Locale do idioma dos dados. Se não
 * fornecido ou se for diferente de 'pt', a coleção será prefixada com o locale.
 *
 * @returns {CollectionReference} Uma referência para a coleção no banco de
 * dados.
 */
export const getCollectionLocaleRef = (
  collectionName: string,
  db: Firestore,
  locale?: string
): CollectionReference => {
  if (!locale || locale !== 'pt') {
    return collection(db, locale + '-' + collectionName);
  }
  return collection(db, collectionName);
};

/**
 * Retorna uma referência para o documento no banco de dados com base no ID do documento
 * e no idioma fornecidos. Se nenhum idioma for fornecido ou o idioma não for 'pt',
 * a referência padrão será retornada.
 *
 * @param {string} collectionName - Nome da coleção no banco de dados.
 *
 * @param {Firestore} db - Instância do Firestore.
 *
 * @param {string} id - O ID do documento no banco de dados.
 *
 * @param {string} [locale] - Opcional. Locale do idioma dos dados. Se não
 * fornecido ou se for diferente de 'pt', o nome da coleção será prefixado com
 * o locale.
 *
 * @returns {DocumentReference} Uma referência para o documento no banco de
 * dados.
 */
export const getDocLocaleRef = (
  collectionName: string,
  db: Firestore,
  id: string,
  locale?: string
) => {
  if (!locale || locale !== 'pt') {
    return doc(db, `${locale}${collectionName}`, id);
  }
  return doc(db, collectionName, id);
};
