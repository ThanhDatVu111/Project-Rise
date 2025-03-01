"use client";
import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";

{
  /*This file wraps the entire route and contains UI elements that remain the same across different pages in that route (e.g., navbar, sidebar, footer).*/
}
function DashboardLayout({ children }) {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
