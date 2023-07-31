export default interface IProject {
  dataCriacao: string;
  descricao: string;
  id: string;
  imagem: string;
  nome: string;
  tecnologias: string[];
  linkRepositorio?: string;
  linkVisualizacao?: string;
}
