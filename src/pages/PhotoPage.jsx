import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPhotoById } from '../redux/slices/photos-slice';

export const PhotoPage = () => {
  const { photoItem, isLoading, error } = useSelector(({ photos }) => photos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(fetchPhotoById(id));
  }, []);

  const goHomePage = () => navigate('/');
  return (
    <div>
      <button onClick={goHomePage}>Go Home</button>
      {error ? (
        <p>{error.message}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={photoItem.url} alt="image" />
          <p style={{ textDecoration: 'none' }}>{photoItem.title}</p>
        </div>
      )}
    </div>
  );
};
