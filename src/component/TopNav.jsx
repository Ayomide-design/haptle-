import React from "react";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineBell } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

function TopNav() {
    return (
        <div className="w-full flex justify-betweeen ">

            <div className="flex items-center gap-3 py-3">
                <RxDashboard className="text-3xl text-gray-400" />
                <button className="text-sm font-medium text-gray-700"> 
                    User Management
                </button>
            </div>
            {/* <CiSearch /> */}
            <div className=" ml-80 px-4 py-4">
                <div className=" flex items-center text-gray-400 text- sm font-normal border px-15 py-2 rounded-full "> 
                    Search for anything
                    <CiSearch size={10}/>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-10 py-4">
                <button className="text-gray-400 hover:text-blue-600">
                    <HiOutlineBell/>
                </button>
                <div className="flex items-center border rounded-full px-2">
                <button className="text-gray-400 rounded-full px-3 py-1 text-sm font-semibold">
                    SA 
                </button>
                <img src="/logo1.svg" alt="Logo" className="h-8 w-auto" />
                </div>

            </div>

        </div>
    );
}

export default TopNav;
