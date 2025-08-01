import React from "react";
import { Link } from "react-router-dom";  
import Grid from "@mui/material/Grid";
import SimpleFileUploader from "../../components/Forms/FileUploader/SimpleFileUploader";
import MultipleFileUploader from "../../components/Forms/FileUploader/MultipleFileUploader";

const FileUploader = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>File Uploader</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Forms</li>
          <li>File Uploader</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <SimpleFileUploader />
        </Grid>
        
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <MultipleFileUploader />
        </Grid>
      </Grid>
    </>
  );
};

export default FileUploader;
