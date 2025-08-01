import React from "react"; 
import { Link } from "react-router-dom";     
import NftDetailsContent from "../../components/NFT/NftDetailsContent";

const NftDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Nft Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Nft Details</li>
        </ul>
      </div>

      <NftDetailsContent />
    </>
  );
};

export default NftDetails;
