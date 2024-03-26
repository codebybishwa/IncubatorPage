import React from 'react';
import PhotoGrid from './PhotoGrid';
import Lightgallery from '../Components/Lightgallery';
import data from "./GalleryPhoto.json";

const Gallery = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-center my-4">Photo Gallery</h1>
            <Lightgallery speed = {500}>
                <PhotoGrid photos = {data} />
            </Lightgallery>
        </div>
    );
}

export default Gallery;