import { useDispatch, useSelector } from 'react-redux';
import { addNumber, changeNumber, clearState } from '../redux/actions';

export const Number = () => {
  const { count, numberValue } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChangeNumber = (e) => {
    dispatch(changeNumber(e.target.value));
  };
  const handleClear = () => {
    dispatch(clearState());
  };
  const onAddNumber = () => {
    dispatch(addNumber(numberValue));
  };
  return (
    <>
      <input
        type="number"
        value={numberValue}
        placeholder={`выберите номер`}
        onChange={handleChangeNumber}
      />
      <button onClick={handleClear}>Clear</button>
      <button onClick={onAddNumber}>Add</button>
      <br />
      <br />
      {count === null ? <p>Вы пока не выбрали номер</p> : count}
    </>
  );
};
