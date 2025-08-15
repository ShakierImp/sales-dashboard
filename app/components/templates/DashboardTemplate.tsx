import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Sales Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardTemplate;
