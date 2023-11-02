'use client';

import IProject from '@/interfaces/IProject';
import { AppDispatch } from '@/store';
import {
  addProjectToFirestore,
  addTecnologia,
  removeTecnologia,
  selectProjectsFormStatus,
  selectProjectsFormValues,
  setDataCriacao,
  setDescricao,
  setLinkRepositorio,
  setLinkVisualizacao,
  setNome,
  switchToCreateMode,
  updateProject,
} from '@/store/projectsSlice';
import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import FileInput from '../FileInput';
import Input from '../Input';
import LoadingSpinner from '../LoadingSpinner';
import Textarea from '../Textarea';
import ListInput from './ListInput';

export default function ProjectForm() {
  const dispatch = useDispatch<AppDispatch>();
  const formStatus = useSelector(selectProjectsFormStatus);
  const formValues = useSelector(selectProjectsFormValues);

  const [imgValue, setImgValue] = useState<File>();

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const projectValues: Omit<Omit<IProject, 'id'>, 'imagem'> = {
      dataCriacao: formValues.dataCriacao,
      descricao: formValues.descricao,
      nome: formValues.nome,
      tecnologias: formValues.tecnologias,
    };
    if (formValues.linkRepositorio) {
      projectValues.linkRepositorio = formValues.linkRepositorio;
    }
    if (formValues.linkVisualizacao) {
      projectValues.linkVisualizacao = formValues.linkVisualizacao;
    }

    if (formValues.id) {
      dispatch(updateProject({ project: { ...formValues }, image: imgValue }));
    } else {
      if (imgValue) {
        dispatch(
          addProjectToFirestore({ project: projectValues, image: imgValue })
        );
      }
    }
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
          required
          value={formValues.descricao}
          onChange={(e) => dispatch(setDescricao(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='imagem' className='mb-1'>
          Imagem
        </label>
        <FileInput
          id='imagem'
          accept='image/png, image/jpeg'
          required={!formValues.id}
          onChange={(e) => {
            if (e.target.files) setImgValue(e.target.files[0]);
          }}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='criacao' className='mb-1'>
          Data de criação
        </label>
        <Input
          id='criacao'
          type='date'
          required
          value={formValues.dataCriacao}
          onChange={(e) => {
            dispatch(setDataCriacao(e.target.value));
          }}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='repositorio' className='mb-1'>
          Link do repositório
        </label>
        <Input
          id='repositorio'
          type='url'
          value={formValues.linkRepositorio || ''}
          onChange={(e) => dispatch(setLinkRepositorio(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='visualizacao' className='mb-1'>
          Link de visualização
        </label>
        <Input
          id='visualizacao'
          type='url'
          value={formValues.linkVisualizacao || ''}
          onChange={(e) => dispatch(setLinkVisualizacao(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='tecnologias' className='mb-1'>
          Tecnologias
        </label>
        <ListInput
          value={formValues.tecnologias}
          onAdd={(value: string) => dispatch(addTecnologia(value))}
          onRemove={(value: string) => {
            dispatch(removeTecnologia(value));
          }}
          id='tecnologias'
        />
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
