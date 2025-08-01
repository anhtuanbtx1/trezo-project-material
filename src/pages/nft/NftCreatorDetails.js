import React from "react"; 
import { Link } from "react-router-dom";       
import DetailsContent from "../../components/NFT/Creators/DetailsContent";

const NftCreatorDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Creator Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Creator Details</li>
        </ul>
      </div>

      <DetailsContent />
    </>
  );
};

export default NftCreatorDetails;
