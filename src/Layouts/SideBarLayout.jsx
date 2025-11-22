import { useState } from "react";
import "./SideBarLayout.css";        
import { Outlet } from "react-router-dom";
import { Menu, X, Home, FileText, Search, Clock, Mic, BarChart, Upload } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function SidebarLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div className="sidebar-layout">
      
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <nav>
          <SidebarItem icon={<Home />} label="Dashboard" open={open} to="/dashboard" />
          <SidebarItem icon={<FileText />} label="Judgement Summarizer" open={open} to="/summarizer" />
          <SidebarItem icon={<Upload />} label="Next Step Prediction" open={open} to="/upload" />
          <SidebarItem icon={<Search />} label="Similar Case Finder" open={open} to="/similar" />
          <SidebarItem icon={<Clock />} label="Delay Forecast" open={open} to="/forecast" />
          <SidebarItem icon={<Mic />} label="Vernacular & Voice" open={open} to="/vernacular" />
          <SidebarItem icon={<BarChart />} label="Case Strength" open={open} to="/strength" />
        </nav>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <Outlet />   {/* This renders the routed page */}
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, open, to }) {
  return (
    <NavLink to={to} className="sidebar-item">
      {icon}
      {open && <span>{label}</span>}
    </NavLink>
  );
}
