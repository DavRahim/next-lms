import Ratings from "@/lib/Ratings";
import React, { useState } from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import CourseContentList from "./CourseContentList";
import Image from "next/image";
import Link from "next/link";
import CoursePlayer from "./CoursePlayer";
import { buttonVariants } from "../ui/button";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "../payment/CheckOutForm";
import { format } from "timeago.js";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


type Props = {
    courseDetailsData: any;
    clientSecret: any;
    stripePromise: any;
};

const CourseDetails = ({ courseDetailsData, stripePromise, clientSecret }: Props) => {
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

    // const data = [
    //     {
    //         videoUrl: "hello123",
    //         title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
    //         videoSection: "Plaing and Project stracuition",
    //         description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
    //         videoLength: 12,
    //         links: [
    //             {
    //                 title: "Source code",
    //                 url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
    //             }
    //         ]
    //     },
    //     {
    //         videoUrl: "hello123",
    //         title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
    //         videoSection: "Plaing and Project stracuition",
    //         description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
    //         videoLength: 12,
    //         links: [
    //             {
    //                 title: "Source code",
    //                 url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
    //             }
    //         ]
    //     },
    //     {
    //         videoUrl: "hello123",
    //         title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
    //         videoSection: "Plaing and Project stracuition",
    //         description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
    //         videoLength: 12,
    //         links: [
    //             {
    //                 title: "Source code",
    //                 url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
    //             }
    //         ]
    //     },
    //     {
    //         videoUrl: "hello123",
    //         title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
    //         videoSection: "Plaing and Project stracuition",
    //         description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
    //         videoLength: 12,
    //         links: [
    //             {
    //                 title: "Source code",
    //                 url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
    //             }
    //         ]
    //     },
    //     {
    //         videoUrl: "hello123",
    //         title: "Multi-Vendor MERN Stack E-commerce project With All functionalities absolutely for beginners Part 1",
    //         videoSection: "Plaing and Project stracuition",
    //         description: "MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development MERN Stack Developer | Helping MERN Stack Devs Level Up Their Skills. Posts & Articles about MERN Stack Development",
    //         videoLength: 12,
    //         links: [
    //             {
    //                 title: "Source code",
    //                 url: "https://github.com/DavRahim?tab=overview&from=2024-03-01&to=2024-03-03"
    //             }
    //         ]
    //     },
    // ]

    const { user } = useSelector((state: any) => state.auth);
    const isPurchased = user && user?.courses?.find((item: any) => item?._id === courseDetailsData?._id);
    const [open, setOpen] = useState(false)
    const discountPercentage = ((courseDetailsData?.estimatePrice - courseDetailsData?.price) / courseDetailsData?.estimatePrice) * 100;

    const discountPercentagePrice = discountPercentage.toFixed(0);

    const handleOrder = (e: any) => {
        if (user) {
            setOpen(true)
        }
    }
    return (
        <>
            <div className="w-full flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-[65%] md:pr-5">
                    <h1 className="text-[25px] font-[500] text-black">
                        {courseDetailsData?.name}
                    </h1>
                    <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center justify-center">
                            <Ratings rating={4} />
                            <h5 className="text-black"> {courseDetailsData?.review?.length} Review</h5>
                        </div>
                        <h5 className="text-black">
                            {courseDetailsData?.purchased} Students
                        </h5>
                    </div>
                    <br />
                    <h1 className="text-[25px] font-Poppins font-[600] text-black">
                        What you will learn from this Course ?
                    </h1>
                    <div>
                        {
                            courseDetailsData?.benefits?.map((item: any, index: number) => (
                                <div key={index} className="w-full flex md:items-center py-2">
                                    <div className="w-[15px] mr-1">
                                        <IoCheckmarkDoneOutline size={20} className="text-black" />
                                    </div>
                                    <p className="pl-2 text-black">{item?.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* befit */}
                    {/* <div> */}
                    {/* befit */}
                    {/* <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You will be able to build a full stack multivendor E-commerce website</p>
                    </div> */}
                    {/* befit */}
                    {/* <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You will learn the best practices of MERN stack</p>
                    </div> */}
                    {/* befit */}
                    {/* <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You will learn how to build a chatting app with the power of socket io and MERN stack</p>
                    </div> */}
                    {/* </div> */}
                    <br />
                    <br />
                    <h1 className="text-[25px] font-Poppins font-[600] text-black">
                        What are the prerequisites for starting this Course ?
                    </h1>
                    {/* prerequisites */}
                    <div>
                        {
                            courseDetailsData?.prerequisites?.map((item: any, index: number) => (
                                <div key={index} className="w-full flex md:items-center py-2">
                                    <div className="w-[15px] mr-1">
                                        <IoCheckmarkDoneOutline size={20} className="text-black" />
                                    </div>
                                    <p className="pl-2 text-black">{item.title}</p>
                                </div>
                            ))
                        }
                        {/* pre1 */}
                        {/* <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You need basic knowledge of MERN stack</p>
                    </div> */}
                        {/* pre1 */}
                        {/* <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You need to complete any simple MERN project before</p>
                    </div> */}
                        {/* pre1 */}
                        {/* <div className="w-full flex md:items-center py-2">
                        <div className="w-[15px] mr-1">
                            <IoCheckmarkDoneOutline size={20} className="text-black" />
                        </div>
                        <p className="pl-2 text-black">You need knowledge of full stack like how to create backend server how its work and how to connect in frontend</p>
                    </div> */}
                    </div>
                    <br />
                    <br />
                    <div>
                        <h1 className="text-[25px] font-Poppins font-[600] text-black">
                            Course Overview
                        </h1>
                        {/* course content list */}
                        {/* <CourseContentList data={data?.course?.courseData} isDemo={true} /> */}
                        <CourseContentList data={courseDetailsData?.courseData} isDemo={true} />
                    </div>
                    <br />
                    <br />
                    <div className="w-full">
                        <h1 className="text-[25px] font-Poppins font-[600] text-black">
                            Course Details
                        </h1>
                        <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black">{courseDetailsData?.description}</p>
                    </div>
                    <br />
                    <br />
                    <div className="w-full">
                        <div className="md:flex items-center">
                            <Ratings rating={courseDetailsData?.rating} />
                            <div className="mb-2 md:mb-[unset]">
                                <h5 className="text-[25px] font-Poppins text-black">
                                    {Number.isInteger(courseDetailsData?.ratings) ? courseDetailsData?.rating?.toFixed(1) : courseDetailsData?.rating?.toFixed(2)} {' '} Course Rating {courseDetailsData?.reviews?.length} Reviews
                                </h5>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* reviews */}
                    {
                        (courseDetailsData.reviews && [...courseDetailsData.reviews].reverse())?.map((review: any, index: number) => (
                            <div className="w-full pb-4" key={index}>
                                <div className="w-full flex" >
                                    <div className="w-full flex">
                                        <Avatar className="w-[40px] h-[40px]">
                                            <AvatarImage src={review.user.avatar ? review?.user?.avatar?.url : ""} alt="@avater" />
                                            <AvatarFallback>{review?.user?.name || ""}</AvatarFallback>
                                        </Avatar>
                                        {/* <div className="w-[50px] h-[50px]">
                                            <Image
                                                src={review?.user.avatar ? review?.user?.avatar?.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-[50px] h-[50px] rounded-full object-cover"
                                            />
                                        </div> */}
                                        <div className="mt-2 ml-3">
                                            <h1 className="text-[18px]">{review?.user?.name}</h1>
                                            <Ratings rating={review?.rating} />
                                            <p>
                                                {review.comment}
                                            </p>
                                            <small className="text-[#0a090983]">
                                                {format(review.createdAt)} *
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                {/* commentReplies */}
                                {
                                    review.commentReplies?.map((comReply: any, index: number) => (
                                        <div className="w-full flex md:ml-16 my-5" key={index}>
                                            <Avatar className="w-[40px] h-[40px]">
                                                <AvatarImage src={comReply.user.avatar ? comReply?.user?.avatar?.url : ""} alt="@avater" />
                                                <AvatarFallback>{comReply?.user?.name || ""}</AvatarFallback>
                                            </Avatar>

                                            {/* //<div className="w-[50px] h-[50px]">
                                            // <Image
                                            // src={comReply.user.avatar ? comReply?.user?.avatar?.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                            //         alt=""
                                            //         width={50}
                                            //         height={50}
                                            //         className="w-[50px] h-[50px] rounded-full object-cover"
                                            //     />
                                            // </div> */}
                                            <div className="pl-2">
                                                <h5 className="text-[20px]">
                                                    <div className="flex items-center">
                                                        {comReply?.user?.name} {comReply.user.role === "admin" && <VscVerifiedFilled className="text-blue-700 ml-2" size={20} />}
                                                    </div>
                                                </h5>
                                                <p>{comReply.comment}</p>
                                                <small className="text-[#0e0e0ed8]">
                                                    {format(comReply.createdAt)}
                                                </small>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="w-full md:w-[35%] relative">
                    <div className="sticky top-[100px] left-0 z-50 w-full">
                        <CoursePlayer
                            title={"title"}
                            videoUrl={"title"}
                        />
                        <div className="flex items-center">
                            <h1 className="pt-5 text-[25px] text-black">
                                {courseDetailsData?.price === 0 ? "Free" : courseDetailsData?.price + "$"}
                                {/* Free */}
                            </h1>
                            <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black">
                                {courseDetailsData?.estimatePrice} $
                                {/* 90 D */}
                            </h5>
                            <h4 className="pl-5 pt-4 text-[22px] text-black">
                                {discountPercentagePrice} % Off
                                {/* 70 % OFF */}
                            </h4>
                        </div>
                        <div className="flex items-center">
                            {/* {isPurchased ? (
                            <Link className={`${styles.button} !w-[200px] my-3 font-Poppins cursor-pointer !bg-red-500`} href={`/course-access/${data?.course?._id}`}>
                                Enter to course
                            </Link>
                        ) : (
                            <div className={`${styles.button} !w-[160px] my-3 font-Poppins cursor-pointer !bg-red-400`} onClick={handleOrder}>Buy Now {" "}${data?.course?.price}
                            </div>
                        )} */}
                            {isPurchased ? (
                                <Link className={buttonVariants({ variant: "default" })} href={`/course-access/${courseDetailsData?._id}`}>
                                    Enter to course
                                </Link>
                            ) : (
                                <div onClick={handleOrder} className={buttonVariants({ variant: "default" })}>Buy Now {" "}$ {courseDetailsData?.price}
                                </div>
                            )}
                        </div>
                        <br />
                        <p className="pb-1 text-black">
                            Source code included
                        </p>
                        <p className="pb-1 text-black">
                            Full Lifetime access
                        </p>
                        <p className="pb-1 text-black">
                            Certificate of Completion
                        </p>
                        <p className="pb-3 md:pb-1 text-black">
                            Premium support
                        </p>
                    </div>
                </div>
            </div>
            {
                open && (
                    <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
                        <div className="w-[500px] min-h-[500px] bg-white rounded-xl shadow p-3">
                            <div className="w-full flex justify-end">
                                <IoCloseOutline size={40} className="text-black cursor-pointer" onClick={() => setOpen(false)} />
                            </div>
                            <div className="w-full ">
                                {
                                    stripePromise && clientSecret && (
                                        <Elements
                                            stripe={stripePromise}
                                            options={{ clientSecret }}
                                        >
                                            <CheckOutForm user={user} setOpen={setOpen} data={courseDetailsData} />
                                        </Elements>
                                    )
                                }

                            </div>
                        </div >

                    </div >
                )
            }
        </>
    );
};

export default CourseDetails;
