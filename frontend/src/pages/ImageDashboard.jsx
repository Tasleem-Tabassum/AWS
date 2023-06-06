import React, { useState, useEffect } from "react";

import axios from 'axios'

const ImageDashboard = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"))
    // console.log('***************' + user)
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/images/all');
        console.log(response.data)
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    console.log(images)

   fetchImages();
  }, []);

  return (
    <div>
      <h2>Uploaded Images</h2>
      {images.length > 0 ? (
          <div style={{ display: 'center', gap: '10px' }}>
            {images.map((image, index) => (
              <img key={index} src={image.file} alt={image.filename} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            ))}
          </div>
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default ImageDashboard;