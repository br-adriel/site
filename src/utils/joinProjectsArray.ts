import { IProject } from '../global/types';

function joinProjectsArrays(
  projectsArr: IProject[] = [],
  fetchedArr: IProject[] = []
) {
  if (!projectsArr.length) return fetchedArr;
  if (!fetchedArr.length) return projectsArr;

  // verifica se está realizando a mesma query que a anterior
  for (let i = 1; i <= 10; i++) {
    let index = projectsArr.length - i;
    if (index >= 0) {
      if (projectsArr[index].id === fetchedArr[0].id) {
        return projectsArr;
      }
    }
  }

  // verifica se já foram buscados todos os projetos
  const notRepeated = [];
  for (let i = 0; i < fetchedArr.length; i++) {
    if (projectsArr[0].id === fetchedArr[i].id) break;
    notRepeated.push(fetchedArr[i]);
  }
  return [...projectsArr, ...notRepeated];
}

export default joinProjectsArrays;
