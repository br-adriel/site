import IEducation from '@/interfaces/IEducation';
import { AppDispatch } from '@/store';
import {
  addEducationToFirestore,
  selectEducationFormStatus,
  selectEducationFormValues,
  setAnoFim,
  setAnoInicio,
  setCurso,
  setInstituicao,
  setMesFim,
  setMesInicio,
  switchToCreateMode,
  updateEducation,
} from '@/store/educationSlice';
import { monthSelectOptionsPtBr } from '@/utils/date';
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import LoadingSpinner from '../LoadingSpinner';
import Select from '../Select';

export default function EducationForm() {
  const dispatch = useDispatch<AppDispatch>();
  const formStatus = useSelector(selectEducationFormStatus);
  const formValues = useSelector(selectEducationFormValues);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const educacaoValues: Omit<IEducation, 'id'> = {
      anoInicio: formValues.anoInicio,
      curso: formValues.curso,
      instituicao: formValues.instituicao,
      mesInicio: formValues.mesInicio,
    };
    if (formValues.anoFim) {
      educacaoValues.anoFim = formValues.anoFim;
      educacaoValues.mesFim = formValues.mesFim;
    }

    if (formValues.id) {
      dispatch(updateEducation({ ...educacaoValues, id: formValues.id }));
    } else {
      dispatch(addEducationToFirestore(educacaoValues));
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
        <label htmlFor='curso' className='mb-1'>
          Curso
        </label>
        <Input
          id='curso'
          required
          value={formValues.curso}
          onChange={(e) => dispatch(setCurso(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='instituicao' className='mb-1'>
          Instituição
        </label>
        <Input
          id='instituicao'
          required
          value={formValues.instituicao}
          onChange={(e) => dispatch(setInstituicao(e.target.value))}
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
