import { RxDashboard } from "react-icons/rx";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { MdAdminPanelSettings, MdPeople, MdStore, MdOutlineReport, MdContentPaste } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col justify-between p-4">
      
      <div className="m-6">
        <img src="/logo.svg" alt="logo" className="h-10 mb-4" />
      </div>
      <ul className="space-y-5">
        <li className="flex items-center gap cursor-pointer">
          <RxDashboard />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center gap-2  cursor-pointer">
          <MdAdminPanelSettings />
          <span>Admin Management</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <MdPeople />
          <span>User Management</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <MdStore />
          <span>Vendor Management</span>
        </li>
        <li className="flex items-center gap-2cursor-pointer">
          <MdOutlineReport />
          <span>Dispute Management</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <MdContentPaste />
          <span>Content Management</span>
        </li>
      </ul>

      <ul className="space-y-4 mt-10 border-t border-gray-700 pt-4">
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <span>Settings</span>
        </li>
        <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <FiLogOut />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
