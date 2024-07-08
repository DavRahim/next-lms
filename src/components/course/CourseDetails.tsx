import Ratings from "@/lib/Ratings";
import React from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import CourseContentList from "./CourseContentList";

type Props = {};

const CourseDetails = (props: Props) => {
    // const data = [{
    // name: "Laravel stack / LMS project ok",
    // description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
    // price: 30,
    // estimatePrice: 90,
    // tags: "Spruing, LMS, Next14, node js, redis",
    // level: "intermediats",
    // demoUrl: "haga231",
    // benefits: [
    //     {
    //         title: "next will as loast of data"
    //     },
    //     {
    //         title: "Next is wonder full  fremwork"
    //     },
    //     {
    //         title: "Next is wonder full  fremwork and full stack"
    //     }
    // ],
    // prerequisites: [
    //     {
    //         title: "you need bacis knwolog of MERN Stack"
    //     },
    //     {
    //         title: "you must to complite my simple project "
    //     },
    //     {
    //         title: "you must know that react js and javascript"
    //     }
    // ],
    //     courseData: [
    //         {
    //             videoUrl: "hello123",
    //             title: "Project falme string trp",
    //             videoSection: "Plaing and Project stracuition",
    //             description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
    //             videoLength: 12,
    //             links: [
    //                 {
    //                     title: "Source code",
    //                     url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
    //                 }
    //             ]
    //         }
    //     ]
    // }]

    const data = [
        {
            videoUrl: "hello123",
            title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
            videoSection: "Plaing and Project stracuition",
            description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
            videoLength: 12,
            links: [
                {
                    title: "Source code",
                    url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
                }
            ]
        },
        {
            videoUrl: "hello123",
            title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
            videoSection: "Plaing and Project stracuition",
            description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
            videoLength: 12,
            links: [
                {
                    title: "Source code",
                    url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
                }
            ]
        },
        {
            videoUrl: "hello123",
            title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
            videoSection: "Plaing and Project stracuition",
            description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
            videoLength: 12,
            links: [
                {
                    title: "Source code",
                    url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
                }
            ]
        },
        {
            videoUrl: "hello123",
            title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
            videoSection: "Plaing and Project stracuition",
            description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
            videoLength: 12,
            links: [
                {
                    title: "Source code",
                    url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
                }
            ]
        },
        {
            videoUrl: "hello123",
            title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
            videoSection: "Plaing and Project stracuition",
            description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
            videoLength: 12,
            links: [
                {
                    title: "Source code",
                    url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
                }
            ]
        },
    ]
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
                    {/* course content list */}
                    {/* <CourseContentList data={data?.course?.courseData} isDemo={true} /> */}
                    <CourseContentList data={data} isDemo={true} />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
