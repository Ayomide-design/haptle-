import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import { LuCalendarRange } from "react-icons/lu"; import { CiClock2 } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoPlus } from "react-icons/go";





function DashboardContent() {
    return (
        <>
            <div className="p-8 flex flex-col">
                {/* Page Component */}
                <div className="flex items-center mb-10">
                    <div className="pr-8">
                        <FaArrowLeftLong size={25} />
                    </div>
                    <div className="w-px h-10 bg-black"></div>
                    <div className="flex items-center py-5 pl-5 text-2xl font-medium text-blue-400">
                        <p>Back to User List</p>
                    </div>
                </div>
                {/* buttom component */}
                <ul className=" flex items-center w-full py-6 gap-5 text-xl -mt-19 ">
                    <li className="font-medium">Bio Data</li>
                    <li className="text-gray-400 font-medium">Transaction History</li>
                </ul>

                <div className="flex gap-10 justify-between">
                    {/* right note taking */}
                    <div>

                        <div className="py-6 flex items-center gap-4">
                            {/* left */}
                            <CgProfile size={100} />

                            {/* right */}
                            <div className="flex flex-col gap-3">
                                <h2 className="font-medium text-2xl">Victoria Adebayo</h2>
                                <div className="p-2 border rounded flex gap-2 items-center">
                                    {/* icon for email */}
                                    <MdOutlineMarkEmailRead />
                                    <p>victoriaadeboyejo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between -mt-3 px-4">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <span>Lagos, Nigeria</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdOutlineCall size={23} />
                                    <span>+234 905 473 9272</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <LuCalendarRange size={23} />
                                    <span>Joined 2 June 2024, 6:30pm</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CiClock2 size={23} />
                                    <span>Last seen 2 days ago</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CgProfile size={23} />
                                    <span>Signed up with Google</span>
                                </li>
                            </ul>
                        </div>


                        <div className="px-4 mt-5 flex gap-4">
                            <button className="bg-[#2C496A] text-white p-3 rounded-xl">Suspend account</button>
                            <button className="text-[#2C496A] border border-[#2C496A] ">send a message</button>

                        </div>

                    </div>

                    {/* right note taking */}
                    <div>
                        <div className="flex p-3 flex-col min-w-[300px] bg-blue-100 h-full rounded-2xl">
                            <div className="flex justify-between">
                                <h3>Notes</h3>
                                <div className="flex items-center">
                                    <GoPlus size={20} />
                                    <span>New Note</span>
                                </div>
                            </div>

                            <div className="flex  ">
                                <div className="w-full flex justify-between items-center mt-10">
                                    <div className="flex">
                                        <h4>Admin:</h4> <span><strong>Bolade</strong></span>
                                    </div>
                                    <div className="p-1 bg-blue-200 rounded-xl ml-25 ">
                                        Apr 5, 2025
                                    </div>
                                    
                                    <div className="flex items-center  max-w-xs">
                                        {/* <p>dispute with vendor "annie bakes" over payment have been resolved</p> */}
                
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
export default DashboardContent;