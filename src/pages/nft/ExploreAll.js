import React from "react"; 
import { Link } from "react-router-dom";    
import ExploreAllNft from "../../components/NFT/ExploreAllNft";

const ExploreAll = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Explore All</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Explore All</li>
        </ul>
      </div>

      <ExploreAllNft />
    </>
  );
};

export default ExploreAll;
