import React from "react"; 
import { Link } from "react-router-dom"; 
import CreateNftForm from "../../components/NFT/CreateNftForm";

const CreateNft = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Create</li>
        </ul>
      </div>

      <CreateNftForm />
    </>
  );
};

export default CreateNft;
