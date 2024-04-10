import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGalleryPhotos = async () => {
            try {
                const response = await fetch('https://api.nextedge.health/api/v1/incubator/gallery');
                if (!response.ok) {
                    throw new Error('Failed to fetch gallery photos');
                }
                const responseData = await response.json();

                if (!responseData || !Array.isArray(responseData.data)) {
                    throw new Error('Invalid data format received from the server');
                }

                setPhotos(responseData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching gallery photos:', error);
                setError('Failed to fetch gallery photos. Please try again.');
                setLoading(false);
            }
        };

        fetchGalleryPhotos();
    }, []);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleClosePopup = () => {
        setSelectedPhoto(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-medium text-[#DFA440] text-center my-10">
                Gallery of VOH Incubator
            </h1>
            <div className="flex flex-wrap justify-center -mx-4">
                {photos.map((photo) => (
                    <div
                        key={photo._id}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
                        onClick={() => handlePhotoClick(photo)}
                    >
                        <div className="border border-gray-300 hover:border-gray-500 p-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <img
                                src={photo.link}
                                className="w-full h-80 object-contain cursor-pointer"
                                alt={`Photo ${photo._id}`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div
                    className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-70"
                    onClick={handleClosePopup}
                >
                    <div className="max-w-screen-lg w-full h-full relative">
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedPhoto.link}
                            alt={`Photo ${selectedPhoto._id}`}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;