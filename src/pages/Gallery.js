import React from "react";
import { Link } from "react-router-dom";  
import GalleryStyle1 from "../components/Gallery/GalleryStyle1";
import GalleryStyle2 from "../components/Gallery/GalleryStyle2";
import GalleryStyle3 from "../components/Gallery/GalleryStyle3";

const Gallery = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Gallery</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Gallery</li>
        </ul>
      </div>

      <GalleryStyle1 />

      <GalleryStyle2 />

      <GalleryStyle3 />
    </>
  );
};

export default Gallery;
