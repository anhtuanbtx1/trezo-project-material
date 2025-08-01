import React from "react"; 
import { Link } from "react-router-dom";
import ConnectWallet from "../../components/NFT/ConnectWallet";

const WalletConnect = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Wallet Connect</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Wallet Connect</li>
        </ul>
      </div>

      <ConnectWallet />
    </>
  );
};

export default WalletConnect;
