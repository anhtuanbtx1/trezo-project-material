import React from "react";
import { Link } from "react-router-dom"; 
import GainersLosersTable from "../../../components/CryptoTrader/GainersLosersTable";

const GainersLosers = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Gainers & Losers</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Crypto Trader</li>
          <li>Gainers & Losers</li>
        </ul>
      </div>

      <GainersLosersTable />
    </>
  );
};

export default GainersLosers;
