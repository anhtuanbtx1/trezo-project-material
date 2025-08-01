import React from "react"; 
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ToDo from "../../components/ProjectManagement/KanbanBoard/ToDo";
import Doing from "../../components/ProjectManagement/KanbanBoard/Doing";
import Done from "../../components/ProjectManagement/KanbanBoard/Done";

const PmKanbanBoard = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Kanban Board</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Project Management</li>
          <li>Kanban Board</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <ToDo />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <Doing />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <Done />
        </Grid>
      </Grid>
    </>
  );
};

export default PmKanbanBoard;
