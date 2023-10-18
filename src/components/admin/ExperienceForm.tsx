'use client';

import IExperience from '@/interfaces/IExperience';
import { AppDispatch } from '@/store';
import {
  addExperienceToFirestore,
  addTarefa,
  removeTarefa,
  selectExperiencesFormStatus,
  selectExperiencesFormValues,
  setAnoFim,
  setAnoInicio,
  setCargo,
  setEmpresa,
  setMesFim,
  setMesInicio,
  switchToCreateMode,
  updateExperience,
} from '@/store/experiencesSlice';
import { monthSelectOptionsPtBr } from '@/utils/date';
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import LoadingSpinner from '../LoadingSpinner';
import Select from '../Select';
import ListInput from './ListInput';

export default function ExperienceForm() {
  const dispatch = useDispatch<AppDispatch>();
  const formStatus = useSelector(selectExperiencesFormStatus);
  const formValues = useSelector(selectExperiencesFormValues);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const experienciaValues: Omit<IExperience, 'id'> = {
      anoInicio: formValues.anoInicio,
      cargo: formValues.cargo,
      empresa: formValues.empresa,
      mesInicio: formValues.mesInicio,
      tarefas: formValues.tarefas,
    };
    if (formValues.anoFim) {
      experienciaValues.anoFim = formValues.anoFim;
      experienciaValues.mesFim = formValues.mesFim;
    }

    if (formValues.id) {
      dispatch(updateExperience({ ...experienciaValues, id: formValues.id }));
    } else {
      dispatch(addExperienceToFirestore(experienciaValues));
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
        <label htmlFor='cargo' className='mb-1'>
          Cargo
        </label>
        <Input
          id='cargo'
          required
          value={formValues.cargo}
          onChange={(e) => dispatch(setCargo(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='empresa' className='mb-1'>
          Empresa
        </label>
        <Input
          id='empresa'
          required
          value={formValues.empresa}
          onChange={(e) => dispatch(setEmpresa(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='tarefas' className='mb-1'>
          Tarefas
        </label>
        <ListInput
          value={formValues.tarefas}
          onAdd={(value: string) => dispatch(addTarefa(value))}
          onRemove={(value: string) => {
            dispatch(removeTarefa(value));
          }}
          id='tarefas'
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='mesInicio' className='mb-1'>
          Mês de início
        </label>
        <Select
          id='mesInicio'
          required
          value={formValues.mesInicio}
          onChange={(e) => dispatch(setMesInicio(Number(e.target.value)))}
        >
          {monthSelectOptionsPtBr.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </Select>
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='anoInicio' className='mb-1'>
          Ano de início
        </label>
        <Input
          required
          type='number'
          id='anoInicio'
          min={2001}
          max={2200}
          value={formValues.anoInicio}
          onChange={(e) => dispatch(setAnoInicio(Number(e.target.value)))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='mesFim' className='mb-1'>
          Mês de término
        </label>
        <Select
          id='mesFim'
          value={formValues.mesFim || ''}
          onChange={(e) => dispatch(setMesFim(Number(e.target.value)))}
        >
          {monthSelectOptionsPtBr.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </Select>
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='anoFim' className='mb-1'>
          Ano de término
        </label>
        <Input
          type='number'
          id='anoFim'
          min={2001}
          max={2200}
          value={formValues.anoFim || ''}
          onChange={(e) => dispatch(setAnoFim(Number(e.target.value)))}
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
