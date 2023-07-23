export default interface IExperience {
  ano_inicio: number;
  cargo: string;
  empresa: string;
  id: string;
  mes_inicio: number;
  tarefas: string[];
  ano_fim?: number;
  mes_fim?: number;
}
