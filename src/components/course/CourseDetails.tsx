import Ratings from "@/lib/Ratings";
import React from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";

type Props = {};

const CourseDetails = (props: Props) => {
    return (
        <div className="w-full flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-[65%] md:pr-5">
                <h1 className="text-[25px] font-[500] text-black">
                    Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners
                </h1>
                <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center justify-center">
                        <Ratings rating={4} />
                        <h5 className="text-black"> 70 Review</h5>
                    </div>
                    <h5 className="text-black">
                        3404 Students
                    </h5>
                </div>
                <br />
                <h1 className="text-[25px] font-Poppins font-[600] text-black">
                    What you will learn from this Course ?
                </h1>
                {/* befit */}
                <div>
                    {/* befit */}
                    <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black dark:text-white" />
                        </div>
                        <p className="pl-2 text-black dark:text-white">You will be able to build a full stack multivendor E-commerce website</p>
                    </div>
                    {/* befit */}
                    <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black dark:text-white" />
                        </div>
                        <p className="pl-2 text-black dark:text-white">You will learn the best practices of MERN stack</p>
                    </div>
                    {/* befit */}
                    <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black dark:text-white" />
                        </div>
                        <p className="pl-2 text-black dark:text-white">You will learn how to build a chatting app with the power of socket io and MERN stack</p>
                    </div>
                </div>
                <br />
                <br />
                <h1 className="text-[25px] font-Poppins font-[600] text-black">
                    What are the prerequisites for starting this Course ?
                </h1>
                {/* prerequisites */}
                <div>
                    {/* pre1 */}
                    <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You need basic knowledge of MERN stack</p>
                    </div>
                    {/* pre1 */}
                    <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You need to complete any simple MERN project before</p>
                    </div>
                    {/* pre1 */}
                    <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You need knowledge of full stack like how to create backend server how its work and how to connect in frontend</p>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <h1 className="text-[25px] font-Poppins font-[600] text-black">
                        Course Overview
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
