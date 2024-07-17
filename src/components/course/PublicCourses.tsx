"use client"
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React from "react";
import CourseCard from "./CourseCard";

type Props = {};

const PublicCourses = (props: Props) => {
    const { data: courses, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
    return (
        <>
            {
                isLoading ? <h2> Loading ... </h2> : (<div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] mb-[80px] border-0">
                    {
                        courses?.data && courses?.data?.map((course: any) => <CourseCard course={course} key={course._id} />)
                    }
                </div>)
            }
        </>
    );
};

export default PublicCourses;
