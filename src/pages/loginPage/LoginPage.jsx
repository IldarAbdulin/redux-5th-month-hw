import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [name, setName] = React.useState('');
  const navigate = useNavigate();
  const login = () => {
    setIsDisabled(true);
    setTimeout(() => {
      navigate('/', { state: name });
    }, 3000);
  };
  return (
    <>
      <input placeholder="login" onChange={(e) => setName(e.target.value)} />
      <input placeholder="password" />
      <button disabled={isDisabled} onClick={login}>
        LogIn
      </button>
    </>
  );
};
