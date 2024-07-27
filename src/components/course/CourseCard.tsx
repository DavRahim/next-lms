import Ratings from "@/lib/Ratings";
import { AlignJustify, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
    course: any;
    isProfile?: boolean
};

const CourseCard: FC<Props> = ({ course, isProfile }) => {
    return (
        <>
            <Link href={!isProfile ? `/course/${course._id}` : `course-access/${course._id}`} className="w-full bg-[#fff] backdrop-blur border dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner mb-[80px] border-green-200">
                <Image
                    src={course.thumbnail.url ? course?.thumbnail?.url : '/course.jpg'}
                    className="rounded w-full"
                    alt="course"
                    width={500}
                    height={300}
                />
                <br />
                <h1 className="font-Poppins text-[16px] text-gray-900">
                    {/* Journey Of Frontend Web Development */}
                    {course?.name}
                </h1>
                <div className="w-full flex items-center justify-between pt-2">
                    <div className="flex mt-1 ml-2 md:mt-0 md:ml-0">
                        <Ratings rating={course?.rating} />
                        {/* <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                        <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                        <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                        <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                        <Star className='h-4 w-4 stroke-[3px] text-green-600' /> */}
                    </div>
                    <h5 className="text-gray-900 undefined"> {course?.purchased}  Students</h5>
                </div>
                <div className="w-full flex items-center justify-between pt-3">
                    <div className="flex">
                        <h3 className="text-gray-900">{course?.price === 0 ? "Free" : course?.price + "$"}৳</h3>
                        <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-gray-900">{course?.estimatePrice}৳</h5>
                    </div>
                    <div className="flex items-center pb-3">
                        <AlignJustify className='h-4 w-4 stroke-[3px] text-green-600' />
                        <h5 className="pl-2 text-gray-900">{course?.courseData?.length} Lectures</h5>
                    </div>
                </div>
            </Link>
        </>);
};

export default CourseCard;
