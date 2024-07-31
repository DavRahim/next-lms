"use client"
import React from "react";
import CourseCard from "@/components/course/CourseCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { styles } from "@/lib/styles";
import Loader from "@/lib/Loader";
import Heading from "@/lib/Heading";

type Props = {};

const Page = (props: Props) => {
    const { data: courses, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
    return (
        <section className={`dark:${styles.darkTheme} min-h-screen`}>
            <Heading title="Courses"
        description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming, Redux" />
            <MaxWidthWrapper className='flex-1 flex flex-col'>
                {
                    isLoading ? <Loader /> : (<> <div className="w-full flex items-center flex-wrap my-7">
                        <div className="h-[35px] bg-[#14dc71] m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer">All</div>
                        <div>
                            <div className="h-[35px] bg-[#0ba2de] m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer">Programming</div>
                        </div>
                    </div>
                        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] mb-[80px] border-0 ml-2 sm:ml-0">
                            {
                                courses?.data && courses?.data?.map((course: any) => <CourseCard course={course} key={course._id} />)
                            }
                        </div></>)
                }
            </MaxWidthWrapper>
        </section>
    );
};

export default Page;
