import React from 'react';

export const PortfolioPage = () => {
  const [photos, setPhotos] = React.useState([]);
  const [showUrl, setShowUrl] = React.useState('');
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <>
      <h1>PortfolioPage</h1>
      <div style={{ display: 'flex' }}>
        <div>
          {!photos.length ? (
            <h1>Loading...</h1>
          ) : (
            photos.slice(0, 10).map((photo) => (
              <div>
                <img src={photo.url} alt="" />
                <p>{photo.title}</p>
                <button onClick={() => setShowUrl(photo.url)}>
                  узнать url
                </button>
                <p>------------------------------------------</p>
              </div>
            ))
          )}
        </div>

        <h2>Url картинки: {showUrl && <a href={showUrl}>{showUrl}</a>}</h2>
      </div>
    </>
  );
};
