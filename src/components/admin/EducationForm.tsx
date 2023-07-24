import IEducation from '@/interfaces/IEducation';
import { AppDispatch } from '@/store';
import {
  addEducationToFirestore,
  selectEducationFormStatus,
} from '@/store/educationSlice';
import { monthSelectOptionsPtBr } from '@/utils/date';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import LoadingSpinner from '../LoadingSpinner';
import Select from '../Select';

export default function EducationForm() {
  const dispatch = useDispatch<AppDispatch>();
  const formStatus = useSelector(selectEducationFormStatus);

  const [curso, setCurso] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [mesInicio, setMesInicio] = useState(1);
  const [anoInicio, setAnoInicio] = useState(2021);
  const [mesFim, setMesFim] = useState<number>();
  const [anoFim, setAnoFim] = useState<number>();
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const educacaoParaCriar: Omit<IEducation, 'id'> = {
      anoInicio,
      curso,
      instituicao,
      mesInicio,
    };
    if (anoFim) {
      educacaoParaCriar.anoFim = anoFim;
      educacaoParaCriar.mesFim = mesFim;
    }

    dispatch(addEducationToFirestore(educacaoParaCriar));
  };

  useEffect(() => {
    if (formStatus === 'succeeded') {
      setAnoFim(undefined);
      setAnoInicio(2021);
      setCurso('');
      setInstituicao('');
      setMesFim(undefined);
      setMesInicio(1);
    }
  }, [dispatch, formStatus]);

  if (formStatus === 'loading') {
    return (
      <div className='w-full flex items-center justify-center p-3'>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <form className='w-full' onSubmit={formSubmit}>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='curso' className='mb-1'>
          Curso
        </label>
        <Input
          id='curso'
          required
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='instituicao' className='mb-1'>
          Instituição
        </label>
        <Input
          id='instituicao'
          required
          value={instituicao}
          onChange={(e) => setInstituicao(e.target.value)}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='mesInicio' className='mb-1'>
          Mês de início
        </label>
        <Select
          id='mesInicio'
          required
          value={mesInicio}
          onChange={(e) => setMesInicio(Number(e.target.value))}
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
          value={anoInicio}
          onChange={(e) => setAnoInicio(Number(e.target.value))}
        />
      </div>
      <div className='mb-3 flex flex-col'>
        <label htmlFor='mesFim' className='mb-1'>
          Mês de término
        </label>
        <Select
          id='mesFim'
          value={mesFim || ''}
          onChange={(e) => setMesFim(Number(e.target.value))}
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
          value={anoFim || ''}
          onChange={(e) => setAnoFim(Number(e.target.value))}
        />
      </div>
      <Button type='submit'>Salvar</Button>
    </form>
  );
}
