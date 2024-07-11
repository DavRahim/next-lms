import Ratings from "@/lib/Ratings";
import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import CourseContentList from "./CourseContentList";
import Image from "next/image";
import Link from "next/link";
import CoursePlayer from "./CoursePlayer";
import { buttonVariants } from "../ui/button";

type Props = {
    courseDetailsData:any
};

const CourseDetails = ({courseDetailsData}: Props) => {
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
                <br />
                <br />
                <div className="w-full">
                    <h1 className="text-[25px] font-Poppins font-[600] text-black">
                        Course Details

                    </h1>
                    <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black">Welcome to the MERN stack Multi Vendor Ecommerce startup series. In this series, you will learn how to build a startup project with the power of MERN and other latest technologies like tailwind CSS, socket io, redux toolkit, etc.
                        This is a free MERN stack startup series that you will not find on youtube and Udemy right now.

                        support me:
                        https://www.buymeacoffee.com/shahriariarsajeeb

                        Connects with me
                        Instagram: https://www.instagram.com/shahriar_sajeeb
                        Gmail: support@becodemy.com

                        #mern_stack #nodejs #tailwindcss #socketio #becodemy # Multi Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners

                        For business inquiries:
                        sponsorship@becodemy.com
                    </p>
                </div>
                <br />
                <br />
                <div className="w-full">
                    <div className="md:flex items-center">
                        <Ratings rating={5} />
                        <div className="mb-2 800px:mb-[unset]">
                            <h5 className="text-[25px] font-Poppins text-black dark:text-white">
                                {Number.isInteger(3) ? 4 : 3} {' '} Course Rating 4 Reviews
                            </h5>
                        </div>
                    </div>
                </div>
                <br />
                {/* reviews */}
                <div className="w-full pb-4 dark:text-white">
                    <div className="w-full flex">
                        <div className="w-full flex">
                            <div className="w-[50px] h-[50px]">
                                <Image
                                    src={"https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="w-[50px] h-[50px] rounded-full object-cover"
                                />
                            </div>
                            <div className="mt-2 ml-3">
                                <h1 className="text-[18px]">Abdur Rahim</h1>
                                <Ratings rating={5} />
                                <p>
                                    it is an amazing course
                                </p>
                                <small className="text-[#ffffff83]">
                                    11/ 12/2020
                                </small>
                            </div>
                        </div>
                    </div>
                    {/* commentReplies */}
                    <div className="w-full flex md:ml-16 my-5">
                        <div className="w-[50px] h-[50px]">
                            <Image
                                src={"https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                alt=""
                                width={50}
                                height={50}
                                className="w-[50px] h-[50px] rounded-full object-cover"
                            />

                        </div>
                        <div className="pl-2">
                            <h5 className="text-[20px]">
                                <div className="flex items-center">
                                    Abdur Rahim {<VscVerifiedFilled className="text-blue-700 ml-2" size={20} />}
                                </div>
                            </h5>
                            <p>Thank you</p>
                            <small className="text-[#ffffff83]">
                                11/ 12/2020
                            </small>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full md:w-[35%] relative">
                <div className="sticky top-[100px] left-0 z-50 w-full">
                    <CoursePlayer
                        title={"title"}
                        videoUrl={"title"}
                    />
                    <div className="flex items-center">
                        <h1 className="pt-5 text-[25px] text-black dark:text-white">
                            {/* {data?.course?.price === 0 ? "Free" : data?.course?.price + "$"} */}
                            Free
                        </h1>
                        <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-white">
                            {/* {data?.course?.estimatePrice} $ */}
                            90 D
                        </h5>
                        <h4 className="pl-5 pt-4 text-[22px] text-black dark:text-white">
                            {/* {discountPercentagePrice} % Off */}
                            70 % OFF
                        </h4>
                    </div>
                    <div className="flex items-center">
                        {/* {isPurchased ? (
                            <Link className={`${styles.button} !w-[200px] my-3 dark:text-white font-Poppins cursor-pointer !bg-red-500`} href={`/course-access/${data?.course?._id}`}>
                                Enter to course
                            </Link>
                        ) : (
                            <div className={`${styles.button} !w-[160px] dark:text-white my-3 font-Poppins cursor-pointer !bg-red-400`} onClick={handleOrder}>Buy Now {" "}${data?.course?.price}
                            </div>
                        )} */}
                        {false ? (
                            <Link className={`!w-[200px] my-3 dark:text-white font-Poppins cursor-pointer !bg-red-500`} href={`/course-access`}>
                                Enter to course
                            </Link>
                        ) : (
                            <div className={buttonVariants({ variant: "default" })}>Buy Now {" "}$ 90
                            </div>
                        )}
                    </div>
                    <br />
                    <p className="pb-1 text-black dark:text-white">
                        Source code included
                    </p>
                    <p className="pb-1 text-black dark:text-white">
                        Full Lifetime access
                    </p>
                    <p className="pb-1 text-black dark:text-white">
                        Certificate of Completion
                    </p>
                    <p className="pb-3 800px:pb-1 text-black dark:text-white">
                        Premium support
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
