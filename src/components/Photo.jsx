import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Photo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [photo, setPhoto] = React.useState({});
  const [loader, setLoader] = React.useState(false);
  const [error, setError] = React.useState(null);
  const getPhoto = async () => {
    try {
      setLoader(true);
      await axios
        .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(({ data }) => setPhoto(data));
    } catch (error) {
      setError(error);
      setPhoto({});
    } finally {
      setLoader(false);
    }
  };
  React.useEffect(() => {
    getPhoto();
  }, []);
  return (
    <>
      <button onClick={goBack}>Go Back</button>
      {error ? (
        <h1>{error.response.status}</h1>
      ) : loader ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ margin: '20px 0' }}>
          <img src={photo.url} alt={photo.title} />
        </div>
      )}
    </>
  );
};
