import React from "react"; 
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import RevenueGrowth from "../../components/Dashboard/Crm/RevenueGrowth";
import LeadConversion from "../../components/Dashboard/Crm/LeadConversion";
import TotalOrders from "../../components/Dashboard/Crm/TotalOrders"; 
import AnnualProfit from "../../components/Dashboard/Crm/AnnualProfit"; 
import LeadsTable from "../../components/CRM/LeadsTable";

const CrmLeads = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Leads</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>CRM</li>
          <li>Leads</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <RevenueGrowth />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <LeadConversion />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <TotalOrders />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <AnnualProfit />
        </Grid>
      </Grid>

      <LeadsTable />
    </>
  );
};

export default CrmLeads;
