import React from "react"; 
import { Link } from "react-router-dom";   
import ManageYourNFT from "../../components/NFT/Marketplace/ManageYourNFT";
import FeaturedNFTArtworks from "../../components/NFT/Marketplace/FeaturedNFTArtworks";
import TopCreators from "../../components/NFT/Marketplace/TopCreators";

const Marketplace = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Marketplace</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Marketplace</li>
        </ul>
      </div>

      <ManageYourNFT />

      <FeaturedNFTArtworks />

      <TopCreators />
    </>
  );
};

export default Marketplace;
