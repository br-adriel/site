import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { PlusLg, XLg } from 'react-bootstrap-icons';

interface IProps {
  value: string[];
  id?: string;
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
}

export default function ListInput({ onAdd, onRemove, value, id }: IProps) {
  const [inputValue, setInputValue] = useState('');

  const addValue = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-wrap gap-2'>
        {value.length ? (
          value.map((item) => {
            return (
              <div
                className='flex gap-1 p-1 rounded bg-site_bg flex-grow items-center'
                key={item}
              >
                <span className='font-light text-center flex-grow'>{item}</span>
                <button
                  onClick={() => onRemove(item)}
                  type='button'
                  className='focus-visible:outline focus:outline-blue-500 focus:outline-2 focus:outline-offset-2 rounded hover:scale-95 hover:opacity-90 transition-all'
                >
                  <XLg />
                </button>
              </div>
            );
          })
        ) : (
          <span className='p-1 rounded bg-site_bg flex-grow font-light'>
            Lista vazia
          </span>
        )}
      </div>
      <div className='flex gap-2'>
        <Input
          id={id}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='flex-grow'
        />
        <Button onClick={addValue} type='button'>
          <PlusLg />
        </Button>
      </div>
    </div>
  );
}
ListInput;
