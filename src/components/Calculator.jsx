import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  additionAnswer,
  subtractionAnswer,
  multiplicationAnswer,
  divisionAnswer,
} from '../redux/slices/calculator-slice';

export const Calculator = () => {
  const { answer } = useSelector(({ calculator }) => calculator);
  const dispatch = useDispatch();
  const [firstValue, setFirstValue] = React.useState('');
  const [secondValue, setSecondValue] = React.useState('');

  const changeFirstValue = (e) => {
    setFirstValue(e.target.value);
  };

  const changeSecondValue = (e) => {
    setSecondValue(e.target.value);
  };

  const additionAnswerFn = () => {
    if (firstValue === '' || secondValue === '') {
      return alert('Заполните все поля');
    }
    return dispatch(additionAnswer(+firstValue + +secondValue));
  };

  const subtractionAnswerFn = () => {
    if (firstValue === '' || secondValue === '') {
      return alert('Заполните все поля');
    }
    return dispatch(subtractionAnswer(+firstValue - +secondValue));
  };
  const multiplicationAnswerFn = () => {
    if (firstValue === '' || secondValue === '') {
      return alert('Заполните все поля');
    }
    return dispatch(multiplicationAnswer(+firstValue * +secondValue));
  };
  const divisionAnswerFn = () => {
    if (firstValue === '' || secondValue === '') {
      return alert('Заполните все поля');
    }
    return dispatch(divisionAnswer(+firstValue / +secondValue));
  };
  return (
    <>
      <div>
        <input type="number" value={firstValue} onChange={changeFirstValue} />
        <input type="number" value={secondValue} onChange={changeSecondValue} />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={additionAnswerFn}>+</button>
        <button onClick={subtractionAnswerFn}>-</button>
        <button onClick={multiplicationAnswerFn}>*</button>
        <button onClick={divisionAnswerFn}>/</button>
      </div>
      <div>
        <h1>Answer:</h1>
        <h3>{answer}</h3>
      </div>
    </>
  );
};
