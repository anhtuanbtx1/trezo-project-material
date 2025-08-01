import React from "react"; 
import { Link } from "react-router-dom"; 
import ContactsTable from "../../components/Apps/ContactsTable";

const Contacts = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Contacts</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Apps</li>
          <li>Contacts</li>
        </ul>
      </div>

      <ContactsTable />
    </>
  );
};

export default Contacts;
