import React from "react";
import CourseDetails from "./CourseDetails";
import { useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";


type Props = {
    id: string
};

const CourseDetailsPage = ({ id }: Props) => {
    const { data:courseDetailsData, isLoading } = useGetCoursesDetailsQuery(id);

    return (
    <div>
            <CourseDetails courseDetailsData={courseDetailsData}/>
    </div>);
};

export default CourseDetailsPage;
