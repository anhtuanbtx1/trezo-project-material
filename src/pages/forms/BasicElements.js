import React from "react"; 
import { Link } from "react-router-dom";   
import Grid from "@mui/material/Grid"; 
import TextualInputs from "../../components/Forms/BasicElements/TextualInputs";
import BasicForm from "../../components/Forms/BasicElements/BasicForm";

const BasicElements = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Basic Elements</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Forms</li> 
          <li>Basic Elements</li>
        </ul>
      </div>

      <TextualInputs />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <BasicForm />
        </Grid>
      </Grid>
    </>
  );
};

export default BasicElements;
