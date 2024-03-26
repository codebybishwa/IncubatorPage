import React from 'react';
import PhotoItem from './PhotoItem';

function PhotoGrid({ photos }) {
    return (
        <div className="flex flex-wrap justify-center">
            {photos.map(photo => (
                <div key={photo.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <PhotoItem photo={photo} />
                </div>
            ))}
        </div>
    );
}

export default PhotoGrid;
