import React from 'react';

function PhotoItem({ photo }) {
    return (
        <div className="border border-gray-300 p-4 m-2 block transition-transform duration-300 ease-in-out transform hover:scale-105">
                <img src={photo.imgUrl} className="w-full" />
        </div>
    );
}

export default PhotoItem;
