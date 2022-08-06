import React, { useState } from 'react';
import Images from './assets/images';
import './styles/imageGallery.css';

function App() {
  const [selectImage, setSelectedImage] = useState(Images[0]);

  return (
    <div className="App">
      <h1>Selected Image</h1>
      <div className="container">
        <img src={selectImage} alt="selected" className="selected" />
      </div>
      <h1>Image Gallery</h1>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="image"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
