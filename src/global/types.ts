export interface IEducationItem {
  id: string;
  curso: string;
  instituicao: string;
  mes_inicio: number;
  ano_inicio: number;
  mes_fim: number;
  ano_fim: number;
}

export interface ISkill {
  id: string;
  imagem: string;
  nome: string;
  descricao: string;
}

export interface IProject {
  id: string;
  nome: string;
  descricao: string;
  tecnologias: string[];
  criado_em: string;
  repositorio: string;
  visualizacao: string;
  imagem: string;
}
