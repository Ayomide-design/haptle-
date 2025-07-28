import React from "react";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineBell } from "react-icons/hi2";

function TopNav() {
    return (
        <div className="w-full flex justify-betweeen px-4 py-2">

            <div className="flex items-center gap-3">
                <RxDashboard className="text-2xl text-gray-400" />
                <button className="text-sm font-medium text-gray-700 border"> 
                    User Management
                </button>
            </div>
            <div className="flex justify-between ml-120">
                <div className="text-gray-400 text-sm  ">
                    Search for anything
                </div>
            </div>
            <div className="flex gap-4">
                <button className="text-gray-400 hover:text-blue-600">
                    <HiOutlineBell className="text-2xl" />
                </button>
                <button className="bg-blue-600 text-gray-400 rounded-full px-3 py-1 text-sm font-semibold">
                    SA
                </button>



                <img src="/logo1.svg" alt="Logo" className="h-8 w-auto" />
            </div>

        </div>
    );
}

export default TopNav;
