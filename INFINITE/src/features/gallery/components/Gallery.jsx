import React, { useState } from 'react';

const photos = [
    'https://images.indianexpress.com/2017/08/student1.jpg?w=728',
    'https://t4.ftcdn.net/jpg/05/52/94/89/360_F_552948967_rfWkVCstu3t9ypSnpt2ZePVnuqoi6D6o.jpg',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/coaching.jpeg?size=690:388',

];

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <>
            <div className="text-center mt-5 font-bold text-4xl">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 underline decoration-wavy">
                    Photo Gallery
                </p>
            </div>
            <div className="container mx-auto px-5 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            onClick={() => openModal(photo)}
                        >
                            <img src={photo} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full" onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/800x600?text=Image+Not+Found"; }} />
                        </div>
                    ))}
                </div>

                {selectedPhoto && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                        <div className="relative">
                            <button className="absolute top-2 right-2 text-white text-2xl" onClick={closeModal}>×</button>
                            <img src={selectedPhoto} alt="Selected" className="max-w-full max-h-full object-cover" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Gallery;
