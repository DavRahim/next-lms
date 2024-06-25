import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
    return (
        <>
            <div className='my-10'>
                <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                    <span className='relative px-2'>
                        instructions {' '}
                        <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
                    </span>{' '}

                </h2>
                <p className="text-[16px] font-Poppins text-center md:w-[40%] mx-auto text-gray-700">Please read the following guidelines carefully before enrolling in the course</p>
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
                    <div className="pb-8 pt-1 text-gray-900">
                        <p className="mb-2 text-lg font-bold">
                            Interactive Live & Recording Classes
                        </p>
                        <p className="text-gray-800">
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
                    <div className="pb-8 pt-1 text-gray-900">
                        <p className="mb-2 text-lg font-bold">
                            Interactive Live & Recording Classes
                        </p>
                        <p className="text-gray-800">
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
                    <div className="pb-8 pt-1 text-gray-900">
                        <p className="mb-2 text-lg font-bold">
                            Interactive Live & Recording Classes
                        </p>
                        <p className="text-gray-800">
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
                    <div className="pb-8 pt-1 text-gray-900">
                        <p className="mb-2 text-lg font-bold">
                            Interactive Live & Recording Classes
                        </p>
                        <p className="text-gray-800">
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
                    <div className="pb-8 pt-1 text-gray-900">
                        <p className="mb-2 text-lg font-bold">
                            Interactive Live & Recording Classes
                        </p>
                        <p className="text-gray-800">
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

                    </div>
                    <div className="pb-8 pt-1 text-gray-900">
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
