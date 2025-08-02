/**
 * Image System Demo Page
 * 
 * A demonstration page showcasing the centralized image management system.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';

// Import the examples we created
import ImageExamples from '../assets/images/examples/ImageExamples';
import MigratedComponent from '../assets/images/examples/MigratedComponent';

const ImageSystemDemo = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Image Management System Demo</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Demo</li>
          <li>Image System</li>
        </ul>
      </div>

      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          🎨 Centralized Image Management System
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          Welcome to the demo of our new centralized image management system! 
          This system provides a single source of truth for all images, better organization, 
          type safety, and performance optimizations.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Image Examples Component */}
            <ImageExamples />
          </Grid>
          
          <Grid item xs={12}>
            {/* Migration Examples Component */}
            <MigratedComponent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ImageSystemDemo;
