import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AlignJustify, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
    return (

        <MaxWidthWrapper className='flex-1 flex flex-col'>
            <div className="w-full flex items-center flex-wrap my-7">
                <div className="h-[35px] bg-[#14dc71] m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer">All</div>
                <div>
                    <div className="h-[35px] bg-[#0ba2de] m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer">Programming</div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] mb-[80px] border-0">
                <Link href={'/'}>
                    <div className="w-full min-h-[35vh] bg-[#fff] backdrop-blur border dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner mb-[80px] border-green-200">
                        <Image
                            src={'/course.jpg'}
                            className="rounded w-full"
                            alt="course"
                            width={500}
                            height={300}
                        />
                        <br />
                        <h1 className="font-Poppins text-[16px] text-gray-900">Journey Of Frontend Web Development</h1>
                        <div className="w-full flex items-center justify-between pt-2">
                            <div className="flex mt-1 ml-2 md:mt-0 800px:ml-0">
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                            </div>
                            <h5 className="text-gray-900 undefined"> 500  Students</h5>
                        </div>
                        <div className="w-full flex items-center justify-between pt-3">
                            <div className="flex">
                                <h3 className="text-gray-900">5000৳</h3>
                                <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-gray-900">6000৳</h5>
                            </div>
                            <div className="flex items-center pb-3">
                                <AlignJustify className='h-4 w-4 stroke-[3px] text-green-600' />
                                <h5 className="pl-2 text-gray-900">144 Lectures</h5>
                            </div>
                        </div>

                    </div>
                </Link>
                <Link href={'/'}>
                    <div className="w-full min-h-[35vh] bg-[#fff] backdrop-blur border dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner mb-[80px] border-green-200">
                        <Image
                            src={'/course.jpg'}
                            className="rounded w-full"
                            alt="course"
                            width={500}
                            height={300}
                        />
                        <br />
                        <h1 className="font-Poppins text-[16px] text-gray-900">Journey Of Frontend Web Development</h1>
                        <div className="w-full flex items-center justify-between pt-2">
                            <div className="flex mt-1 ml-2 md:mt-0 800px:ml-0">
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                            </div>
                            <h5 className="text-gray-900 undefined"> 500  Students</h5>
                        </div>
                        <div className="w-full flex items-center justify-between pt-3">
                            <div className="flex">
                                <h3 className="text-gray-900">5000৳</h3>
                                <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-gray-900">6000৳</h5>
                            </div>
                            <div className="flex items-center pb-3">
                                <AlignJustify className='h-4 w-4 stroke-[3px] text-green-600' />
                                <h5 className="pl-2 text-gray-900">144 Lectures</h5>
                            </div>
                        </div>

                    </div>
                </Link>
                <Link href={'/'}>
                    <div className="w-full min-h-[35vh] bg-[#fff] backdrop-blur border dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner mb-[80px] border-green-200">
                        <Image
                            src={'/course.jpg'}
                            className="rounded w-full"
                            alt="course"
                            width={500}
                            height={300}
                        />
                        <br />
                        <h1 className="font-Poppins text-[16px] text-gray-900">Journey Of Frontend Web Development</h1>
                        <div className="w-full flex items-center justify-between pt-2">
                            <div className="flex mt-1 ml-2 md:mt-0 800px:ml-0">
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                                <Star className='h-4 w-4 stroke-[3px] text-green-600' />
                            </div>
                            <h5 className="text-gray-900 undefined"> 500  Students</h5>
                        </div>
                        <div className="w-full flex items-center justify-between pt-3">
                            <div className="flex">
                                <h3 className="text-gray-900">5000৳</h3>
                                <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-gray-900">6000৳</h5>
                            </div>
                            <div className="flex items-center pb-3">
                                <AlignJustify className='h-4 w-4 stroke-[3px] text-green-600' />
                                <h5 className="pl-2 text-gray-900">144 Lectures</h5>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        </MaxWidthWrapper>
    );
};

export default Page;
