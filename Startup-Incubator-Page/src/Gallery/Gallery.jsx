// Gallery.js
import React, { useState } from "react";
import PhotoItem from "./PhotoItem"; // Import PhotoItem component
import photos from "./GalleryPhoto.json";
import "./Gallery.css";

const Gallery = () => {
    const [photo, setPhoto] = useState(null);
    return (
        <div className="container mx-auto">
            <h1 className="text-6xl font-medium text-orange-600 text-center my-10">Gallery of VOH Incubator</h1>
            <div className="flex flex-wrap justify-center">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
                        onClick={() => setPhoto(photo)}
                    >
                        <PhotoItem photo={photo} />
                    </div>
                ))}
            </div>

            <div className="popup-media" style={{display: photo ? 'block' : 'none'}}>
                <span onClick={() => setPhoto(null)}>&times;</span>
                <div>
                    <img src={photo?.imgUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
