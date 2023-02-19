import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const PhotosPage = () => {
  const [photos, setPhotos] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const getPhotos = async () => {
    try {
      setLoader(true);
      await axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(({ data }) => setPhotos(data));
    } catch (error) {
      setError(error);
      setPhotos([]);
    } finally {
      setLoader(false);
    }
  };
  React.useEffect(() => {
    getPhotos();
  }, []);
  return (
    <>
      <h1>Photos Page</h1>
      {error ? (
        <h1></h1>
      ) : loader ? (
        <h1>Loading...</h1>
      ) : (
        photos.map((photo) => (
          <div key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <img src={photo.url} alt="image" />
            </Link>
            <p>{photo.title}</p>
          </div>
        ))
      )}
    </>
  );
};
