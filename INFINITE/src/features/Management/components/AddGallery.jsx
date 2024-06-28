import React, { useState } from 'react';

const AddGallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className='bg-gray-300 min-h-screen flex flex-col'>
      <div className='flex justify-center bg-blue-300'>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className='m-4 p-2 border rounded bg-green-300'
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-5'>
        {images.map((image, index) => (
          <div key={index} className='bg-white flex flex-col items-center rounded-lg'>
            <img 
              src={image} 
              alt={`uploaded ${index}`} 
              className='w-full h-auto object-cover aspect-square rounded-lg mb-2'
            />
            <button 
              onClick={() => handleDelete(index)} 
              className='bg-red-600 text-white py-1 px-4 rounded-lg mb-2'>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddGallery;
