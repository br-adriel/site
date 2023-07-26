export default interface IProject {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  dataCriacao: Date;
  linkVisualizacao: string;
  linkRepositorio: string;
  tecnologias: string[];
}
