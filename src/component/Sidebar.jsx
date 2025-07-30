import { RxDashboard } from "react-icons/rx";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { MdPersonalInjury } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="w-full h-screen bg-[#2C496A]  text-white flex flex-col justify-between p-4">
      
      <div className="m-6">
        <img src="/logo.svg" alt="logo" className="h-10 mb-4" />
      </div>
      <ul className="space-y-9">
        <li className="flex items-center gap-2 cursor-pointer">
          <RxDashboard size={23}/>
          <span>Dashboard</span>
        </li>
        <li className="flex items-center gap-2  cursor-pointer">
          <MdPersonalInjury size={23} />
          <span>Admin Management</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <IoPersonOutline size={23} />
          <span>User Management</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <IoBagHandleOutline size={23} />
          <span>Vendor Management</span>
        </li>
        <li className="flex items-center gap-2cursor-pointer">
        
          <span>Dispute Management</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
        
          <span>Content Management</span>
        </li>
      </ul>

      <ul className="space-y-4 mt-10 pt-4">
        <li className="flex items-center gap-2  cursor-pointer">
          <span>Settings</span>
        </li>
        <li className="flex items-center text-red-300 cursor-pointer"> 
          <FiLogOut />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
