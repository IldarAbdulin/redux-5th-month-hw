import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countMinus, countPlus, disabledState } from '../redux/actions';

export default function Counter() {
  const { number, isDisabled } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handlePlus = () => {
    dispatch(countPlus());
  };
  const handleMinus = () => {
    dispatch(countMinus());
  };
  React.useEffect(() => {
    dispatch(disabledState());
  }, [number]);
  return (
    <>
      <button onClick={handlePlus}>+</button>
      {number}
      <button disabled={isDisabled} onClick={handleMinus}>
        -
      </button>
    </>
  );
}
