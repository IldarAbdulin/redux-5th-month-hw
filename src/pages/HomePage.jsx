import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllPhotos } from '../redux/slices/photos-slice';

export const HomePage = () => {
  const { photosItems, isLoading, error } = useSelector(({ photos }) => photos);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAllPhotos());
  }, []);
  return (
    <>
      <h1>Photos</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error.message}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        photosItems.map((photo) => (
          <Link to={`/${photo.id}`} key={photo.id}>
            <div>
              <p>{photo.title}</p>
            </div>
          </Link>
        ))
      )}
    </>
  );
};
