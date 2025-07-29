import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";


function PageContent (){
    return (
        <>
        <div className="flex items-center">
        <div className="p-8">
            <FaArrowLeftLong size={25}/>
        </div>
        <div className="w-px h-10 bg-black"></div>
        <div className="flex items-center p-5 text-2xl font-medium text-blue-400">
            <p>Back to User List</p>
        </div>
        </div>
        </>
    )
    
}
export default PageContent;