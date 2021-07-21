import React, { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import AdminControls from "../components/AdminControls";
const initialFilters = {
  date: "",
  service: "",
  doctor: "",
  appointmentType: "",
};
const ManageAppointmentsPage = () => {
  const [filters, setFilters] = useState(initialFilters);
  return (
    <div>
      <AdminControls setFilters={setFilters} />
      <AppointmentList filters={filters} />
    </div>
  );
};

export default ManageAppointmentsPage;
