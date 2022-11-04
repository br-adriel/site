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
