import React from "react"; 
import { Link } from "react-router-dom"; 
import Grid from "@mui/material/Grid";
import Sidebar from "../../../../components/Apps/FileManager/Sidebar"; 
import ImportantContent from "../../../../components/Apps/FileManager/ImportantContent"; 

const Important = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>File Manager</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Apps</li>
          <li>File Manager</li>
          <li>Important</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }}>
          <Sidebar />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 9 }}>
          <ImportantContent />
        </Grid>
      </Grid>
    </>
  );
};

export default Important;
