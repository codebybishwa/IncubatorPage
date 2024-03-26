// Lightgallery.jsx
import React, { useEffect, useRef } from "react";
import "lightgallery/css/lightgallery-bundle.min.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-pager.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-video.css";

import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";
import lgPager from "lightgallery/plugins/pager";
import lgRotate from "lightgallery/plugins/rotate";
import lgVideo from "lightgallery/plugins/video";


function Lightgallery({ children }) {
    const lightGalleryRef = useRef();

    useEffect(() => {
        lightGallery(lightGalleryRef.current, {
            plugins: [lgThumbnail, lgZoom, lgAutoplay, lgShare, lgPager, lgRotate, lgVideo],
        });
    }, []);

    return <div ref={lightGalleryRef}>{children}</div>;
}
export default Lightgallery;