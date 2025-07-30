import React from "react";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineBell } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function TopNav() {
    return (
        <div className="w-[100%] flex justify-betweeen items-center bg-white shadow-md">

            <div className="flex items-center gap-3 py-3 ml-8">
                <RxDashboard className="text-3xl text-gray-400" />
                <MdOutlineArrowForwardIos size={20} className="text-gray-300"/>
                <button className="text-sm font-medium text-gray-700 bg-gray-200 whitespace-nowrap border-gray-300"> 
                    User Management
                </button>
            </div>
            {/* <CiSearch /> */} 
            <div className=" ml-90 px-4 py-4 ">
                <div className=" flex items-center text-gray-400 text- sm font-normal  px-15 py-2 rounded-full border border-gray-200 whitespace-nowrap"> 
                    Search for anything
                </div>
                {/* relative */}
                    {/* absolute */}
                    <div className="relative h-[100%] border-gray-300">
                        <CiSearch size={20} className="absolute bottom-3 left-5"/>
                    </div>
            </div>
            <div className="flex items-center gap-4 py-4 h-[100%]">
                <div className="text-gray-400 border rounded-xl p-1 border-gray-300  ">
                    <HiOutlineBell size={30}/>
                </div>
                <div className="flex items-center border rounded-full p-1  border-gray-300 gap-2">
                    <div className="text-[#5856D6] px-3 py-1 text-sm font-semibold rounded-full w-10 h-10 bg-gray-200 flex items-center  ">
                        SA 
                    </div>
                    <img src="/logo1.svg" alt="Logo" className="h-8 w-13" />
                </div>

            </div>

        </div>
        
    );
}

export default TopNav;
