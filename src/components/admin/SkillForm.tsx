import { AppDispatch } from '@/store';
import {
  addSkillToFirestore,
  selectSkillFormStatus,
  selectSkillFormValues,
  setDescricao,
  setFiltro,
  setImagem,
  setNome,
  setOrdem,
  setTemProjetos,
  switchToCreateMode,
  updateSkill,
} from '@/store/skillsSlice';
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import LoadingSpinner from '../LoadingSpinner';
import Textarea from '../Textarea';
import Switch from '../Switch';

export default function SkillForm() {
  const dispatch = useDispatch<AppDispatch>();
  const formStatus = useSelector(selectSkillFormStatus);
  const formValues = useSelector(selectSkillFormValues);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.id) dispatch(updateSkill(formValues));
    else dispatch(addSkillToFirestore(formValues));
  };

  if (formStatus === 'loading') {
    return (
      <div className='w-full flex items-center justify-center p-3'>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <form className='w-full' onSubmit={formSubmit}>
      <h4 className='font-semibold text-lg'>
        Modo {formValues.id ? 'edição' : 'criação'}
      </h4>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='nome' className='mb-1'>
          Nome
        </label>
        <Input
          id='nome'
          required
          value={formValues.nome}
          onChange={(e) => dispatch(setNome(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='descricao' className='mb-1'>
          Descrição
        </label>
        <Textarea
          id='descricao'
          value={formValues.descricao}
          onChange={(e) => dispatch(setDescricao(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='filtro' className='mb-1'>
          Filtro
        </label>
        <Input
          id='filtro'
          required
          value={formValues.filtro}
          onChange={(e) => dispatch(setFiltro(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='imagem' className='mb-1'>
          Imagem
        </label>
        <Input
          type='url'
          id='imagem'
          required
          value={formValues.imagem}
          onChange={(e) => dispatch(setImagem(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='ordem' className='mb-1'>
          Ordem
        </label>
        <Input
          type='number'
          id='ordem'
          min={0}
          required
          value={formValues.ordem}
          onChange={(e) => dispatch(setOrdem(Number(e.target.value)))}
        />
      </div>
      <div className='mb-3 flex items-center gap-2'>
        <Switch
          value={formValues.temProjetos}
          id='tem-projetos'
          onChange={(value) => dispatch(setTemProjetos(value))}
        />
        <label htmlFor='tem-projetos'>Possui projetos</label>
      </div>
      <div className='flex gap-2'>
        <Button type='submit'>Salvar</Button>
        {formValues.id && (
          <Button type='button' onClick={() => dispatch(switchToCreateMode())}>
            Mudar modo
          </Button>
        )}
      </div>
    </form>
  );
}
