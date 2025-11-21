import { useState } from "react";
import "./SideBarLayout.css";        // << ADD THIS
import { Menu, X, Home, Upload, FileText, Search, Clock, Mic, BarChart } from "lucide-react";

export default function SidebarLayout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="sidebar-layout">
      
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <nav>
          <SidebarItem icon={<Home />} label="Dashboard" open={open} />
          <SidebarItem icon={<Upload />} label="Upload New Case" open={open} />
          <SidebarItem icon={<FileText />} label="Judgement Summarizer" open={open} />
          <SidebarItem icon={<Search />} label="Similar Case Finder" open={open} />
          <SidebarItem icon={<Clock />} label="Delay Forecast" open={open} />
          <SidebarItem icon={<Mic />} label="Vernacular & Voice" open={open} />
          <SidebarItem icon={<BarChart />} label="Case Strength" open={open} />
        </nav>
      </div>

      {/* Page Content */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, open }) {
  return (
    <div className="sidebar-item">
      {icon}
      {open && <span>{label}</span>}
    </div>
  );
}
