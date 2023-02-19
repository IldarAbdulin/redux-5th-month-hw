import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <button onClick={goBack}>Back</button>
      <h1>Page not found</h1>
    </>
  );
};
