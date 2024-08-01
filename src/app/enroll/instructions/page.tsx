import { Metadata } from "next";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import Heading from "@/lib/Heading";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Learning Instructions | RS LMS",
    description: "E-Learning is platform for student to learn and get help form teachers",
    keywords: "Programming, Redux, Next js, Javascript"
};


type Props = {};

const Page = (props: Props) => {
    return (
        <>
            <div className='my-10'>
                <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 dark:text-white'>
                    <span className='relative px-2'>
                        instructions {' '}
                        <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
                    </span>{' '}

                </h2>
                <p className="text-[16px] font-Poppins text-center md:w-[40%] mx-auto text-gray-700 dark:text-gray-300">Please read the following guidelines carefully before enrolling in the course</p>
            </div>
            <div className='lg:py-6 lg:pr-16 gap-4 xl:pr-20'>
                <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                        <div>
                            <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                                <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                            </div>
                        </div>
                        <div className="h-full w-px bg-green-600"></div>
                    </div>
                    <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                        <p className="mb-2 text-lg font-bold">
                            Interactive Live & Recording Classes
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                            Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                        <div>
                            <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                                <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                            </div>
                        </div>
                        <div className="h-full w-px bg-green-600"></div>
                    </div>
                    <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                        <p className="mb-2 text-lg font-bold">
                            Module Based Study Plan
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                            There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                        <div>
                            <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                                <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                            </div>
                        </div>
                        <div className="h-full w-px bg-green-600"></div>
                    </div>
                    <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                        <p className="mb-2 text-lg font-bold">
                            Conceptual Crash Course
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                            You Are Not Just Enrolling In One Course. It s A Mission To Learn Lifelong Programming Journey With Rs Lms.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                        <div>
                            <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                                <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                            </div>
                        </div>
                        <div className="h-full w-px bg-green-600"></div>
                    </div>
                    <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                        <p className="mb-2 text-lg font-bold">
                            Freelancing & Job Placement Guide
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                            Only Serious Course Completers Will Get A Freelancing Guide And Job Placement Support From Zero To Until Success Your Career.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                        <div>
                            <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                                <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                            </div>
                        </div>
                        <div className="h-full w-px bg-green-600"></div>
                    </div>
                    <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                        <p className="mb-2 text-lg font-bold">
                            Learning Process Track Record
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                            Track Your Progress In Real Time To See Your Position On The Leader Board And Get Ahead Of Everyone Else In The Competition.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                        <div>
                            <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                                <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                            </div>
                        </div>
                    </div>
                    <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                        <p className="text-lg font-bold">
                            Unlimited Support
                        </p>
                    </div>
                </div>
            </div>
            <Link className="mx-auto mb-10" href={'/enroll/registration'}>
                <Button>Follow the terms and conditions and proceed to the next step <ArrowRight className="h-4 w-6 text-white fill-white" /></Button>
            </Link>
        </>

    );
};

export default Page;
