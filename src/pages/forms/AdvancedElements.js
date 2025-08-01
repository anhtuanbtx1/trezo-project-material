import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Select from "../../components/Forms/AdvancedForms/Select";
import Picker from "../../components/Forms/AdvancedForms/Picker";
import AdvancedForm from "../../components/Forms/AdvancedForms/AdvancedForm";

const AdvancedElements = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Advanced Elements</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Forms</li>
          <li>Advanced Elements</li>
        </ul>
      </div>

      <Select />

      <Picker />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <AdvancedForm />
        </Grid>
      </Grid>
    </>
  );
};

export default AdvancedElements;
