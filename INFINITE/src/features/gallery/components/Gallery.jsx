import React, { useState } from 'react';

const photos = [
    'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    'https://source.unsplash.com/random/800x600?nature,2',
    'https://source.unsplash.com/random/800x600?nature,3',
    'https://source.unsplash.com/random/800x600?nature,4',
    'https://source.unsplash.com/random/800x600?nature,5',
    'https://source.unsplash.com/random/800x600?nature,6',
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
