import React from "react"; 
import { Link } from "react-router-dom";         
import Grid from "@mui/material/Grid";
import SellerOverview from "../../../../components/eCommerce/SellerDetails/SellerOverview";
import Seller from "../../../../components/eCommerce/SellerDetails/Seller";
import Revenue from "../../../../components/eCommerce/SellerDetails/Revenue"; 
import ProductsList from "../../../ecommerce/ProductsList";

const SellersDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Sellers</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Sellers</li>
          <li>Seller Details</li>
        </ul>
      </div> 

      <SellerOverview />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <Seller />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <Revenue />
        </Grid>
      </Grid>

      <ProductsList />
    </>
  );
};

export default SellersDetails;
