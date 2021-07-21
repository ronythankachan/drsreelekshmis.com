import React, { useState } from "react";
import "./AdminPage.css";
import SidePanelContainer from "../components/SidePanelContainer";
import ManageProductsPage from "./ManageProductsPage";
import ManageOrdersPage from "./ManageOrdersPage";
import ManageAppointmentsPage from "./ManageAppointmentsPage";
import AdminSettingsPage from "./AdminSettingsPage";

const AdminPage = () => {
  const [navPath, setNavPath] = useState("manage_appointments");
  return (
    <div className="adminpage">
      <SidePanelContainer>
        <div className="sidepanel__items">
          <button onClick={() => setNavPath("manage_appointments")}>
            Manage Appointments
          </button>
          <button onClick={() => setNavPath("manage_products")}>
            Manage Products
          </button>
          <button onClick={() => setNavPath("manage_orders")}>
            Manage Orders
          </button>
          <button onClick={() => setNavPath("admin_settings")}>
            Admin Settings
          </button>
        </div>
      </SidePanelContainer>
      <PageContent navPath={navPath} />
    </div>
  );
};

export default AdminPage;

const PageContent = ({ navPath }) => {
  switch (navPath) {
    case "manage_appointments":
      return <ManageAppointmentsPage />;
    case "manage_products":
      return <ManageProductsPage />;
    case "manage_orders":
      return <ManageOrdersPage />;
    case "admin_settings":
      return <AdminSettingsPage />;
    default:
      return null;
  }
};
