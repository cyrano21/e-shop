import AdminNav from "../components/admin/AdminNav";
import React from "react";

export const metadata = {
  title: "Administrateur E-Shop",
  description: "Tableau de bord d'administration E-Shop",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
