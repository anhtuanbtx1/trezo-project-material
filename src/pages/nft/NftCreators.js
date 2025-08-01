import React from "react"; 
import { Link } from "react-router-dom";      
import Creators from "../../components/NFT/Creators";


const NftCreators = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Creators</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Creators</li>
        </ul>
      </div>

      <Creators />
    </>
  );
};

export default NftCreators;
